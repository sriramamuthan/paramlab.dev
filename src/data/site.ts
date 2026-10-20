export const SITE = {
  title: 'ParamLab',
  tagline: 'Change one thing. See what happens.',
  description:
    'I rebuild famous engineering failures as code you can run and break, and explain school science and maths with the code left in.',
  author: 'Ram',
  github: 'https://github.com/sriramamuthan/',
  youtube: '', // TODO: add channel URL once created
};

export type SeriesId = 'lab' | 'explore';

export interface Series {
  id: SeriesId;
  name: string;
  tagline: string;
  description: string;
  repo?: string;
}

export const SERIES: Record<SeriesId, Series> = {
  lab: {
    id: 'lab',
    name: 'Post-Mortem Lab',
    tagline: 'Break it yourself.',
    description:
      'One real failure per episode: Ariane 5, Therac-25, Knight Capital. I rebuild the exact mechanism as code, you trigger the bug in your browser, then we fix it and prove the fix with a test.',
    repo: 'postmortem-lab',
  },
  explore: {
    id: 'explore',
    name: 'Show Me Why',
    tagline: 'The code is the explanation.',
    description:
      'School science and maths with the source code left in. Change gravity in the code and watch why 45° wins. Made for students who want the “why”, not just the formula.',
  },
};
