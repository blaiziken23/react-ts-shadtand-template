# React-TS-ShadZustand-Template

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
│   ├── routes/           # Application routes
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── styles/           # Global and component-specific styles
│   └── main.tsx          # Application entry point
├── public/               # Public static files
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project metadata and scripts
```

---

## Usage

### Components
The template uses **ShadCN** components, which are modular and styled to maintain a consistent UI.

- Place reusable components in the `src/components` folder.
- Example of using a ShadCN button component:
  ```tsx
  import { Button } from "@shadcn/ui";

  const App = () => {
    return <Button>Click Me</Button>;
  };

  export default App;
  ```

### State Management
**Zustand** is used for state management. Define your stores in `src/stores`.

- Example of creating a store:
  ```tsx
  import create from "zustand";

  interface CounterState {
    count: number;
    increment: () => void;
  }

  const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
  }));

  export default useCounterStore;
  ```

- Example of using a store in a component:
  ```tsx
  import useCounterStore from "../stores/counterStore";

  const Counter = () => {
    const { count, increment } = useCounterStore();

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };

  export default Counter;
  ```

---

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run preview`**: Preview the production build locally.
- **`npm run lint`**: Lint the codebase.
- **`npm run format`**: Format the code using Prettier.

---

## Customization

1. **Add New ShadCN Components:**
   Install additional ShadCN components if needed:
   ```bash
   npm install @shadcn/<component>
   ```

2. **Configure Zustand Middleware:**
   Enhance your Zustand stores with middleware like devtools or persistence.
   ```bash
   npm install zustand-middleware
   ```

3. **Extend Vite Config:**
   Modify `vite.config.ts` to include plugins or adjust build settings as needed.
