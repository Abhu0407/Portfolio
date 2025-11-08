# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and a clean design.

## 🚀 Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **AOS (Animate On Scroll)** - Scroll animation library
- **React Icons** - Icon library
- **ESLint** - Code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js v16 or higher** (v18+ recommended)
- **npm** (comes with Node.js)

Check your Node.js version:
```bash
node --version
```

If your version is below 16, download and install the latest LTS version from [nodejs.org](https://nodejs.org/).

## 🛠️ Installation & Setup

### Step 1: Clone or Download the Project
If you haven't already, clone this repository or download the project files.

### Step 2: Navigate to Project Directory
```bash
cd portfolio
```

### Step 3: Install Dependencies

**Clean installation (recommended if you encounter issues):**

On Windows CMD:
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

On macOS/Linux:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Normal installation:**
```bash
npm install
```

This will install all required dependencies including:
- React and React DOM
- Vite
- Tailwind CSS
- AOS (Animate On Scroll)
- React Icons
- ESLint and plugins

### Step 4: Start the Development Server
```bash
npm run dev
```

The development server will start and you can view your portfolio at `http://localhost:5173` (or the port shown in the terminal).

## 📜 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally before deploying.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check for code quality and potential errors.

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── Home.jsx       # Home/hero section
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Skills.jsx     # Skills section
│   │   ├── Experience.jsx # Experience section
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Contact.jsx    # Contact form
│   │   └── Footer.jsx     # Footer
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Project dependencies
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite with:
- React SWC plugin for fast refresh
- Tailwind CSS plugin for styling

### Tailwind CSS
Tailwind CSS v4 is configured via the Vite plugin. You can customize styles in `src/index.css`.

### AOS (Animate On Scroll)
AOS is initialized in `App.jsx` with a default duration of 1000ms. You can customize animations in individual components.

## 🚀 Deployment

### Build for Production
1. Build the project:
   ```bash
   npm run build
   ```

2. The optimized files will be in the `dist` folder.

3. Deploy the `dist` folder to your preferred hosting service:
   - **Vercel**: Connect your GitHub repo or deploy the `dist` folder
   - **Netlify**: Drag and drop the `dist` folder or connect your repo
   - **GitHub Pages**: Use a GitHub Actions workflow or deploy manually

## 🐛 Troubleshooting

### Error: `crypto.hash is not a function`
This error usually indicates:
- **Node.js version is too old**: Make sure you're using Node.js v16 or higher
- **Corrupted dependencies**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Solution:**
```bash
# Clean install
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal for the correct URL.

### Styles Not Loading
- Make sure Tailwind CSS is properly configured in `vite.config.js`
- Check that `src/index.css` is imported in `main.jsx`
- Restart the development server

## 📝 Notes

- This project uses React 19 and requires compatible dependencies
- Tailwind CSS v4 uses a new configuration approach via Vite plugin
- AOS animations are initialized globally in the App component
- All components are located in the `src/components` directory

## 📄 License

This project is open source and available under the MIT License.
