# Bugatti Website Clone

Youtube Video: https://www.youtube.com/watch?v=__XCbRVxfyI

A modern, responsive clone of the Bugatti official website built with React, Vite, and Tailwind CSS. This project replicates the luxurious design and feel of Bugatti's web presence, showcasing their iconic models including the Chiron and Bolide.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Navigation**: Client-side routing with React Router
- **Modern UI**: Styled with Tailwind CSS for a sleek, premium look
- **Multiple Pages**: Home, Chiron, and Bolide model showcase pages
- **Reusable Components**: Navbar and Footer components for consistent layout

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting and quality

## Project Structure

```
bugatti-react/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx     # Navigation bar component
│   │   └── Footer.jsx     # Footer component
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── Chiron.jsx     # Bugatti Chiron showcase page
│   │   └── Bolide.jsx     # Bugatti Bolide showcase page
│   ├── styles/            # Additional style files
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bugatti-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

## Pages

- **Home** (`/`) - Landing page with overview of Bugatti brand
- **Chiron** (`/chiron`) - Dedicated page for the Bugatti Chiron model
- **Bolide** (`/bolide`) - Dedicated page for the Bugatti Bolide model

## License

This project is created for educational and learning purposes only. Bugatti and all related trademarks are property of Bugatti Automobiles S.A.S.
