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
  },
    {
    id: 'typescript',
    name: 'TypeScript Power User',
    emoji: '🔷',
    color: '#3178c6',
    description: 'Types, interfaces, generics, utility types, narrowing, and configuration strategies.',
  },
  {
    id: 'testing',
    name: 'Testing & Quality',
    emoji: '🧪',
    color: '#2ea44f',
    description: 'Unit tests, integration, E2E, mocking, rendering tests, and writing testable code.',
  },
  {
    id: 'perf',
    name: 'Web Performance',
    emoji: '⚡',
    color: '#ff8c00',
    description: 'Core Web Vitals, bundle optimization, lazy loading, caching, and rendering paths.',
  },
  {
    id: 'security',
    name: 'Web Security',
    emoji: '🛡️',
    color: '#e05353',
    description: 'XSS, CSRF, CORS, CSP headers, authentication, JWTs, and secure data handling.',
  },
  {
    id: 'accessibility',
    name: 'Accessibility (a11y)',
    emoji: '♿',
    color: '#7057ff',
    description: 'Semantic HTML, ARIA attributes, keyboard navigation, focus management, and WCAG standards.',
  },
  {
    id: 'backend',
    name: 'Node.js & Backend',
    emoji: '🟢',
    color: '#83cd29',
    description: 'Event loop, streams, REST APIs, databases, middleware, and server-side logic.',
  },

];

export const getDeck = (id) => DECKS.find((d) => d.id === id);
