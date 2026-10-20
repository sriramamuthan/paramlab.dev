// Serves media with HTTP range support. Static assets on their own answer every request with the whole file, and
// Safari (including every iPhone browser) won't play or seek a video unless it gets partial (206) responses.
// Only /video/* and /audio/* reach this Worker (see run_worker_first in wrangler.jsonc); everything else is served
// straight from dist/.
export default {
  async fetch(request, env) {
    const asset = await env.ASSETS.fetch(new Request(request.url, { method: 'GET' }));
    if (asset.status !== 200) return asset;

    const headers = new Headers(asset.headers);
    headers.set('Accept-Ranges', 'bytes');
    headers.set('Cache-Control', 'public, max-age=86400');

    const body = await asset.arrayBuffer();
    const size = body.byteLength;
    const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get('Range') ?? '');

    if (!range || (range[1] === '' && range[2] === '')) {
      headers.set('Content-Length', String(size));
      return new Response(request.method === 'HEAD' ? null : body, { status: 200, headers });
    }

    // "bytes=a-b", "bytes=a-" or the suffix form "bytes=-n" (last n bytes).
    let start = range[1] === '' ? size - Number(range[2]) : Number(range[1]);
    let end = range[1] === '' || range[2] === '' ? size - 1 : Math.min(Number(range[2]), size - 1);
    start = Math.max(0, start);
    if (start >= size || start > end) {
      headers.set('Content-Range', `bytes */${size}`);
      return new Response(null, { status: 416, headers });
    }

    headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
    headers.set('Content-Length', String(end - start + 1));
    return new Response(request.method === 'HEAD' ? null : body.slice(start, end + 1), { status: 206, headers });
  },
};
