import { getCollection, type CollectionEntry } from 'astro:content';
import type { SeriesId } from './site';

export type Post = CollectionEntry<'posts'>;

export const seriesOf = (post: Post) => post.id.split('/')[0] as SeriesId;
export const slugOf = (post: Post) => post.id.split('/').slice(1).join('/');
export const urlOf = (post: Post) => `/${seriesOf(post)}/${slugOf(post)}/`;

/** Published posts, newest first. Drafts show up in `astro dev` only. */
export async function getPosts(series?: SeriesId): Promise<Post[]> {
  const posts = await getCollection(
    'posts',
    (p) => (import.meta.env.DEV || !p.data.draft) && (!series || seriesOf(p) === series),
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
