<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

<!--
Modern React + Vite + TypeScript portfolio for a full stack developer with strong DSA skills and GenAI learning.

## Project Goals
- Showcase full stack, DSA, and GenAI skills with a clean, professional, and visually appealing UI.
- Prioritize accessibility, responsiveness, and performance.
- Highlight projects, coding stats, and technical stack in an engaging, interactive way.

## UI/UX Guidelines
- Use Tailwind CSS for utility-first, consistent styling.
- Apply Framer Motion for subtle, performant animations (scroll, hover, transitions).
- Ensure all sections are mobile-first and responsive.
- Use glassmorphism, gradients, and soft shadows for a modern look.
- Maintain clear visual hierarchy with section titles, cards, and call-to-action buttons.
- Use dark/light mode with seamless theme switching (persist user preference).
- Optimize images and assets for fast load times (lazy loading, proper sizing).
- Follow WCAG accessibility standards (color contrast, keyboard navigation, focus states).

## Coding Standards
- Use TypeScript for all React components and logic.
- Prefer functional components and React hooks (no class components).
- Use React Context for global state (e.g., theme management).
- Organize code by feature/section (components, data, styles, assets).
- Keep components modular, reusable, and atomic.
- Use descriptive prop and variable names; add JSDoc/type comments for complex logic.
- Avoid magic numbers and hardcoded values; use theme variables and config files.
- Write clean, readable code with consistent formatting (Prettier, ESLint).
- Use async/await for async logic; handle errors gracefully.
- Prefer Framer Motion for animation, React Icons for icons.

## Section Implementation
- **Hero**: Animated intro, clear headline, call-to-action buttons, social links.
- **About Me**: Brief bio, education, values, downloadable resume, profile image.
- **Skills**: Visualize technical skills (frontend, backend, DSA, GenAI), proficiency bars, icons.
- **Projects**: Interactive cards with images, tech tags, modal/details, links to code/live.
- **Contact**: Accessible form, social links, email, resume download.
- **(Optional)**: Work Experience, Education, Coding Stats (LeetCode, Codeforces, etc.).

## Best Practices
- Use atomic design methodology (smallest components to sections).
- Mobile-first, progressive enhancement.
- BEM or Tailwind naming conventions for custom CSS.
- Refactor and review code regularly.
- Optimize for SEO (meta tags, semantic HTML, React Helmet/SEO component).
- Use Intersection Observer for scroll-triggered effects.
- Test on all major browsers and devices.

## Contribution
- Feature branches, descriptive PRs, follow code style.
- Document new components and features.

## References
- See `client/README.md` and `client/DOCUMENTATION.md` for more details.

# Server Instructions for Portfolio Project

## Project Goals
- Provide API endpoints for coding stats, project data, and integrations (e.g., LeetCode, Codeforces, GFG, CodeChef).
- Ensure fast, reliable, and secure data delivery to the frontend.
- Keep the codebase modular, maintainable, and well-documented.

## Coding Standards
- Use modern JavaScript (ES6+) or TypeScript (if refactored).
- Organize code by feature: routes, controllers, models, data, utils.
- Use async/await for all asynchronous operations; handle errors with try/catch and proper status codes.
- Validate and sanitize all external inputs (API, query params, etc.).
- Use environment variables for secrets and configuration (never hardcode sensitive data).
- Add JSDoc/type comments for complex logic and exported functions.
- Prefer named exports and clear function/variable names.
- Use Prettier and ESLint for consistent formatting and linting.

## API Design
- RESTful endpoints, grouped by resource (e.g., /api/coding-platforms/leetcode).
- Return JSON responses with clear status and error messages.
- Use appropriate HTTP status codes (200, 201, 400, 404, 500, etc.).
- Document all endpoints and expected request/response formats (see DOCUMENTATION.md).

## Security & Performance
- Sanitize all user input and escape output where needed.
- Rate-limit or throttle endpoints if exposed publicly.
- Avoid blocking operations; use non-blocking I/O and efficient queries.
- Log errors and important events for debugging.
-for writing testing codes, use the test folder inside the server folder.

## Best Practices
- Modularize: keep routes, controllers, models, and data separate.
- Use async/await everywhere; never mix with .then()/.catch().
- Handle all errors gracefully and return meaningful error messages.
- Write reusable utility functions for repeated logic (e.g., API fetchers, validators).
- Keep dependencies up to date and minimal.
- Add comments for non-obvious logic.

## Contribution
- Use feature branches and descriptive PRs.
- Document new endpoints and changes in DOCUMENTATION.md.
- Test all endpoints before merging.

## References
- See `server/README.md` and `client/DOCUMENTATION.md` for more details.
-->
