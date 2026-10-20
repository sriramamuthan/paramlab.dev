import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SERIES, SITE } from '../data/site';
import { getPosts, seriesOf, urlOf } from '../data/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: `${SERIES[seriesOf(post)].name}: ${post.data.title}`,
      description: post.data.description,
      pubDate: post.data.date,
      link: urlOf(post),
      categories: post.data.tags,
    })),
  });
}
