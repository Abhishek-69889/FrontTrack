const topics = {
  HTML: {
    basic: [
      "HTML Boilerplate", "Elements, Tags, and Attributes", "Headings, Lists, Forms", "Semantic HTML", "Tables"
    ],
    intermediate: [
      "Form validation", "Meta Tags", "HTML5 APIs", "Iframes", "Audio/Video tags"
    ],
    advanced: [
      "Accessibility (ARIA)", "Web Components", "HTML parsing", "Progressive Enhancement", "Security: XSS"
    ]
  },
  CSS: {
    basic: [
      "Selectors & Specificity", "Box Model", "Typography", "Units (px, em, rem)", "Positioning"
    ],
    intermediate: [
      "Flexbox", "Grid", "Media Queries", "Pseudo-classes", "Transitions & Animations"
    ],
    advanced: [
      "CSS Variables", "Preprocessors", "CSS Methodologies", "Performance Optimization", "Dark Mode"
    ]
  },
  JavaScript: {
    basic: [
      "Variables and Data Types", "Control Flow", "DOM Manipulation", "Functions and Scope", "Events"
    ],
    intermediate: [
      "Closures", "Promises & async/await", "Array Methods", "Modules", "Event Bubbling"
    ],
    advanced: [
      "Debounce/Throttle", "Call Stack & Event Loop", "Memory Management", "Design Patterns", "Security: CORS/XSS"
    ]
  },
  React: {
    basic: [
      "JSX", "Functional Components", "Props & State", "Conditional Rendering", "Lists & Keys"
    ],
    intermediate: [
      "useEffect/useState", "Forms", "Routing", "Custom Hooks", "Context API"
    ],
    advanced: [
      "Performance Optimization", "useReducer", "Error Boundaries", "React Query", "SSR/Next.js"
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
