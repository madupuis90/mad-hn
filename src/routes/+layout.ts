import type { LayoutLoadEvent } from './$types';

export function load(event: LayoutLoadEvent) {
  return { urls: ['newest', 'best', 'show', 'ask', 'jobs'] };
}