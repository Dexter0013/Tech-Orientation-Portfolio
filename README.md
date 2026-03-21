# Tech Orientation Portfolio

A modern, responsive, and highly interactive personal web developer portfolio. This project acts as a digital business card, showcasing projects, skills, and providing an easy way to get in touch.

## ✨ Features

### High-Fidelity UI & Styling
- **Glassmorphism Aesthetics**: Translucent backgrounds and carefully crafted drop shadows for a premium, sleek feel (`style.css`).
- **Live 3D Background**: Uses [Three.js](https://threejs.org/) and [Vanta.js](https://www.vantajs.com/) to render a breathtaking, interactive fluid wave background (`script.js`).
- **Dark/Light Mode Toggle**: Dynamically switches CSS variables to shift between a light mode (emerald/blue) and a deep dark mode (neo-noir ocean). Remembers your preference via `localStorage`.
- **CSS Animations**: Subtle element floating animations, hover transformations, and playful micro-interactions.

### Interactive Features & Logic
- **Mobile Navigation Menu**: Features an animated hamburger toggle that transitions into an "X", complete with tap-away auto-closing and keyboard navigation support (`script.js`).
- **Asynchronous Contact Form**: Fully functional form submission utilizing the Fetch API and Formspree. Includes loading states ("Sending...") and playful success/error feedback without page reloads.

### Accessibility (A11y) & SEO
- **Semantic HTML5**: Structured meticulously with `<section>`, `<nav>`, `<main>`, and hierarchical `<h>` tags.
- **ARIA Attributes**: Screen-reader friendly navigation and toggle button states.
- **SEO Meta Tags**: Defined keywords and descriptions to improve discoverability.
- **Keyboard Navigation**: Mobile menu and interactive elements are fully navigable via `Tab` and `Enter/Space`.

## 🛠️ Technology Stack
- **HTML5**: Page structure and semantic layout.
- **CSS3 (Vanilla)**: Theming via CSS Root Variables, Flexbox, Grid, and Media Queries.
- **JavaScript (Vanilla/ES6)**: DOM manipulation, asynchronous form handling, local storage integration, and UI event listeners.
- **External Libraries**: Three.js & Vanta.js (for the 3D background effects).

## 🚀 Getting Started
Simply open the `index.html` file in your preferred web browser to view the portfolio locally. No build step or installation is required!
