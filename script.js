const topics = {
  HTML: {
    basic: [
      "HTML Boilerplate",
      "Elements, Tags, and Attributes",
      "Headings and Paragraphs",
      "Anchor and Image",
      "Lists (ul, ol, li)",
      "Forms and Input Elements",
      "Semantic HTML (section, article, header, footer)",
      "Tables (thead, tbody, tr, td, th)"
    ],
    intermediate: [
      "Form Validation (required, pattern, type)",
      "Meta Tags (title, description, viewport)",
      "Iframes",
      "Embedding Media (Audio & Video tags)"
    ],
    advanced: [
      "Accessibility (Alt text, ARIA labels, role)",
      "Custom Elements (Web Components Basics)",
      "Progressive Enhancement Concepts",
      "Security: Avoiding XSS in HTML",
      "Understanding HTML Parsing & DOM Tree"
    ]
  },

  CSS: {
    basic: [
      "What is CSS & How to Link it (Inline, Internal, External)",
      "CSS Syntax (Property: Value)",
      "Common CSS Properties",
      // [
      //   "color – Text color",
      //   "background-color – Element background",
      //   "font-size – Size of the text",
      //   "font-family – Type of font",
      //   "font-weight – Bold, normal, etc.",
      //   "text-align – Align text left, right, center",
      //   "line-height – Space between lines of text"
      // ],
      "Box Model Explained",
      // [
      //   "margin – Space outside the element",
      //   "padding – Space inside the element",
      //   "border – Line around the element",
      //   "width & height – Size of the element"
      // ],
      "CSS Units",
      // [
      //   "px – Pixels (absolute)",
      //   "%, em, rem – Relative units"
      // ],
      "CSS Selectors",
      // [
      //   "Element Selector (p, h1)",
      //   "Class Selector (.class)",
      //   "ID Selector (#id)",
      //   "Group Selector (h1, p)",
      //   "Universal Selector (*)"
      // ],
      "Display Property:- block , inline , inline-block, none",
      // [
      //   "block, inline, inline-block, none"
      // ],
      "Position Property: static, relative, absolute, fixed"
    ],
    intermediate: [
      "Flexbox – One-Dimensional Layout",
      "CSS Grid – Two-Dimensional Layout",
      "Pseudo-classes – :hover, :active, :nth-child",
      "Pseudo-elements – ::before, ::after",
      "Media Queries – Responsive Design",
      "Transitions & Basic Animations"
    ],
    advanced: [
      "CSS Variables (Custom Properties)",
      "SCSS / SASS (Preprocessors Basics)",
      "BEM Naming Convention (CSS Architecture)",
      "Dark Mode with prefers-color-scheme",
      "CSS Optimization & Best Practices"
    ],
    FrequentlyUsed:[
    "display",
    "position",
    "top / right / bottom / left",
    "z-index",
    "width / height",
    "box-sizing",
    "margin",
    "padding",
    "border",
    "border-width / border-style / border-color",
    "border-radius",
    "outline",
    "font-family",
    "font-size",
    "font-weight",
    "color",
    "text-align",
    "text-decoration",
    "line-height",
    "letter-spacing",
    "text-transform",
    "background-color",
    "background-image",
    "background-size",
    "background-repeat",
    "background-position",
    "display: flex",
    "flex-direction",
    "justify-content",
    "align-items",
    "gap",
    "flex-wrap",
    "display: grid",
    "grid-template-columns",
    "grid-template-rows",
    "gap",
    "place-items",
    "opacity",
    "box-shadow",
    "text-shadow",
    "filter",
    "transition",
    "transform",
    "animation",
    "cursor",
    "overflow",
    "visibility",
    "pointer-events",
    "user-select",

    ]
  },

  JavaScript: {
  basic: [
    "What is JavaScript & How it Runs in Browser (JS Engine, Interpreter, JIT Compilation)",
    "Variables and Data Types (var, let, const, string, number, boolean, null, undefined)",
    "Scope-Block & Function",
    "Hoisting and Temporal Dead Zone (TDZ)",
    "Operators (Arithmetic, Assignment, Comparison, Logical, Ternary, Typeof)",
    "Control Flow (if, else, switch, loops: for, while, do-while)",
    "Functions and Scope (Function Declaration, Expression, Local/Global Scope)",
    "Execution Context and Call Stack (Creation Phase, Execution Phase)",
    "Events (click, input, mouseover, etc.) and Event Listeners",
    "DOM Manipulation (getElementById, querySelector, innerText, innerHTML)",
    "Arrays and Objects Basics (creation, access, loop, push/pop)",
    "Basic String and Number Methods",
    "Type Conversion (Implicit & Explicit Coercion)"
  ],

  intermediate: [
    "Array Methods (map, filter, reduce, forEach, find, some, every)",
    "Object Manipulation (destructuring, shorthand, Object.keys/values/entries)",
    "Functions Advanced (Arrow Functions, Callback Functions, Function Parameters)",
    "Closures and Lexical Scope (Practical Examples)",
    "Hoisting in Functions and Variables (Detailed)",
    "Promises and async/await (API calls, chaining, error handling)",
    "Event Bubbling, Capturing, and Delegation",
    "ES6+ Features (let/const, template literals, spread/rest, default params, for...of)",
    "Modules (import/export basics, file structuring)",
    "‘this’ Keyword (Implicit, Explicit, Arrow Function Binding)",
    "Prototype and Prototypal Inheritance (Object.__proto__, prototype chain)",
    "Set, Map, WeakSet, WeakMap (Difference & Use-Cases)"
  ],

  advanced: [
    "Call Stack, Web APIs, Callback Queue, Event Loop (Async Flow Visualization)",
    "Debounce and Throttle (Performance Optimization)",
    "Memory Management (Garbage Collection Basics, Memory Leaks)",
    "Error Handling (try/catch, finally, custom errors, throw)",
    "JavaScript Engine Internals (V8, Parsing, Compilation)",
    "Execution Context Types (Global, Functional, Eval)",
    "Temporal Dead Zone (TDZ) and Variable Lifecycle",
    "Shadowing and Block Scope Behavior",
    "Currying and Function Composition",
    "Design Patterns Basics (Module, Observer, Singleton)",
    "Security Concepts: CORS, XSS, Same-Origin Policy, CSRF",
    "Microtasks and Macrotasks (queueMicrotask, setTimeout, Promises)",
    "JavaScript in the Browser vs Node.js (Environment, APIs)",
    "Event Loop in Node.js vs Browser",
    "Performance Optimization (Minification, Caching, Async Scripts)"
  ]
},

  React: {
    basic: [
      "What is React and Why Use It",
      "JSX Syntax and Rules",
      "Functional Components",
      "Props (Passing Data Between Components)",
      "State (useState Basics)",
      "Conditional Rendering (if, &&, ternary)",
      "Rendering Lists with .map() & Using Keys",
      "Component Reusability & Structure"
    ],
    intermediate: [
      "useEffect Hook (Side Effects)",
      "Handling Forms & Input Events",
      "React Router Basics (Routing Pages)",
      "Lifting State Up & Prop Drilling",
      "Creating and Using Custom Hooks",
      "Context API (Global State Management)"
    ],
    advanced: [
      "Performance Optimization (React.memo, lazy, Suspense)",
      "useReducer for Complex State",
      "Error Boundaries (Handling UI Errors)",
      "React Query (Data Fetching & Caching)",
      "SSR vs CSR (Next.js Basics)",
      "React DevTools & Debugging Tips",
      "Best Practices & Folder Structure"
    ]
  },
  "Redux": {
    "basic": [
      "What is Redux and Why Use It",
      "Core Principles: Single Source of Truth, State is Read-Only, Changes via Pure Functions",
      "Actions: Definition and Usage",
      "Reducers: How to Update State",
      "Store: Creating and Accessing Store",
      "Dispatching Actions",
      "Connecting Redux with React using useSelector & useDispatch"
    ],
    "intermediate": [
      "Middleware: What is Middleware in Redux",
      "Async Actions using redux-thunk",
      "Redux Toolkit: createSlice, configureStore, createAsyncThunk",
      "Normalizing State for Large Applications",
      "Combining Reducers",
      "Handling Side Effects",
      "Integration with React Router"
    ],
    "advanced": [
      "Performance Optimization (avoiding unnecessary re-renders)",
      "Best Practices & Folder Structure for Redux",
      "Debugging Redux with Redux DevTools",
      "Testing Redux (Reducers, Actions, Selectors)",
      "Advanced Middleware (redux-saga / redux-observable)",
      "Using Redux with TypeScript (Optional)",
      "Migrating from Context API or Local State to Redux"
    ]
  }
};


function loadState(section, item) {
  return JSON.parse(localStorage.getItem(`fd_${section}_${item}`)) || false;
}

function saveState(section, item, value) {
  localStorage.setItem(`fd_${section}_${item}`, JSON.stringify(value));
}

function renderTopics() {
  const container = document.getElementById('tracker-container');

  Object.entries(topics).forEach(([section, levels]) => {
    Object.entries(levels).forEach(([level, items]) => {
      const header = document.createElement('h2');
      header.textContent = `${section.toUpperCase()} - ${level.charAt(0).toUpperCase() + level.slice(1)}`;

      const ul = document.createElement('ul');

      items.forEach((topic, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const saved = loadState(`${section}-${level}`, index);
        checkbox.checked = saved;

        checkbox.addEventListener('change', () => {
          saveState(`${section}-${level}`, index, checkbox.checked);
        });

        const label = document.createElement('label');
        label.textContent = topic;

        li.appendChild(checkbox);
        li.appendChild(label);
        ul.appendChild(li);
      });

      header.addEventListener('click', () => {
        ul.classList.toggle('active');
      });

      container.appendChild(header);
      container.appendChild(ul);
    });
  });
}

renderTopics();
