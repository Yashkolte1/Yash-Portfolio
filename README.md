# Yash Kolte Portfolio

A modern, responsive personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Three.js. The portfolio is designed to present developer skills, projects, experience, and contact options with a clean dark theme, smooth animations, and interactive 3D visuals.

## Overview

This project is a personal developer portfolio for showcasing frontend and MERN stack skills. It includes a full-screen hero section, animated navigation, an about section, categorized tech stack, project cards with demo/code actions, and a work experience timeline.

The design focuses on:

- Professional dark UI with violet and cyan accents
- Smooth page animations and hover interactions
- Responsive layouts for mobile, tablet, and desktop
- 3D visual elements using React Three Fiber and Three.js
- Clean project presentation with live demo and source code links

## Features

- Responsive single-page portfolio layout
- Animated header with desktop and mobile navigation
- Interactive hero section with 3D computer canvas
- About section with personal intro, strengths, and service cards
- Categorized Tech Stack & Skills section
- Project showcase with image previews, tech tags, GitHub link, and View Demo button
- Work Experience timeline
- Contact modal from the navigation
- Custom cursor styling
- Production-ready Vite build setup

## Sections

The portfolio currently includes:

- **Home** - Hero section with name, role intro, and 3D visual
- **About** - Personal introduction and service highlights
- **Skills** - Frontend, Backend, Creative Web, and Tools categories
- **Projects** - Project cards with preview image, tech stack, code link, and demo link
- **Experience** - Work experience timeline
- **Contact** - Contact form modal from the header

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- JavaScript
- Framer Motion
- React Icons

### 3D & Visuals

- Three.js
- React Three Fiber
- Drei
- React Parallax Tilt

### UI Components

- React Vertical Timeline Component
- Custom Tailwind components
- Animated cards and navigation

### Tools

- Git
- GitHub
- Vercel
- Render
- Postman
- Cloudinary

## Project Structure

```text
yash-portfolio/
├── public/
│   ├── desktop_pc/
│   ├── cursor.png
│   ├── cursor1.png
│   └── herobg.png
├── src/
│   ├── assets/
│   │   ├── company/
│   │   ├── tech/
│   │   └── index.js
│   ├── components/
│   │   ├── canvas/
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Projects.jsx
│   │   └── TechStack.jsx
│   ├── constants/
│   │   └── index.js
│   ├── hoc/
│   │   └── SectionWrapper.jsx
│   ├── utils/
│   │   └── motion.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

```bash
node -v
npm -v
```

### Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd yash-portfolio
npm install
```

### Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

### Build for Production

Create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

Most portfolio content can be edited from:

```text
src/constants/index.js
```

Use this file to update:

- Navigation links
- Service cards
- Technologies
- Work experience
- Project names and descriptions
- Project images
- GitHub links
- Live demo links

### Update Project Links

Each project supports both source code and live demo links:

```js
{
  name: "Project Name",
  source_code_link: "https://github.com/your-username/project",
  live_demo_link: "https://your-live-demo.com",
}
```

### Update Tech Stack

The skills section is controlled from:

```text
src/components/TechStack.jsx
```

You can edit categories such as:

- Frontend
- Backend
- Creative Web
- Tools

### Update 3D Model

The desktop computer model is stored in:

```text
public/desktop_pc/
```

The canvas components are inside:

```text
src/components/canvas/
```

## Deployment

This portfolio can be deployed easily on platforms like Vercel, Netlify, or Render.

### Vercel

1. Push the project to GitHub
2. Import the repository into Vercel
3. Use the default Vite settings
4. Deploy

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Notes

- The project uses a custom cursor from the public/assets setup.
- Some 3D and image assets can increase build size. If needed, optimize large images before deployment.
- Replace placeholder project links with real GitHub and live demo URLs before publishing.
- Keep project descriptions short and specific so the portfolio feels clean and easy to scan.

## Author

**Yash Kolte**

- GitHub: [Yashkolte1](https://github.com/Yashkolte1)
- LinkedIn: [yash-kolte](https://www.linkedin.com/in/yash-kolte-b6849b332)

## License

This project is for personal portfolio use. You can customize it for your own profile, but keep credits where appropriate if you reuse the structure or design.
