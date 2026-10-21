import type { SeriesId } from './site';

export type Status = 'published' | 'in-progress' | 'planned';

export interface RoadmapItem {
  ref: string;
  title: string;
  year?: string;
  hook: string;
  status: Status;
  href?: string;
}

export const ROADMAP: Record<SeriesId, RoadmapItem[]> = {
  lab: [
    { ref: 'EP-00', title: 'Launch', hook: 'Why rebuild disasters at all', status: 'published', href: '/lab/ep-00-break-it-yourself/' },
    { ref: 'EP-01', title: 'Ariane 5', year: '1996', hook: 'Two computers, one bug, 39 seconds', status: 'published', href: '/lab/ep-01-ariane-5/' },
    { ref: 'EP-02', title: 'Mars Climate Orbiter', year: '1999', hook: 'Pounds on one side, newtons on the other', status: 'published', href: '/lab/ep-02-mars-climate-orbiter/' },
    { ref: 'EP-03', title: 'Patriot missile, Dhahran', year: '1991', hook: 'A clock that drifted a third of a second', status: 'in-progress' },
    { ref: 'EP-04', title: 'Therac-25', year: '1985–87', hook: 'A race condition in a radiation machine', status: 'planned' },
    { ref: 'EP-05', title: 'Knight Capital', year: '2012', hook: 'A reused feature flag, $440M in 45 minutes', status: 'planned' },
    { ref: 'EP-06', title: 'Cloudflare outage', year: '2019', hook: 'One regex took down a global network', status: 'planned' },
    { ref: 'EP-07', title: 'CrowdStrike', year: '2024', hook: 'A config file that crashed 8.5M machines', status: 'planned' },
  ],
  explore: [
    { ref: 'SMW-01', title: 'Why 45° throws furthest', hook: 'Projectile motion with gravity you can edit', status: 'planned' },
    { ref: 'SMW-02', title: 'What a derivative really is', hook: 'Zoom into any curve until it turns straight', status: 'planned' },
    { ref: 'SMW-03', title: 'Why we have seasons', hook: 'It’s the tilt, not the distance', status: 'planned' },
    { ref: 'SMW-04', title: 'The Monty Hall problem', hook: 'Play 10,000 games and watch intuition lose', status: 'planned' },
    { ref: 'SMW-05', title: 'Drawing with circles', hook: 'Fourier series you can sketch into', status: 'planned' },
  ],
};

export const STATUS_LABEL: Record<Status, string> = {
  published: 'Published',
  'in-progress': 'In progress',
  planned: 'Planned',
};
