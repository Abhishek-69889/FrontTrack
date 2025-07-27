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
      "Common CSS Properties:",
      [
        "color – Text color",
        "background-color – Element background",
        "font-size – Size of the text",
        "font-family – Type of font",
        "font-weight – Bold, normal, etc.",
        "text-align – Align text left, right, center",
        "line-height – Space between lines of text"
      ],
      "Box Model Explained:",
      [
        "margin – Space outside the element",
        "padding – Space inside the element",
        "border – Line around the element",
        "width & height – Size of the element"
      ],
      "CSS Units:",
      [
        "px – Pixels (absolute)",
        "%, em, rem – Relative units"
      ],
      "CSS Selectors:",
      [
        "Element Selector (p, h1)",
        "Class Selector (.class)",
        "ID Selector (#id)",
        "Group Selector (h1, p)",
        "Universal Selector (*)"
      ],
      "Display Property:",
      [
        "block, inline, inline-block, none"
      ],
      "Position Property:",
      [
        "static, relative, absolute, fixed"
      ]
    ],
    intermediate: [
      "Flexbox – One-Dimensional Layout",
      "CSS Grid – Two-Dimensional Layout",
      "Media Queries – Responsive Design",
      "Pseudo-classes – :hover, :active, :nth-child",
      "Transitions & Basic Animations"
    ],
    advanced: [
      "CSS Variables (Custom Properties)",
      "SCSS / SASS (Preprocessors Basics)",
      "BEM Naming Convention (CSS Architecture)",
      "Dark Mode with prefers-color-scheme",
      "CSS Optimization & Best Practices"
    ]
  },

  JavaScript: {
    basic: [
      "What is JavaScript & How it Runs in Browser",
      "Variables and Data Types (var, let, const, string, number, boolean, null, undefined)",
      "Operators (Arithmetic, Assignment, Comparison, Logical)",
      "Control Flow (if, else, switch, loops: for, while)",
      "Functions and Scope (function declaration, return, local/global scope)",
      "Events (click, input, mouseover, etc.)",
      "DOM Manipulation (getElementById, querySelector, innerText, innerHTML)",
      "Arrays and Objects Basics (creation, access, loop)",
      "Basic String and Number Methods"
    ],
    intermediate: [
      "Array Methods (map, filter, reduce, forEach, find)",
      "Object Manipulation (destructuring, shorthand, Object.keys/values)",
      "Functions Advanced (Arrow Functions, Callback Functions)",
      "Closures and Lexical Scope",
      "Promises and async/await (API calls, chaining)",
      "Event Bubbling & Delegation",
      "ES6+ Features (let/const, template literals, spread/rest, default params)",
      "Modules (import/export basics)"
    ],
    advanced: [
      "Call Stack, Web APIs, Callback Queue, Event Loop",
      "Debounce and Throttle (Performance Optimization)",
      "Memory Management (Garbage Collection Basics)",
      "Error Handling (try/catch, finally)",
      "Security Concepts: CORS, XSS, Same-Origin Policy",
      "Design Patterns Basics (Module, Observer)",
      "JavaScript in the Browser vs Node.js Overview"
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
