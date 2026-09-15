export const DECKS = [
  {
    id: 'javascript',
    name: 'JavaScript Fundamentals',
    emoji: '🟨',
    color: '#e5b53a',
    description: 'Types, scope, closures, prototypes, async, and the quirks that show up in every interview.',
  },
  {
    id: 'react',
    name: 'React Essentials',
    emoji: '⚛️',
    color: '#4d9df0',
    description: 'Components, hooks, rendering behaviour, state management, and performance.',
  },
  {
    id: 'css',
    name: 'CSS & Layout',
    emoji: '🎨',
    color: '#c46be0',
    description: 'The cascade, specificity, flexbox, grid, units, and modern layout techniques.',
  },
  {
    id: 'webapi',
    name: 'Web APIs & Browser',
    emoji: '🌐',
    color: '#35c99a',
    description: 'DOM, events, storage, fetch, observers, and how the browser actually runs your page.',
  },
  {
    id: 'cs',
    name: 'CS Foundations',
    emoji: '🧠',
    color: '#f2695c',
    description: 'Big-O, data structures, algorithms, and the vocabulary behind them.',
  },
  {
    id: 'git',
    name: 'Git & Tooling',
    emoji: '🛠️',
    color: '#f2762e',
    description: 'Version control day-to-day, plus bundlers, package managers, and the build pipeline.',
  }
];

export const getDeck = (id) => DECKS.find((d) => d.id === id);
