# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

Follow these steps to set up and run the project:

### 1. Prerequisites
- **Node.js v16 or higher** is required. Check your version with:
  ```
  node --version
  ```
  If your version is below 16, download and install the latest LTS version from [nodejs.org](https://nodejs.org/).

### 2. Install Dependencies
Remove any previous dependencies and lock files to avoid conflicts:

On Windows CMD:
```
rmdir /s /q node_modules
del package-lock.json
npm install
```

### 3. Start the Development Server
```
npm run dev
```

### 4. Troubleshooting
If you see an error like `TypeError: crypto.hash is not a function`, it usually means your Node.js version is too old or there is a problem with your dependencies. Make sure you:
- Are using Node.js v16 or higher
- Have deleted `node_modules` and `package-lock.json` and reinstalled with `npm install`

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
