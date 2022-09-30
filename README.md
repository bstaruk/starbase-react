# starbase-react

[![dependencies status](https://david-dm.org/bstaruk/starbase-react/status.svg)](https://david-dm.org/bstaruk/starbase-react)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbstaruk%2Fstarbase-react.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbstaruk%2Fstarbase-react?ref=badge_shield)

starbase-react is a Typescript, React, Redux-Toolkit & Emotion boilerplate. Brewed with [Create React App](https://github.com/facebook/create-react-app) ([v5.0.1](https://github.com/facebook/create-react-app/releases/tag/v5.0.1) w/ [TypeScript template](https://create-react-app.dev/docs/adding-typescript)), then sweetened with:

- formatting via [EditorConfig](https://editorconfig.org) & [Prettier](https://prettier.io)
- linting via & [ESLint](https://eslint.org)
- pre-commit linting and formatting via [husky](https://typicode.github.io/husky) & [lint-staged](https://github.com/okonet/lint-staged)
- a modern redux implementation via [Redux Toolkit](https://redux-toolkit.js.org) & [Redux-Saga](https://redux-saga.js.org)
- css-in-js with global styles and a theme via [Emotion](https://emotion.sh)
- ...and more!

starbase-react is a spin on [starbase](https://github.com/bstaruk/starbase), and intended to be relatively small in scope so that it may be easily extended and customized, or used as a learning tool for folks who are trying to become familiar with Typescript, React 16, Redux, Redux-Saga, Emotion, Testing Library, etc.

## license

starbase-react is open source and free software, so you may to do whatever you wish with it -- commercially or personally. You can buy me a beer next time you're in Boston, star the project and tell a friend, or you can erase all signs of origin and tell your coworkers that you made it yourself. It's all good!

## getting started

After completing the steps below, you will be ready to begin using starbase-react:

1. Install [Node.js](https://nodejs.org) (latest LTS recommended)
2. Clone starbase-react into your project root directory
3. Install dependencies by running `npm install` in your project root directory

## building, watching & developing

### local development

After running `npm run start` in the project root, your `/src` code will be served at [http://localhost:3000](http://localhost:3000) and watched for changes. As you modify code in `/src`, the project will be recompiled and your browser will refresh to show the latest changes.

```
cd /path/to/starbase-react
npm run start
```

### building for production

Use `npm run build` in your project root to run a production build.

Production builds compile & minify your assets into `/dist` for distribution and/or integration into whatever codebase you'll be using these assets in.

```
cd /path/to/starbase-react
npm run build
```
