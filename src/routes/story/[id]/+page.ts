import { PUBLIC_HEROKU_BASE_URL, PUBLIC_HN_BASE_URL } from '$env/static/public';
import type { Item } from 'src/models/item';
import type { Story } from 'src/models/story';
import type { PageLoadEvent } from './$types';

export async function load(event: PageLoadEvent) {
  const id = event.params.id;
  const res = await event.fetch(`${PUBLIC_HEROKU_BASE_URL}/item/${id}`);
  let item: Item = await res.json();

  return { item };
}