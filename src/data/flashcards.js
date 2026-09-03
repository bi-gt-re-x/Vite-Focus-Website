export const FLASHCARDS = [

  { id: 'js-01', deckId: 'javascript', difficulty: 'easy', tags: ['types'],
    question: 'What are the seven primitive types in JavaScript?',
    answer: 'string, number, bigint, boolean, undefined, symbol, and null. Everything else is an object.' },

  { id: 'js-02', deckId: 'javascript', difficulty: 'easy', tags: ['types'],
    question: 'What is the difference between == and ===?',
    answer: '== compares after type coercion; === compares value and type with no coercion. Prefer === unless you deliberately want the coercion.' },

  { id: 'js-03', deckId: 'javascript', difficulty: 'medium', tags: ['scope', 'closures'],
    question: 'What is a closure?',
    answer: 'A function bundled with the lexical environment it was created in, so it keeps access to those outer variables even after the outer function has returned.',
    code: 'function counter() {\n  let n = 0;\n  return () => ++n;\n}\nconst next = counter();\nnext(); // 1\nnext(); // 2' },

  { id: 'js-04', deckId: 'javascript', difficulty: 'medium', tags: ['scope'],
    question: 'How do var, let and const differ?',
    answer: 'var is function-scoped and hoisted as undefined. let and const are block-scoped and sit in the temporal dead zone until declared. const forbids reassignment of the binding, not mutation of the value.' },

  { id: 'js-05', deckId: 'javascript', difficulty: 'medium', tags: ['hoisting'],
    question: 'What is hoisting?',
    answer: 'Declarations are processed before any code runs. Function declarations are fully hoisted; var bindings are hoisted and initialised to undefined; let/const are hoisted but unusable until their declaration is evaluated.' },

  { id: 'js-06', deckId: 'javascript', difficulty: 'hard', tags: ['this'],
    question: 'How is the value of `this` determined in a regular function?',
    answer: 'By how the function is called: as a method it is the receiver, with new it is the new object, with call/apply/bind it is the given value, otherwise it is undefined in strict mode or globalThis outside it.' },

  { id: 'js-07', deckId: 'javascript', difficulty: 'medium', tags: ['this', 'functions'],
    question: 'How do arrow functions treat `this`?',
    answer: 'They have no own `this` — it is captured from the enclosing lexical scope at definition time and cannot be changed by call, apply, or bind.' },

  { id: 'js-08', deckId: 'javascript', difficulty: 'hard', tags: ['prototypes'],
    question: 'What is the prototype chain?',
    answer: 'Every object has an internal link to another object (its prototype). Property lookups walk that chain until the property is found or the chain reaches null.' },

  { id: 'js-09', deckId: 'javascript', difficulty: 'medium', tags: ['async'],
    question: 'What are the three states of a Promise?',
    answer: 'pending, fulfilled, and rejected. Once it settles into fulfilled or rejected the state and value are final.' },

  { id: 'js-10', deckId: 'javascript', difficulty: 'hard', tags: ['async', 'event-loop'],
    question: 'Why does a Promise callback run before a setTimeout of 0?',
    answer: 'Promise callbacks go on the microtask queue, which is drained completely after the current task and before the next macrotask (timers, I/O, rendering).' },

  { id: 'js-11', deckId: 'javascript', difficulty: 'medium', tags: ['async'],
    question: 'What does async/await actually do?',
    answer: 'An async function always returns a Promise; await pauses the function until the awaited Promise settles, resuming in a microtask. It is syntax over .then() chains, not a new concurrency model.' },

  { id: 'js-12', deckId: 'javascript', difficulty: 'medium', tags: ['async'],
    question: 'Difference between Promise.all and Promise.allSettled?',
    answer: 'Promise.all rejects as soon as any input rejects. Promise.allSettled always fulfils with an array of {status, value|reason} for every input.' },

  { id: 'js-13', deckId: 'javascript', difficulty: 'easy', tags: ['arrays'],
    question: 'What is the difference between map, forEach and filter?',
    answer: 'map returns a new array of transformed values, filter returns a new array of items passing a test, and forEach returns undefined — it exists for side effects.' },

  { id: 'js-14', deckId: 'javascript', difficulty: 'medium', tags: ['arrays'],
    question: 'What does reduce do?',
    answer: 'It folds an array into a single value by running a reducer over each element while carrying an accumulator.',
    code: 'const total = items.reduce(\n  (sum, item) => sum + item.price,\n  0\n);' },

  { id: 'js-15', deckId: 'javascript', difficulty: 'medium', tags: ['objects'],
    question: 'Shallow copy vs deep copy?',
    answer: 'A shallow copy (spread, Object.assign) copies top-level values, so nested objects stay shared. A deep copy clones the whole tree — structuredClone() does it natively.' },

  { id: 'js-16', deckId: 'javascript', difficulty: 'easy', tags: ['types'],
    question: 'Which values are falsy in JavaScript?',
    answer: 'false, 0, -0, 0n, "" (empty string), null, undefined, and NaN. Everything else — including [] and {} — is truthy.' },

  { id: 'js-17', deckId: 'javascript', difficulty: 'medium', tags: ['operators'],
    question: 'How does ?? differ from ||?',
    answer: '?? falls back only when the left side is null or undefined. || falls back on any falsy value, so 0 and "" would be replaced too.' },

  { id: 'js-18', deckId: 'javascript', difficulty: 'medium', tags: ['functions'],
    question: 'What is currying?',
    answer: 'Turning a function of several arguments into a chain of single-argument functions, so arguments can be supplied one at a time.',
    code: 'const add = (a) => (b) => a + b;\nconst add5 = add(5);\nadd5(3); // 8' },

  { id: 'js-19', deckId: 'javascript', difficulty: 'hard', tags: ['performance'],
    question: 'Debounce vs throttle?',
    answer: 'Debounce waits until activity stops for N ms then fires once (good for search inputs). Throttle fires at most once per N ms during activity (good for scroll and resize).' },

  { id: 'js-20', deckId: 'javascript', difficulty: 'medium', tags: ['modules'],
    question: 'Difference between named and default exports?',
    answer: 'Named exports are imported by exact name in braces and a module can have many. A default export is one per module and the importer chooses its own name.' },

  { id: 'js-21', deckId: 'javascript', difficulty: 'hard', tags: ['equality'],
    question: 'Why does 0.1 + 0.2 !== 0.3?',
    answer: 'Numbers are IEEE-754 doubles. 0.1 and 0.2 cannot be represented exactly in binary, so the sum is 0.30000000000000004. Compare with a small epsilon instead.' },

  { id: 'js-22', deckId: 'javascript', difficulty: 'medium', tags: ['collections'],
    question: 'When would you use a Map instead of a plain object?',
    answer: 'When keys are not strings, when insertion order matters, when you add and delete often, or when you want a reliable .size — Map keys can be any value, including objects.' },

  { id: 'js-23', deckId: 'javascript', difficulty: 'easy', tags: ['syntax'],
    question: 'What does destructuring do?',
    answer: 'It unpacks values from arrays or properties from objects into distinct variables, with optional defaults and renaming.',
    code: 'const { name, age = 0 } = user;\nconst [first, ...rest] = list;' },

  { id: 'js-24', deckId: 'javascript', difficulty: 'hard', tags: ['errors'],
    question: 'How do you catch an error thrown inside a setTimeout callback?',
    answer: 'You cannot with an outer try/catch — the callback runs in a later task with its own stack. Put the try/catch inside the callback, or use a global error handler.' },

  { id: 'js-25', deckId: 'javascript', difficulty: 'medium', tags: ['iteration'],
    question: 'for...in vs for...of?',
    answer: 'for...in iterates enumerable string keys, including inherited ones — meant for objects. for...of iterates values of an iterable such as an array, string, Map, or Set.' },

  { id: 'rc-01', deckId: 'react', difficulty: 'easy', tags: ['basics'],
    question: 'What is JSX?',
    answer: 'A syntax extension that compiles to function calls creating React elements. It is not HTML — it is JavaScript that describes a UI tree.' },

  { id: 'rc-02', deckId: 'react', difficulty: 'easy', tags: ['basics'],
    question: 'Props vs state?',
    answer: 'Props are read-only inputs passed from a parent. State is data a component owns and can update, and updating it triggers a re-render.' },

  { id: 'rc-03', deckId: 'react', difficulty: 'medium', tags: ['hooks'],
    question: 'What are the rules of hooks?',
    answer: 'Call hooks only at the top level of a component or another hook — never inside conditions, loops, or nested functions — so the call order stays identical on every render.' },

  { id: 'rc-04', deckId: 'react', difficulty: 'medium', tags: ['hooks'],
    question: 'What does the dependency array of useEffect control?',
    answer: 'When the effect re-runs. Omitted means every render, [] means once after mount, and a populated array means whenever one of those values changes between renders.' },

  { id: 'rc-05', deckId: 'react', difficulty: 'medium', tags: ['hooks'],
    question: 'What is an effect cleanup function for?',
    answer: 'The function returned from useEffect runs before the next effect and on unmount — use it to clear intervals, abort requests, and remove listeners.',
    code: 'useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);' },

  { id: 'rc-06', deckId: 'react', difficulty: 'medium', tags: ['state'],
    question: 'Why is state updated with a function sometimes required?',
    answer: 'State updates batch, so reading the current value can be stale. The updater form receives the latest value: setCount(c => c + 1).' },

  { id: 'rc-07', deckId: 'react', difficulty: 'medium', tags: ['hooks'],
    question: 'useState vs useReducer — when do you reach for useReducer?',
    answer: 'When several values change together, when the next state depends on the previous in non-trivial ways, or when you want update logic centralised and testable outside the component.' },

  { id: 'rc-08', deckId: 'react', difficulty: 'medium', tags: ['hooks'],
    question: 'What does useRef give you?',
    answer: 'A mutable box whose .current survives renders without causing one. Used for DOM nodes, timer ids, and any value you need to remember but not render.' },

  { id: 'rc-09', deckId: 'react', difficulty: 'hard', tags: ['performance'],
    question: 'useMemo vs useCallback?',
    answer: 'useMemo caches a computed value; useCallback caches a function identity. useCallback(fn, deps) is just useMemo(() => fn, deps).' },

  { id: 'rc-10', deckId: 'react', difficulty: 'medium', tags: ['lists'],
    question: 'Why do list items need a stable key?',
    answer: 'Keys let React match elements between renders. Using an array index makes React reuse the wrong element when the list is reordered, filtered, or spliced.' },

  { id: 'rc-11', deckId: 'react', difficulty: 'medium', tags: ['patterns'],
    question: 'What is lifting state up?',
    answer: 'Moving shared state to the closest common ancestor of the components that need it, then passing the value down and callbacks back up.' },

  { id: 'rc-12', deckId: 'react', difficulty: 'medium', tags: ['context'],
    question: 'What problem does Context solve, and what is its cost?',
    answer: 'It avoids prop drilling by broadcasting a value to a subtree. The cost is that every consumer re-renders when the value changes, so split contexts or memoise the value.' },

  { id: 'rc-13', deckId: 'react', difficulty: 'easy', tags: ['forms'],
    question: 'Controlled vs uncontrolled inputs?',
    answer: 'A controlled input takes its value from state and updates via onChange. An uncontrolled input keeps its own DOM value, read later through a ref.' },

  { id: 'rc-14', deckId: 'react', difficulty: 'hard', tags: ['rendering'],
    question: 'What triggers a re-render in React?',
    answer: 'A state update in the component, a new value from a context it consumes, or a parent re-rendering. Prop changes alone do not — the parent rendering is what propagates.' },

  { id: 'rc-15', deckId: 'react', difficulty: 'medium', tags: ['patterns'],
    question: 'What is a custom hook?',
    answer: 'A function starting with "use" that calls other hooks, letting you extract stateful logic for reuse. It shares logic, never state — each caller gets its own.' },

  { id: 'rc-16', deckId: 'react', difficulty: 'hard', tags: ['performance'],
    question: 'What does React.memo do?',
    answer: 'It skips re-rendering a component when its props are shallowly equal to the previous ones. Useless if you pass new object or function literals each render.' },

  { id: 'rc-17', deckId: 'react', difficulty: 'medium', tags: ['effects'],
    question: 'Why does useEffect run twice in development?',
    answer: 'StrictMode intentionally mounts, unmounts and remounts components to surface effects that are missing cleanup. It does not happen in production builds.' },

  { id: 'rc-18', deckId: 'react', difficulty: 'medium', tags: ['errors'],
    question: 'What is an error boundary?',
    answer: 'A class component with componentDidCatch / getDerivedStateFromError that catches render-time errors below it and shows a fallback instead of unmounting the whole tree.' },

  { id: 'rc-19', deckId: 'react', difficulty: 'easy', tags: ['basics'],
    question: 'What is conditional rendering and one common pitfall?',
    answer: 'Returning different JSX based on a condition. The pitfall: {count && <List/>} renders a literal 0 when count is 0 — use a boolean or a ternary.' },

  { id: 'rc-20', deckId: 'react', difficulty: 'hard', tags: ['hooks'],
    question: 'What is a stale closure in React?',
    answer: 'A callback captured an old render\'s variables and keeps using them. Common in intervals and event listeners registered once — fix with a ref or correct dependencies.' },

  { id: 'rc-21', deckId: 'react', difficulty: 'medium', tags: ['state'],
    question: 'Why must state be updated immutably?',
    answer: 'React compares references to decide what changed. Mutating an object or array in place keeps the same reference, so the update can be skipped entirely.' },

  { id: 'rc-22', deckId: 'react', difficulty: 'medium', tags: ['effects'],
    question: 'When do you NOT need useEffect?',
    answer: 'For values derivable from props or state (compute during render), for transforming data for display, and for handling user events — that belongs in the handler.' },

  { id: 'rc-23', deckId: 'react', difficulty: 'easy', tags: ['basics'],
    question: 'What is a fragment and why use one?',
    answer: '<>...</> groups children without adding a DOM node — useful when a wrapper div would break flex, grid, or table layout.' },

  { id: 'rc-24', deckId: 'react', difficulty: 'hard', tags: ['hooks'],
    question: 'What does useLayoutEffect do differently from useEffect?',
    answer: 'It fires synchronously after DOM mutation but before the browser paints, so you can measure and adjust layout without a visible flicker. It blocks paint — use sparingly.' },

  { id: 'rc-25', deckId: 'react', difficulty: 'medium', tags: ['patterns'],
    question: 'How do you share state between sibling components?',
    answer: 'Lift it to their common parent, or put it in a context / store both siblings read from. Siblings never talk to each other directly.' },

  { id: 'css-01', deckId: 'css', difficulty: 'easy', tags: ['box-model'],
    question: 'What does box-sizing: border-box change?',
    answer: 'Width and height then include padding and border instead of only the content box, so an element with width: 200px is actually 200px wide.' },

  { id: 'css-02', deckId: 'css', difficulty: 'medium', tags: ['cascade'],
    question: 'How is specificity calculated?',
    answer: 'As (inline, id, class/attribute/pseudo-class, element/pseudo-element). Compared left to right; a single id beats any number of classes. !important overrides the whole comparison.' },

  { id: 'css-03', deckId: 'css', difficulty: 'easy', tags: ['position'],
    question: 'Difference between position relative, absolute, fixed and sticky?',
    answer: 'relative offsets from its normal spot but keeps its space; absolute is removed from flow and positioned against the nearest positioned ancestor; fixed against the viewport; sticky is relative until a scroll threshold, then fixed.' },

  { id: 'css-04', deckId: 'css', difficulty: 'medium', tags: ['flexbox'],
    question: 'What do justify-content and align-items control in flexbox?',
    answer: 'justify-content distributes items along the main axis; align-items aligns them on the cross axis. flex-direction decides which axis is which.' },

  { id: 'css-05', deckId: 'css', difficulty: 'medium', tags: ['flexbox'],
    question: 'What does the flex shorthand 1 1 0 mean?',
    answer: 'flex-grow: 1, flex-shrink: 1, flex-basis: 0 — items ignore their content size and split the container evenly.' },

  { id: 'css-06', deckId: 'css', difficulty: 'medium', tags: ['grid'],
    question: 'What does repeat(auto-fill, minmax(240px, 1fr)) do?',
    answer: 'It creates as many columns as fit, each at least 240px and sharing leftover space equally — a responsive card grid with no media queries.' },

  { id: 'css-07', deckId: 'css', difficulty: 'hard', tags: ['grid'],
    question: 'auto-fill vs auto-fit?',
    answer: 'auto-fill keeps empty tracks in the grid; auto-fit collapses them so the remaining items stretch to fill the row.' },

  { id: 'css-08', deckId: 'css', difficulty: 'medium', tags: ['units'],
    question: 'rem vs em?',
    answer: 'rem is relative to the root font size — stable and predictable. em is relative to the element\'s own font size and compounds through nesting.' },

  { id: 'css-09', deckId: 'css', difficulty: 'hard', tags: ['stacking'],
    question: 'What creates a new stacking context?',
    answer: 'A positioned element with a z-index, plus opacity below 1, transform, filter, will-change, isolation: isolate, and a few others. z-index only competes inside the same context.' },

  { id: 'css-10', deckId: 'css', difficulty: 'medium', tags: ['variables'],
    question: 'Why are CSS custom properties better than preprocessor variables for theming?',
    answer: 'They live in the cascade and resolve at runtime, so redefining them under a selector like [data-theme="dark"] restyles everything instantly — no rebuild.' },

  { id: 'css-11', deckId: 'css', difficulty: 'medium', tags: ['responsive'],
    question: 'What does clamp(1rem, 4vw, 2rem) do?',
    answer: 'It scales the value with the viewport but never goes below 1rem or above 2rem — fluid typography without breakpoints.' },

  { id: 'css-12', deckId: 'css', difficulty: 'easy', tags: ['selectors'],
    question: 'Difference between the > and the space combinator?',
    answer: '> matches direct children only; a space matches any descendant at any depth.' },

  { id: 'css-13', deckId: 'css', difficulty: 'medium', tags: ['layout'],
    question: 'What is margin collapsing?',
    answer: 'Adjacent vertical margins merge into the largest single margin. It does not happen across flex or grid items, or when padding, a border, or overflow separates them.' },

  { id: 'css-14', deckId: 'css', difficulty: 'medium', tags: ['pseudo'],
    question: 'Difference between a pseudo-class and a pseudo-element?',
    answer: 'A pseudo-class (:hover, :nth-child) selects an element in a state. A pseudo-element (::before, ::first-line) styles a piece of an element that is not in the DOM.' },

  { id: 'css-15', deckId: 'css', difficulty: 'hard', tags: ['performance'],
    question: 'Which properties are cheapest to animate, and why?',
    answer: 'transform and opacity — the compositor handles them without layout or paint. Animating width, top, or margin forces reflow every frame.' },

  { id: 'css-16', deckId: 'css', difficulty: 'medium', tags: ['a11y'],
    question: 'Why prefer :focus-visible over :focus?',
    answer: 'It shows the focus ring for keyboard navigation but not after a mouse click, so you keep accessibility without the ring users complain about.' },

  { id: 'css-17', deckId: 'css', difficulty: 'medium', tags: ['layout'],
    question: 'Three ways to centre a box both ways?',
    answer: 'display: grid + place-items: center; flex with justify-content and align-items center; or position absolute with inset: 0 and margin: auto.' },

  { id: 'css-18', deckId: 'css', difficulty: 'hard', tags: ['3d'],
    question: 'Which properties make a CSS flip card work?',
    answer: 'perspective on the wrapper, transform-style: preserve-3d on the rotating element, backface-visibility: hidden on both faces, and rotateY(180deg) on the back face.' },

  { id: 'css-19', deckId: 'css', difficulty: 'easy', tags: ['selectors'],
    question: 'What does the :not() pseudo-class do?',
    answer: 'It matches elements that do NOT match the selector inside it, e.g. .btn:not(:disabled):hover.' },

  { id: 'css-20', deckId: 'css', difficulty: 'medium', tags: ['responsive'],
    question: 'What is a container query and how does it differ from a media query?',
    answer: 'A media query reacts to the viewport; a container query reacts to the size of an ancestor container, so a component can restyle itself wherever it is placed.' },

  { id: 'css-21', deckId: 'css', difficulty: 'medium', tags: ['color'],
    question: 'What does color-mix(in srgb, var(--accent) 15%, transparent) produce?',
    answer: 'A 15% tint of the accent colour — a soft background that follows the current theme without hardcoding a second variable.' },

  { id: 'css-22', deckId: 'css', difficulty: 'easy', tags: ['a11y'],
    question: 'Why does prefers-reduced-motion matter?',
    answer: 'Some users get motion sickness from animation. The media query lets you cut transitions to near zero for them while keeping the interface functional.' },

  { id: 'css-23', deckId: 'css', difficulty: 'hard', tags: ['layout'],
    question: 'What does overflow: hidden do to floats and margins?',
    answer: 'It creates a block formatting context, which contains floats and stops child margins from collapsing out of the element.' },

  { id: 'css-24', deckId: 'css', difficulty: 'medium', tags: ['grid'],
    question: 'How do you make a grid item span three columns?',
    answer: 'grid-column: span 3, or explicitly with line numbers: grid-column: 1 / 4.' },

  { id: 'css-25', deckId: 'css', difficulty: 'easy', tags: ['visibility'],
    question: 'display: none vs visibility: hidden vs opacity: 0?',
    answer: 'display: none removes the box entirely; visibility: hidden keeps the space but hides it and blocks clicks; opacity: 0 keeps the space and still receives clicks.' },

  { id: 'web-01', deckId: 'webapi', difficulty: 'easy', tags: ['dom'],
    question: 'What is the DOM?',
    answer: 'A live tree of objects the browser builds from your HTML. Scripts read and mutate that tree; the rendered page follows it.' },

  { id: 'web-02', deckId: 'webapi', difficulty: 'medium', tags: ['events'],
    question: 'What are the phases of event propagation?',
    answer: 'Capture from the window down to the target, then the target itself, then bubbling back up. addEventListener\'s third argument opts into the capture phase.' },

  { id: 'web-03', deckId: 'webapi', difficulty: 'medium', tags: ['events'],
    question: 'What is event delegation and why use it?',
    answer: 'Attaching one listener to a common ancestor and using event.target to identify the source. One listener instead of hundreds, and it covers elements added later.' },

  { id: 'web-04', deckId: 'webapi', difficulty: 'easy', tags: ['storage'],
    question: 'localStorage vs sessionStorage vs cookies?',
    answer: 'localStorage persists until cleared; sessionStorage lasts for the tab; cookies are small, expire on a schedule, and are sent with every matching request.' },

  { id: 'web-05', deckId: 'webapi', difficulty: 'medium', tags: ['storage'],
    question: 'What are the limits of localStorage?',
    answer: 'Strings only (so JSON.stringify first), roughly 5MB, synchronous — it blocks the main thread — and it can throw in private mode or when the quota is full.' },

  { id: 'web-06', deckId: 'webapi', difficulty: 'medium', tags: ['network'],
    question: 'Does fetch reject on a 404?',
    answer: 'No. It only rejects on network failure. Check response.ok or response.status yourself.',
    code: 'const res = await fetch(url);\nif (!res.ok) throw new Error(res.status);\nconst data = await res.json();' },

  { id: 'web-07', deckId: 'webapi', difficulty: 'hard', tags: ['network'],
    question: 'What is CORS?',
    answer: 'A browser rule that blocks cross-origin responses unless the server opts in with Access-Control-Allow-* headers. It is enforced by the browser, not the server.' },

  { id: 'web-08', deckId: 'webapi', difficulty: 'medium', tags: ['timers'],
    question: 'Why is requestAnimationFrame better than setInterval for animation?',
    answer: 'It runs right before the next paint, syncs to the display refresh rate, and pauses in background tabs — smoother and cheaper.' },

  { id: 'web-09', deckId: 'webapi', difficulty: 'hard', tags: ['timers'],
    question: 'Why can a setInterval-based timer drift, and how do you fix it?',
    answer: 'Intervals are throttled and delayed by a busy main thread, so error accumulates. Store a target timestamp and compute remaining time from Date.now() on every tick instead of counting down.' },

  { id: 'web-10', deckId: 'webapi', difficulty: 'medium', tags: ['observers'],
    question: 'What is IntersectionObserver for?',
    answer: 'Asynchronously watching whether an element enters or leaves the viewport — lazy loading, infinite scroll, and scroll-triggered animation without scroll listeners.' },

  { id: 'web-11', deckId: 'webapi', difficulty: 'medium', tags: ['observers'],
    question: 'What does ResizeObserver do?',
    answer: 'Fires a callback when an element\'s box changes size — the reliable way to make a component respond to its own dimensions rather than the window\'s.' },

  { id: 'web-12', deckId: 'webapi', difficulty: 'hard', tags: ['rendering'],
    question: 'What is layout thrashing?',
    answer: 'Interleaving DOM reads and writes so the browser must recalculate layout repeatedly in one frame. Batch all reads first, then all writes.' },

  { id: 'web-13', deckId: 'webapi', difficulty: 'medium', tags: ['events'],
    question: 'preventDefault vs stopPropagation?',
    answer: 'preventDefault cancels the browser\'s default action (form submit, link navigation). stopPropagation stops the event travelling further through the tree. They are independent.' },

  { id: 'web-14', deckId: 'webapi', difficulty: 'medium', tags: ['performance'],
    question: 'What does a Web Worker give you?',
    answer: 'A separate thread for heavy JavaScript, communicating by messages. No DOM access, but it keeps the main thread free so the UI stays responsive.' },

  { id: 'web-15', deckId: 'webapi', difficulty: 'easy', tags: ['dom'],
    question: 'querySelector vs getElementById?',
    answer: 'getElementById is slightly faster and takes a bare id. querySelector accepts any CSS selector and returns the first match — more flexible, effectively as fast for normal use.' },

  { id: 'web-16', deckId: 'webapi', difficulty: 'medium', tags: ['audio'],
    question: 'Why might a notification sound fail to play in the browser?',
    answer: 'Autoplay policies require a prior user gesture on the page. Create or unlock the audio inside a click handler before you rely on it later.' },

  { id: 'web-17', deckId: 'webapi', difficulty: 'medium', tags: ['notifications'],
    question: 'How do you show a desktop notification?',
    answer: 'Request permission with Notification.requestPermission() from a user gesture, then construct new Notification(title, options) once permission is "granted".' },

  { id: 'web-18', deckId: 'webapi', difficulty: 'hard', tags: ['lifecycle'],
    question: 'What is the visibilitychange event good for?',
    answer: 'Detecting when the tab is hidden or shown — pause work, reconcile a timer against real elapsed time, or stop polling while the user is away.' },

  { id: 'web-19', deckId: 'webapi', difficulty: 'easy', tags: ['dom'],
    question: 'Difference between innerHTML and textContent?',
    answer: 'innerHTML parses the string as markup — an injection risk with untrusted input. textContent sets plain text and is faster and safe.' },

  { id: 'web-20', deckId: 'webapi', difficulty: 'medium', tags: ['network'],
    question: 'How do you cancel an in-flight fetch?',
    answer: 'Pass an AbortController\'s signal to fetch and call controller.abort(). The promise rejects with an AbortError you should ignore.' },

  { id: 'web-21', deckId: 'webapi', difficulty: 'hard', tags: ['loading'],
    question: 'script defer vs async?',
    answer: 'Both download in parallel with parsing. defer executes in order after the document is parsed; async executes as soon as it arrives, in no guaranteed order.' },

  { id: 'web-22', deckId: 'webapi', difficulty: 'medium', tags: ['a11y'],
    question: 'What is an ARIA live region?',
    answer: 'An element with aria-live that screen readers announce when its content changes — the way to communicate timer completion or a toast to non-visual users.' },

  { id: 'web-23', deckId: 'webapi', difficulty: 'medium', tags: ['events'],
    question: 'Why prefer pointer events over mouse and touch events?',
    answer: 'Pointer events unify mouse, touch, and pen in one API, and setPointerCapture makes drag interactions keep tracking outside the element.' },

  { id: 'web-24', deckId: 'webapi', difficulty: 'hard', tags: ['storage'],
    question: 'When would you use IndexedDB over localStorage?',
    answer: 'Large or structured data, binary blobs, indexed queries, or anything you do not want blocking the main thread. It is asynchronous and far bigger.' },

  { id: 'web-25', deckId: 'webapi', difficulty: 'easy', tags: ['history'],
    question: 'How does a single-page router change the URL without reloading?',
    answer: 'history.pushState / replaceState update the address bar and history entry, and the popstate event tells the app the user pressed back or forward.' },

  { id: 'cs-01', deckId: 'cs', difficulty: 'easy', tags: ['complexity'],
    question: 'What does Big-O notation describe?',
    answer: 'How the running time or memory of an algorithm grows as the input grows, ignoring constants — an upper bound on the growth rate, not a stopwatch measurement.' },

  { id: 'cs-02', deckId: 'cs', difficulty: 'easy', tags: ['complexity'],
    question: 'What is the complexity of binary search, and what does it require?',
    answer: 'O(log n) time, and it requires the input to already be sorted.' },

  { id: 'cs-03', deckId: 'cs', difficulty: 'medium', tags: ['data-structures'],
    question: 'Array vs linked list — the trade-off?',
    answer: 'Arrays give O(1) random access but O(n) insertion in the middle. Linked lists give O(1) insertion once you hold the node but O(n) access and worse cache locality.' },

  { id: 'cs-04', deckId: 'cs', difficulty: 'easy', tags: ['data-structures'],
    question: 'Stack vs queue?',
    answer: 'A stack is last-in first-out (undo history, call stack). A queue is first-in first-out (task scheduling, breadth-first search).' },

  { id: 'cs-05', deckId: 'cs', difficulty: 'medium', tags: ['data-structures'],
    question: 'Why is a hash map average O(1) for lookup?',
    answer: 'The key is hashed straight to a bucket index, so no scanning is needed. Collisions degrade it, and worst case is O(n).' },

  { id: 'cs-06', deckId: 'cs', difficulty: 'medium', tags: ['algorithms'],
    question: 'BFS vs DFS?',
    answer: 'Breadth-first explores level by level with a queue and finds the shortest path in an unweighted graph. Depth-first goes deep first with a stack or recursion and uses less memory on wide graphs.' },

  { id: 'cs-07', deckId: 'cs', difficulty: 'medium', tags: ['recursion'],
    question: 'What two parts must every recursive function have?',
    answer: 'A base case that stops the recursion, and a recursive step that moves strictly toward that base case.' },

  { id: 'cs-08', deckId: 'cs', difficulty: 'hard', tags: ['algorithms'],
    question: 'What is memoization?',
    answer: 'Caching a function\'s results by its arguments so repeated calls with the same input return instantly — turning exponential recursive work into linear.' },

  { id: 'cs-09', deckId: 'cs', difficulty: 'medium', tags: ['complexity'],
    question: 'Why is a nested loop over the same array O(n²)?',
    answer: 'The inner loop runs n times for each of the n outer iterations, so total work grows with the square of the input.' },

  { id: 'cs-10', deckId: 'cs', difficulty: 'hard', tags: ['algorithms'],
    question: 'What is the sliding-window technique?',
    answer: 'Maintaining a moving range over a sequence and updating an aggregate incrementally as it moves, turning a nested-loop O(n²) scan into a single O(n) pass.' },

  { id: 'cs-11', deckId: 'cs', difficulty: 'medium', tags: ['sorting'],
    question: 'What is a stable sort?',
    answer: 'One that preserves the original relative order of items comparing equal — required when you sort by one key after another.' },

  { id: 'cs-12', deckId: 'cs', difficulty: 'medium', tags: ['data-structures'],
    question: 'What is a tree, and what makes it binary?',
    answer: 'A hierarchical structure of nodes with one root and no cycles. It is binary when each node has at most two children.' },

  { id: 'cs-13', deckId: 'cs', difficulty: 'hard', tags: ['algorithms'],
    question: 'What is dynamic programming?',
    answer: 'Solving a problem by breaking it into overlapping subproblems and reusing their answers — either top-down with memoization or bottom-up with a table.' },

  { id: 'cs-14', deckId: 'cs', difficulty: 'medium', tags: ['learning'],
    question: 'What is spaced repetition?',
    answer: 'Reviewing material at increasing intervals timed just before you would forget it, which strengthens recall far more efficiently than massed re-reading.' },

  { id: 'cs-15', deckId: 'cs', difficulty: 'medium', tags: ['learning'],
    question: 'What is the core idea of the SM-2 scheduling algorithm?',
    answer: 'Each card keeps an ease factor and an interval. A good grade multiplies the interval by the ease; a failed grade resets the interval to one day and lowers the ease.' },

  { id: 'cs-16', deckId: 'cs', difficulty: 'easy', tags: ['learning'],
    question: 'What is active recall?',
    answer: 'Retrieving an answer from memory before checking it. The effort of retrieval is what strengthens the memory — recognising an answer does not.' },

  { id: 'cs-17', deckId: 'cs', difficulty: 'medium', tags: ['complexity'],
    question: 'What is amortized complexity?',
    answer: 'The average cost per operation over a long sequence. Pushing to a dynamic array is amortized O(1): most pushes are cheap, and the occasional resize is spread across them.' },

  { id: 'cs-18', deckId: 'cs', difficulty: 'hard', tags: ['concurrency'],
    question: 'Concurrency vs parallelism?',
    answer: 'Concurrency is structuring work so tasks can interleave and make progress. Parallelism is literally running them at the same instant on multiple cores.' },

  { id: 'cs-19', deckId: 'cs', difficulty: 'medium', tags: ['data-structures'],
    question: 'When is a Set the right structure?',
    answer: 'When you need uniqueness and fast membership tests. Both add and has are average O(1), against O(n) for Array.includes.' },

  { id: 'cs-20', deckId: 'cs', difficulty: 'easy', tags: ['design'],
    question: 'What does "single source of truth" mean?',
    answer: 'Each piece of state lives in exactly one place, and everything else derives from it — no copies that can silently disagree.' },

  { id: 'cs-21', deckId: 'cs', difficulty: 'medium', tags: ['design'],
    question: 'What is idempotency?',
    answer: 'An operation that produces the same result whether it runs once or many times — safe to retry.' },

  { id: 'cs-22', deckId: 'cs', difficulty: 'medium', tags: ['design'],
    question: 'What is a pure function?',
    answer: 'One whose output depends only on its inputs and which causes no side effects. Trivially testable and safely cacheable.' },

  { id: 'cs-23', deckId: 'cs', difficulty: 'hard', tags: ['state'],
    question: 'What is a finite state machine, and why does a Pomodoro timer suit one?',
    answer: 'A fixed set of states with defined transitions. The timer is exactly idle → running → paused → completed, which makes illegal combinations impossible to represent.' },

  { id: 'cs-24', deckId: 'cs', difficulty: 'medium', tags: ['complexity'],
    question: 'Rank these: O(1), O(n log n), O(log n), O(n²), O(n).',
    answer: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²), from fastest-growing-slowest to worst.' },

  { id: 'cs-25', deckId: 'cs', difficulty: 'easy', tags: ['algorithms'],
    question: 'What is the difference between a greedy algorithm and an exhaustive search?',
    answer: 'Greedy takes the locally best option at each step and never reconsiders — fast, but only optimal for certain problems. Exhaustive search checks every possibility and is always correct but expensive.' },

  { id: 'git-01', deckId: 'git', difficulty: 'easy', tags: ['basics'],
    question: 'What does git add actually do?',
    answer: 'It copies the current state of the file into the staging area (index), which is what the next commit will snapshot — not the file on disk at commit time.' },

  { id: 'git-02', deckId: 'git', difficulty: 'medium', tags: ['history'],
    question: 'merge vs rebase?',
    answer: 'Merge creates a commit joining two histories and preserves what really happened. Rebase replays your commits on top of another branch for a linear history, rewriting their hashes.' },

  { id: 'git-03', deckId: 'git', difficulty: 'medium', tags: ['undo'],
    question: 'git reset --soft vs --mixed vs --hard?',
    answer: 'soft moves HEAD and keeps everything staged; mixed (the default) also unstages; hard additionally discards working-directory changes — the only destructive one.' },

  { id: 'git-04', deckId: 'git', difficulty: 'medium', tags: ['undo'],
    question: 'When do you use git revert instead of git reset?',
    answer: 'On shared branches. revert adds a new commit undoing the change, so published history stays intact; reset rewrites it and breaks everyone else\'s clone.' },

  { id: 'git-05', deckId: 'git', difficulty: 'easy', tags: ['basics'],
    question: 'What is the difference between fetch and pull?',
    answer: 'fetch downloads remote commits without touching your working branch. pull is fetch followed by merge (or rebase) into the current branch.' },

  { id: 'git-06', deckId: 'git', difficulty: 'medium', tags: ['workflow'],
    question: 'What is git stash for?',
    answer: 'Shelving uncommitted changes so you can switch context with a clean tree, then restoring them later with git stash pop.' },

  { id: 'git-07', deckId: 'git', difficulty: 'hard', tags: ['debugging'],
    question: 'What does git bisect do?',
    answer: 'Binary-searches your history between a known good and bad commit, letting you find the commit that introduced a bug in log₂(n) checks.' },

  { id: 'git-08', deckId: 'git', difficulty: 'medium', tags: ['workflow'],
    question: 'What makes a good commit message?',
    answer: 'An imperative subject under ~50 characters saying what the change does, and a body explaining why it was needed rather than restating the diff.' },

  { id: 'git-09', deckId: 'git', difficulty: 'easy', tags: ['basics'],
    question: 'What does .gitignore control?',
    answer: 'Which untracked paths git should not offer to stage. It has no effect on files that are already tracked.' },

  { id: 'git-10', deckId: 'git', difficulty: 'hard', tags: ['history'],
    question: 'What does git rebase -i let you do?',
    answer: 'Rewrite a range of commits — reorder, reword, squash, split, or drop them — before sharing the branch.' },

  { id: 'git-11', deckId: 'git', difficulty: 'medium', tags: ['branches'],
    question: 'What is a detached HEAD?',
    answer: 'HEAD points at a specific commit rather than a branch. New commits belong to no branch and are lost once you check something else out unless you branch from them.' },

  { id: 'git-12', deckId: 'git', difficulty: 'medium', tags: ['npm'],
    question: 'What is package-lock.json for?',
    answer: 'It pins the exact resolved version of every package in the tree so every install reproduces an identical node_modules. Commit it.' },

  { id: 'git-13', deckId: 'git', difficulty: 'medium', tags: ['npm'],
    question: 'dependencies vs devDependencies?',
    answer: 'dependencies are needed to run the shipped code; devDependencies are only needed to build and test it and are skipped by a production install.' },

  { id: 'git-14', deckId: 'git', difficulty: 'medium', tags: ['npm'],
    question: 'In semver ^1.4.2, what does the caret allow?',
    answer: 'Any release that does not change the leftmost non-zero number — so 1.x.x but never 2.0.0. A tilde (~) would allow only patch bumps.' },

  { id: 'git-15', deckId: 'git', difficulty: 'medium', tags: ['tooling'],
    question: 'Why is Vite\'s dev server fast?',
    answer: 'It serves your source as native ES modules with no bundling step in development, transforming files only when the browser asks for them, and pre-bundles dependencies with esbuild.' },

  { id: 'git-16', deckId: 'git', difficulty: 'medium', tags: ['tooling'],
    question: 'What is tree shaking?',
    answer: 'The bundler statically analyses ES module imports and drops exported code nothing references, shrinking the production bundle.' },

  { id: 'git-17', deckId: 'git', difficulty: 'medium', tags: ['tooling'],
    question: 'What is a source map?',
    answer: 'A file mapping the minified bundle back to original sources so browser devtools show real file names and line numbers when debugging.' },

  { id: 'git-18', deckId: 'git', difficulty: 'easy', tags: ['tooling'],
    question: 'What is the difference between a linter and a formatter?',
    answer: 'A linter (ESLint) finds likely bugs and rule violations. A formatter (Prettier) rewrites style — spacing, quotes, line breaks — without judging correctness.' },

  { id: 'git-19', deckId: 'git', difficulty: 'hard', tags: ['tooling'],
    question: 'What is code splitting?',
    answer: 'Breaking the bundle into chunks loaded on demand — typically per route with dynamic import() — so the first paint ships less JavaScript.' },

  { id: 'git-20', deckId: 'git', difficulty: 'medium', tags: ['branches'],
    question: 'What is a fast-forward merge?',
    answer: 'When the target branch has no commits of its own since the branch point, git just moves its pointer forward — no merge commit is created.' },

  { id: 'git-21', deckId: 'git', difficulty: 'medium', tags: ['workflow'],
    question: 'How do you fix a typo in the message of the commit you just made?',
    answer: 'git commit --amend. It rewrites that commit, so only do it before pushing (or force-push knowingly).' },

  { id: 'git-22', deckId: 'git', difficulty: 'hard', tags: ['conflicts'],
    question: 'What causes a merge conflict?',
    answer: 'Two branches changed the same region of the same file, or one edited a file the other deleted. Git cannot pick a winner, so it marks the region for you to resolve.' },

  { id: 'git-23', deckId: 'git', difficulty: 'easy', tags: ['basics'],
    question: 'What is the difference between origin and upstream?',
    answer: 'Conventional remote names: origin is usually your own fork or the main repo you push to; upstream is the original project you pull updates from.' },

  { id: 'git-24', deckId: 'git', difficulty: 'medium', tags: ['tooling'],
    question: 'What does npm ci do that npm install does not?',
    answer: 'It installs strictly from the lockfile, deletes node_modules first, and fails if package.json and the lockfile disagree — deterministic, which is why CI uses it.' },

  { id: 'git-25', deckId: 'git', difficulty: 'medium', tags: ['workflow'],
    question: 'What is a git hook, and give one practical use?',
    answer: 'A script git runs at a lifecycle point. A pre-commit hook running the linter and formatter on staged files keeps broken code out of history.' },
];

export const cardsByDeck = (deckId) => FLASHCARDS.filter((c) => c.deckId === deckId);

export const countByDeck = (deckId) => cardsByDeck(deckId).length;

export const allTags = [...new Set(FLASHCARDS.flatMap((c) => c.tags))].sort();

export const DIFFICULTIES = ['easy', 'medium', 'hard'];

export default FLASHCARDS;
