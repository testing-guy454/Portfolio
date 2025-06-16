# Portfolio Project Documentation

## Project Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Vite. It showcases my skills as a full stack developer, highlights my projects, and provides a professional overview including education, work experience, and achievements. The site is designed for performance, accessibility, and a seamless user experience across devices.

## Key Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Modern UI/UX**: Clean, professional interface with smooth animations (Framer Motion)
- **Interactive Elements**: Hover effects, transitions, and scroll-triggered animations
- **Fast Performance**: Built with Vite for lightning-fast load times
- **TypeScript Integration**: Type-safe codebase
- **Component-Based Architecture**: Modular, reusable React components
- **SEO Optimization**: Meta tags and structured data (React Helmet Async)
- **Accessibility**: WCAG-compliant design
- **Optimized Assets**: Lazy loading and optimized images
- **Project Modal**: Detailed project modals with tech stack, links, and screenshots
- **Contact Form**: Integrated with a custom backend server for direct contact
- **Downloadable Resume**: PDF resume available for download
- **Coding Skills**: DSA stats from LeetCode, CodeChef, and GfG
- **Achievements**: Hackathon wins, club leadership, and academic awards

## Sections

- **Hero**: Dynamic introduction with animated elements and call-to-action
- **About Me**: Professional background, education, and personal statement
- **Work Experience**: Detailed work history, leadership, and achievements
- **Education**: Academic background and certifications
- **Coding Skills**: DSA problem-solving stats and focus areas
- **Tech Stack**: Categorized display of technical skills (Web, DB, Languages, Tools)
- **Projects**: Interactive showcase with category tabs, modals, and live/code links
- **Contact**: Form and direct contact options with social media links

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS, custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **State Management**: React Context API
- **SEO**: React Helmet Async
- **Deployment**: Vercel

## Project Structure

```
client/
├── public/                      # Static assets and favicon
│   ├── icons/                   # Technology icons (CSS, Docker, HTML, etc.)
│   ├── projectImages/           # Project screenshots and previews
│   └── Yuvraj_Resume_v2_1.pdf   # Downloadable resume
├── src/
│   ├── assets/                  # Images, fonts, and other media
│   ├── components/              # React components for each section
│   │   ├── AboutSection.tsx     # About me section
│   │   ├── ContactSection.tsx   # Contact form
│   │   ├── CodingSkillsSection.tsx # Coding skills showcase
│   │   ├── DSAStatsCounter.tsx  # DSA statistics
│   │   ├── EducationSection.tsx # Education
│   │   ├── HeroSection.tsx      # Hero section
│   │   ├── NavigationBar.tsx    # Navigation
│   │   ├── PageFooter.tsx       # Footer
│   │   ├── ProjectsSection.tsx  # Projects showcase
│   │   ├── SectionContainer.tsx # Section wrapper
│   │   ├── SEO.tsx              # SEO meta tags
│   │   ├── TechStackSection.tsx # Tech stack
│   │   ├── ThemeSwitcher.tsx    # Theme toggle
│   │   └── WorkExperienceSection.tsx # Work experience
│   ├── contexts/                # React context providers
│   │   └── ThemeContext.tsx     # Theme management
│   ├── data/                    # Static content/config
│   │   └── seo.ts               # SEO config
│   ├── styles/                  # Custom CSS
│   │   ├── backgroundStyles.css # Backgrounds
│   │   ├── codeAnimations.css   # Code animation effects
│   │   ├── custom.css           # Custom styling
│   │   └── iconAnimations.css   # Icon animation effects
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── vite-env.d.ts            # Vite type declarations
├── eslint.config.js             # ESLint config
├── DOCUMENTATION.md             # Project documentation
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS config
├── tailwind.config.js           # Tailwind config
├── tsconfig.json                # TypeScript config
├── tsconfig.node.json           # Node TypeScript config
├── vercel.json                  # Vercel deployment config
├── vite.config.ts               # Vite config
```

## Setup & Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yuvraj-mehta/Portfolio.git
   cd client
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the development server**
   ```sh
   npm run dev
   ```
4. **Build for production**
   ```sh
   npm run build
   ```
5. **Preview production build**
   ```sh
   npm run preview
   ```

## Usage & Customization

- Edit content in `src/components/` and `src/data/` to update sections.
- Add or replace images in the `public/` directory.
- Customize styles in `src/styles/` or via Tailwind config.
- Update SEO and meta tags in `src/components/SEO.tsx` and `src/data/seo.ts`.

## Deployment

- The project is configured for Vercel. Push to the main branch to trigger deployment.
- For manual deployment, use:
  ```sh
  npm run build
  npm run preview
  ```

## Contribution Guidelines

- Fork the repository
- Create feature branches with descriptive names
- Submit pull requests with detailed descriptions
- Follow code style and best practices

## License

MIT License

---

For more details, see the README.md or contact the project maintainer.
