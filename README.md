# ThreeJS & Webpack Starter ![Node v12.10.0](https://img.shields.io/badge/node-v12.10.0-brightgreen.svg?logo=node.js)

I got tired of the amount of overhead involved in getting a modular THREE.js project up-and-running. This repo is intended to solve some of those problems. I'll keep iterating -- I'd like to include the minimal amount of boilerplate required to stop repeating myself for EVERY project but also be completely unopinionated.

## 🎉 Getting Started

### Prerequisites

Make sure you have Node and NPM installed.

- Node `v12.10.0` (_You can quickly switch to the correct version with `nvm use` if you have it installed._)
- NPM `>6.10.3`

### Development

Out-of-the-box, things are pretty simple:

1. 📦 **Install dependencies.** I use `ci` instead of `i`/`install` to avoid versioning discrepancies but live your life.

   ```bash
   npm ci
   ```

2. 🏗 **Build project.** This will just do all the bundling without starting a dev server.

   ```bash
   npm run build
   ```

3. 🛠 **Build and run development server.** This command will start a development server which watches for changes and auto-reloads at `localhost:9000`.

   ```bash
   npm start
   ```
