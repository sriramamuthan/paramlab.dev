export const SITE = {
  title: 'Sriram Amuthan',
  description:
    'Building things in public: rebuilding famous engineering failures, and explaining science and maths with code you can play with.',
  author: 'Sriram Amuthan',
  github: 'https://github.com/', // TODO: add GitHub username
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
