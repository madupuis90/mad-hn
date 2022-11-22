import type { PageLoadEvent } from './$types';
import { PUBLIC_HEROKU_BASE_URL, PUBLIC_HN_BASE_URL } from '$env/static/public';
import type { Story } from 'src/models/story';

export async function load(event: PageLoadEvent) {
  const page = +(event.url.searchParams.get('page') ?? 1);

  const res = await event.fetch(`${PUBLIC_HEROKU_BASE_URL}/news?page=${page}`);
  let stories: Story[] = await res.json();

  return { stories };
}