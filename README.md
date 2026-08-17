# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Live demo

The app is live at: https://monu1041.github.io/react-concepts-hub/

## Preview

- Quick open link and badge:

	[![View demo on GitHub Pages](https://img.shields.io/badge/View%20Demo-GitHub%20Pages-blue?logo=github)](https://monu1041.github.io/react-concepts-hub/)

- Optional screenshot preview (add a screenshot to `public/preview.png` or tell me and I can add one):

	[![Live preview screenshot](https://monu1041.github.io/react-concepts-hub/preview.png)](https://monu1041.github.io/react-concepts-hub/)

If you want, I can capture a screenshot and commit it to `public/preview.png`, or add a GitHub Action to generate it automatically on deploy.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Running locally

- Install dependencies:

	`npm install`

- Start the development server with Vite:

	`npm run dev`

- Open the app in your browser at `http://localhost:5173` (Vite will print the actual URL).

## Building

- Create a production build (output folder: `dist`):

	`npm run build`

## Deploying to GitHub Pages

There are two quick options to deploy the production build to GitHub Pages. Replace `REPO_NAME` with your repository name (the folder part of the URL: `https://<user>.github.io/REPO_NAME`).

- Option A — One-off (no package changes):

	1. Install the deploy helper:

		 `npm install --save-dev gh-pages`

	2. Build with the correct base path and publish the `dist` folder:

		 `npm run build -- --base=/REPO_NAME/ && npx gh-pages -d dist`

- Option B — Add an npm `deploy` script (recommended for repeatable deploys):

	1. Add this script to your `package.json` `scripts` section:

		 `"deploy": "npm run build -- --base=/REPO_NAME/ && gh-pages -d dist"`

	2. Then run:

		 `npm run deploy`

Notes:

- If you prefer setting the base permanently, set `base` in `vite.config.js` instead of passing `--base` at build time:

	```js
	// vite.config.js
	import { defineConfig } from 'vite'
	import react from '@vitejs/plugin-react'

	export default defineConfig({
		base: '/REPO_NAME/',
		plugins: [react()],
	})
	```

- For user/organization pages (deploying to `https://<user>.github.io`), use `--base=/` or omit the `base` option and deploy to the `gh-pages` branch root as appropriate.
