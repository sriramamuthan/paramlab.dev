export const SITE = {
  title: 'ParamLab',
  tagline: 'Change one thing. See what happens.',
  description:
    'Famous engineering failures you can break yourself, and science and maths explained with code you can play with.',
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
      'History’s most expensive software and engineering failures, rebuilt as small simulations you can run, break and fix in your browser. One bug per episode, one lesson that sticks.',
    repo: 'postmortem-lab',
  },
  explore: {
    id: 'explore',
    name: 'Show Me Why',
    tagline: 'Science and maths you can poke at.',
    description:
      'Ideas from school science and maths explained visually with code. Every explainer is interactive, and every line of code behind it is open for you to change.',
  },
};
