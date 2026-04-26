import type { Video } from "@/types/video.types";

export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  video: Video | null;
};

export function getModules() {
  return lessons;
}

export async function getLesson(slug: string): Promise<
  | (Lesson & {
      module: Module;
      next: Lesson | null;
    })
  | null
> {
  const lessonModule = lessons.find(({ lessons }) => lessons.some(({ id }) => id === slug));

  if (!lessonModule) return null;

  const index = lessonModule.lessons.findIndex(({ id }) => id === slug);
  const currentLesson = lessonModule.lessons[index];

  if (!currentLesson) return null;

  const nextLesson = lessonModule.lessons[index + 1] ?? null;

  return {
    ...currentLesson,
    module: lessonModule,
    next: nextLesson,
  };
}

export async function getLessonContent(slug: string) {
  return (await import(`@/data/lessons/${slug}.mdx`)).default;
}

const lessons = [
  {
    id: "environment-setup",
    title: "Development Environment & Setup",
    description:
      "Get your development environment configured and learn essential tools for professional web development.",
    lessons: [
      {
        id: "how-to-learn-programming",
        title: "Welcome to SWIC Web Development",
        description:
          "Course introduction, learning mindset, and how to effectively use AI tools for web development.",
        video: {
          duration: 696,
          thumbnail: "https://videos.learnjs.tech/swic/videos/sp26/student.jpg",
          url: "https://videos.learnjs.tech/swic/videos/sp26/sp2026-how-to-learn.mp4",
        },
      },
      {
        id: "developer-tools-overview",
        title: "Modern Developer Tools",
        description:
          "Overview of professional development tools: Git, GitHub, VS Code, Node.js, and the modern web development workflow.",
        video: {
          duration: 798,
          thumbnail: "https://videos.learnjs.tech/swic/videos/sp26/tools.jpg",
          url: "https://videos.learnjs.tech/swic/videos/sp26/sp26-modern.mp4",
        },
      },
      {
        id: "mac-setup-guide",
        title: "Mac Setup Guide",
        description:
          "Complete setup instructions for Mac users: Homebrew, VS Code, Node.js, and Git.",
        video: {
          duration: 714,
          thumbnail: "https://videos.learnjs.tech/swic/videos/sp26/mac.jpg",
          url: "https://videos.learnjs.tech/swic/videos/sp26/sp26-mac.mp4",
        },
      },
      {
        id: "windows-setup-guide",
        title: "Windows Setup Guide",
        description:
          "Step-by-step setup instructions for Windows users with direct downloads and installations.",
        video: null,
      },
      {
        id: "customize-warp",
        title: "Customize Warp",
        description:
          "Make Warp easier to read and use: themes, font size, cursor/input settings, and beginner-friendly AI tips.",
        video: {
          duration: 338,
          url: "https://videos.learnjs.tech/swic/videos/sp26/customize-warp.mp4",
          thumbnail: "https://videos.learnjs.tech/swic/videos/sp26/customize-warp.png",
        },
      },
      {
        id: "customize-vs-code",
        title: "Customize VS Code",
        description:
          "Install coding fonts, choose themes, and set up GitHub Copilot for AI-assisted development.",
        video: {
          duration: 511,
          url: "https://videos.learnjs.tech/swic/videos/sp26/customize-vsc.mp4",
          thumbnail: "https://videos.learnjs.tech/swic/videos/sp26/customize-vsc.webp",
        },
      },
      {
        id: "ai-reality-check",
        title: "AI Reality Check: Beyond the Hype",
        description:
          "A balanced look at AI's role in development: separating hype from reality, addressing concerns, and using AI as a learning tool.",
        video: null,
      },
      {
        id: "terminal-files",
        title: "Terminal and TXT Files: Your First Steps in Coding",
        description:
          "Get comfortable using the terminal and working with plain-text files. Learn essential commands for navigating and managing files in a coding environment.",
        video: {
          duration: 171,
          url: "https://videos.learnjs.tech/swic/videos/sp26/terminal-files.mp4",
          thumbnail: "https://videos.learnjs.tech/swic/videos/sp26/terminal.jpg",
        },
      },
      {
        id: "learn-md",
        title: "Learn Markdown",
        description: "Master the basics of Markdown syntax for formatting text documents.",
        video: {
          duration: 189,
          thumbnail: "https://videos.learnjs.tech/swic/videos/sp26/md.png",
          url: "https://videos.learnjs.tech/swic/videos/sp26/md.mp4",
        },
      },
      {
        id: "git-fundamentals",
        title: "Git Fundamentals",
        description:
          "Learn Git workflow with text files and how to write meaningful commit messages from day one.",
        video: null,
      },
      {
        id: "git-github-workflow",
        title: "Git & GitHub Workflow",
        description:
          "Learn how to collaborate using Git and GitHub, including branching, pull requests, and merging.",
        video: null,
      },
      {
        id: "how-computers-and-web-work",
        title: "How Computers and the Web Work",
        description:
          "Understanding the foundational concepts of how computers process information and how the web functions under the hood.",
        video: null,
      },
      {
        id: "bun-biome-template",
        title: "Bun Biome Template",
        description:
          "Learn what this template provides, clone it, and understand the project structure you'll use for the next few weeks.",
        video: {
          duration: 780,
          thumbnail: "https://videos.learnjs.tech/swic/videos/sp26/bun.svg",
          url: "https://videos.learnjs.tech/swic/videos/sp26/biome-template.mp4",
        },
      },
    ],
  },
  {
    id: "js-basics",
    title: "JavaScript Basics",
    description:
      "Learn the fundamentals of JavaScript, including variables, data types, operators, and basic syntax.",
    lessons: [
      {
        id: "js-introduction",
        title: "What is JavaScript?",
        description:
          "Introduction to JavaScript: what it is, what it can do, and how it fits into modern web development.",
        video: null,
      },
      {
        id: "program-structure",
        title: "Program Structure & Variables",
        description:
          "Learn about variables, program structure, and hands-on JavaScript coding using the browser console.",
        video: {
          duration: 306,
          url: "https://videos.learnjs.tech/swic/videos/sp26/program-structure.mp4",
          thumbnail: "https://videos.learnjs.tech/swic/videos/sp26/program-structure.jpg",
        },
      },
      {
        id: "js-comp-sci-1",
        title: "Comp. Sci. Fundamentals 1",
        description:
          "Explore some computer science fundamentals through JavaScript, including conditional statements",
        video: null,
      },
      {
        id: "js-comp-sci-2",
        title: "Comp. Sci. Fundamentals 2",
        description:
          "Master ternary operators, switch statements, guard clauses, and the art of refactoring. Learn why clean code matters—especially when working with AI.",
        video: null,
      },
      {
        id: "js-comp-sci-3",
        title: "Comp. Sci. Fundamentals 3",
        description: "Let's learn about ➿s. Let's learn about ➿s. Let's learn about ➿s.",
        video: null,
      },
      {
        id: "js-comp-sci-4",
        title: "Comp. Sci. Fundamentals 4",
        description:
          "Move beyond numbered indices. Learn how objects use named properties to store and access complex data.",
        video: null,
      },
      {
        id: "js-comp-sci-5",
        title: "Comp. Sci. Fundamentals 5",
        description:
          "Wrap code into reusable blocks. Learn how functions reduce duplication and make programs flexible and maintainable.",
        video: null,
      },
      {
        id: "callbacks-and-array-methods",
        title: "Callbacks and Array Methods",
        description:
          "Learn to process collections efficiently using callback functions with map, filter, and forEach - turning data transformation into simple, readable code.",
        video: null,
      },
      {
        id: "js-object-methods-intro",
        title: "Object Methods Basics",
        description:
          "Intro to built-in Object helpers: keys, values, entries, assign, and spread. Learn how they pair with map/filter for shaping and inspecting data.",
        video: null,
      },
      {
        id: "js-advanced-array-methods",
        title: "Advanced Array Methods",
        description:
          "Learn powerful array methods like reduce, find, some, and every for complex data manipulation.",
        video: null,
      },
    ],
  },
  {
    id: "js-modules",
    title: "Modules",
    description:
      "Learn how to organize JavaScript code using ES Modules (ESM): import, export, and best practices for modular development.",
    lessons: [
      {
        id: "js-modules",
        title: "JavaScript ES Modules (ESM)",
        description:
          "Understand how to split your code into reusable modules using modern JavaScript import/export syntax.",
        video: null,
      },
    ],
  },
  {
    id: "js-testing",
    title: "Testing",
    description: "Learn how to write automated tests with Bun's built-in test runner.",
    lessons: [
      {
        id: "js-intro-to-testing",
        title: "Testing with Bun",
        description:
          "Write your first automated tests using Bun's test runner and the Arrange-Act-Assert pattern.",
        video: null,
      },
    ],
  },
  {
    id: "html-css-fundamentals",
    title: "HTML & CSS Fundamentals",
    description:
      "Master semantic HTML structure and learn how CSS properties translate to Tailwind utility classes. Build the foundation for styling modern web applications.",
    lessons: [
      {
        id: "semantic-html",
        title: "Semantic HTML: Why It Matters",
        description:
          "Review proper HTML structure using semantic tags like <header>, <nav>, <main>, and <section>. Fix common mistakes like overusing divs, misusing br tags, and using headings for sizing.",
        video: null,
      },
      {
        id: "css-to-tailwind",
        title: "CSS to Tailwind",
        description:
          "Learn how every CSS property maps to a Tailwind utility class. Understand the direct translation: vanilla CSS on the left, Tailwind on the right.",
        video: {
          duration: 471,
          thumbnail: "https://d8n3.c1.e2-8.dev/swic/videos/sp26/tailwind.png",
          url: "https://videos.learnjs.tech/swic/videos/sp26/tailwind.mp4",
        },
      },
    ],
  },
  {
    id: "browser-javascript-dom",
    title: "Browser JavaScript & DOM",
    description:
      "Bridge from console JavaScript to interactive web applications by mastering DOM manipulation, event handling, and browser APIs.",
    lessons: [
      {
        id: "console-to-browser",
        title: "From Console to Browser",
        description:
          "Understanding the browser environment, developer tools, and how JavaScript runs in web pages. Setting up your development workflow.",
        video: {
          duration: 801,
          thumbnail: "https://videos.learnjs.tech/swic/videos/dom.png",
          url: "https://videos.learnjs.tech/swic/videos/dom.mp4",
        },
      },
      {
        id: "dom-fundamentals",
        title: "DOM Fundamentals",
        description:
          "What is the DOM? Understanding the document tree structure, nodes vs elements, and how browsers parse HTML into JavaScript objects.",
        video: null,
      },
      {
        id: "selecting-elements",
        title: "DOM Selectors",
        description:
          "Use CSS selectors with querySelector() and querySelectorAll() to find and update multiple elements. Master efficient DOM selection patterns.",
        video: null,
      },
      {
        id: "js-form-fundamentals",
        title: "Form Fundamentals",
        description:
          "Learn to work with HTML forms using JavaScript: reading values, handling submissions, and understanding form behavior in the browser.",
        video: null,
      },
      {
        id: "js-form-validation",
        title: "Form Validation",
        description:
          "Use the Constraint Validation API to validate user input. Provide feedback and ensure data integrity before form submission.",
        video: null,
      },
      {
        id: "js-promises-and-fetch",
        title: "Promises + Fetch Basics",
        description:
          "Learn the practical Promise workflow with fetch: loading JSON data, checking response status, and rendering loading/error/success states.",
        video: null,
      },
    ],
  },
  {
    id: "js-fundamentals-review",
    title: "JS Review & React Prep",
    description:
      "This review will reacquaint you with the core concepts of JavaScript, including variables, functions, and control flow.",
    lessons: [
      {
        id: "js-variables-and-types",
        title: "Variables and Types",
        description: "Understanding variables and data types in JavaScript.",
        video: null,
      },
      {
        id: "functions-and-scope",
        title: "Functions and Scope",
        description:
          "A review of function concepts in JavaScript, focusing on their relevance in React.",
        video: null,
      },
      {
        id: "objects-and-arrays",
        title: "Objects and Arrays",
        description:
          "Master JavaScript objects and arrays - essential data structures for React development.",
        video: null,
      },
      {
        id: "paradigms",
        title: "Programming Paradigms",
        description:
          "An overview of different programming paradigms (e.g., imperative, functional, object-oriented) and their significance in JavaScript.",
        video: null,
      },
      {
        id: "dom-review-component-patterns",
        title: "DOM Review & Component Patterns",
        description:
          "Review the DOM API and learn component-based thinking patterns in vanilla JavaScript - the foundation for React development.",
        video: null,
      },
    ],
  },
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    description:
      "Build interactive UIs with React. Learn components, state management, props, and modern React patterns through hands-on projects.",
    lessons: [
      {
        id: "react-vite-starter-walkthrough",
        title: "React + Vite Starter Walkthrough",
        description:
          "Walk through Vite’s React starter: index.html root mount point, createRoot/StrictMode in main.jsx, App component with useState and HMR.",
        video: {
          duration: 1084,
          thumbnail: "https://d8n3.c1.e2-8.dev/swic/videos/vite-react-count.png",
          url: "https://videos.learnjs.tech/swic/videos/vite-react-count.mp4",
        },
      },
      {
        id: "react-ttt",
        title: "Building Tic-Tac-Toe",
        description:
          "Build a complete tic-tac-toe game following React's official tutorial. Learn state management, component hierarchy, and time travel with immutable updates.",
        video: null,
      },
      {
        id: "react-local-storage",
        title: "localStorage",
        description:
          "Learn how to use localStorage to persist React state across sessions. Build a simple app that saves user preferences and data locally.",
        video: {
          duration: 1181,
          thumbnail: "https://d8n3.c1.e2-8.dev/swic/videos/react-local.png",
          url: "https://videos.learnjs.tech/swic/videos/react-local-storage.mp4",
        },
      },
      {
        id: "react-immutability",
        title: "Immutability",
        description:
          "Learn immutability by flushing out a React to-do app. Understand why immutable updates are crucial for React's rendering performance.",
        video: null,
      },
      {
        id: "react-uncontrolled-forms",
        title: "React Forms (Uncontrolled)",
        description:
          "Build a contact form using modern uncontrolled React inputs with the form action prop and FormData.",
        video: null,
      },
      {
        id: "react-controlled-forms",
        title: "React Forms (Controlled)",
        description:
          "Build a registration form with live validation, password strength indicators, and controlled inputs using value and onChange.",
        video: {
          url: "https://videos.learnjs.tech/swic/videos/react-controlled.mp4",
          thumbnail: "https://d8n3.c1.e2-8.dev/swic/videos/react-controlled.png",
          duration: 662,
        },
      },
    ],
  },
] as const satisfies Module[];
