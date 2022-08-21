# DaxStudio-Docs

[![Deploy to GitHub Pages](https://github.com/DaxStudio/DaxStudio-Docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/DaxStudio/DaxStudio-Docs/actions/workflows/deploy.yml) [![Test deployment](https://github.com/DaxStudio/DaxStudio-Docs/actions/workflows/test-deploy.yml/badge.svg)](https://github.com/DaxStudio/DaxStudio-Docs/actions/workflows/test-deploy.yml)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. It creates the content for [daxstudio.org](https://daxstudio.org)

### Installation

```
npm ci
```

### Local Development

```
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This site is automatically deployed using github actions when a commit to the `main` branch is done.