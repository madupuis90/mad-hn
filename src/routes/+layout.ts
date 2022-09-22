import type { LayoutLoadEvent, LayoutParams } from './$types';

interface NavItem {
  path: string;
  name: string;
  icon?: string;
}
export function load(event: LayoutLoadEvent) {


  const navItems: NavItem[] = [
    {
      path: '/newest',
      name: 'new'
    },
    {
      path: '/front',
      name: 'past'
    },
    {
      path: '/newcomments',
      name: 'comments'
    },
    {
      path: '/ask',
      name: 'ask'
    },
    {
      path: '/show',
      name: 'show'
    },
    {
      path: '/jobs',
      name: 'jobs'
    },
    {
      path: '/submit',
      name: 'submit'
    },
  ];

  return { navItems, routeId: `/${event.routeId}` };
}