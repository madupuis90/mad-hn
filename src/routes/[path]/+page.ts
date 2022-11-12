import type { PageLoadEvent } from './$types';
import { PUBLIC_HEROKU_BASE_URL, PUBLIC_HN_BASE_URL } from '$env/static/public';

export interface Story {
  id: number,
  comments_count: number,
  domain: string,
  points: number,
  time: number,
  time_ago: string,
  title: string,
  type: string,
  url: string,
  user: string,
};

export async function load(event: PageLoadEvent) {
  const page = +(event.url.searchParams.get('page') ?? 1);
  const path = event.params.path;

  const res = await event.fetch(`${PUBLIC_HEROKU_BASE_URL}/${path}?page=${page}`);
  let stories: Story[] = await res.json();

  return { stories };
}