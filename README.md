# React-TS-Shadtand-Template

This is a comprehensive starter template for building React applications with Vite, TypeScript, ShadCN, and Zustand.

## Features

- **Vite**: Fast build tool and development server.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **ShadCN**: Modular and styled components for consistent UI.
- **Zustand**: Lightweight and flexible state management library.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/blaiziken23/react-ts-shadtand-template.git
   cd react-ts-shadtand-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173`.

---

## Project Structure

```
react-ts-shadtand-template/
├── src/
│   ├── components/       # Reusable UI components (ShadCN)
│   ├── stores/           # Zustand stores
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── styles/           # Global and component-specific styles
│   └── main.tsx          # Application entry point
├── public/               # Public static files
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project metadata and scripts
```

---

## Included ShadCN Components

This template comes with the following ShadCN components pre-installed and ready to use:

- **Button**: A styled button component for various use cases.
- **Card**: A flexible container for grouping content.
- **Input**: A customizable input field for forms.
- **Textarea**: A multi-line text input field.
- **Alert**: A component for displaying important messages.
- **Badge**: A small, inline block element to display status or counts.
- **Form**: A wrapper for handling form elements with ease.

---

## Customization

1. **Add New ShadCN Components:**
   Install additional ShadCN components if needed:
   ```bash
   npx shadcn@latest add <component>
   ```