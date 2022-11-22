import type { PageLoadEvent } from './$types';
import { PUBLIC_HEROKU_BASE_URL, PUBLIC_HN_BASE_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { Story } from 'src/models/story';

export async function load(event: PageLoadEvent) {
  const path = event.params.path;
  const layoutData = await event.parent();

  if (!layoutData.urls.includes(path) && path !== 'news') throw error(404, 'Not Found');

  const page = +(event.url.searchParams.get('page') ?? 1);

  const res = await event.fetch(`${PUBLIC_HEROKU_BASE_URL}/${path}?page=${page}`);
  let stories: Story[] = await res.json();

  return { stories };
}