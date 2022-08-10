# typescript-backend-template
Typescript+Docker+Eslint+Prettier+Jest+Husky+Commitlint+Ts-node+Vscode+ts-node-dev+CD/CI

<p>
  <a href="https://circleci.com/gh/myfreax/typescript-backend-template"><img src="https://img.shields.io/badge/License-Apache%202.0-brightgreen.svg"></a>
  <a href="https://github.com/myfreax/typescript-backend-template/actions/workflows/test.yml"><img src="https://github.com/myfreax/typescript-backend-template/actions/workflows/test.yml/badge.svg"></a>
  <a href="https://github.com/myfreax/typescript-backend-template/actions/workflows/e2e.yml"><img src="https://github.com/myfreax/typescript-backend-template/actions/workflows/e2e.yml/badge.svg"></a>
  <a href="https://app.codecov.io/gh/myfreax/typescript-backend-template"><img class="notice-badge" src="https://codecov.io/gh/myfreax/typescript-backend-template/branch/main/graphs/badge.svg?branch=main" alt="Badge"></a>
</p>

Every time you create a project, you have to configure various tools. This will be a waste of our time. We will do this with a template to solve this problem. Congratulations on finding the project template you want.

## How use this template with your project?
click above `Use this template` button, create new fork to your github.Then git clone your local host. You can direct clone this repo to your local host

```bash
git clone your-github-repo
yarn install
```

## Development Mode
It restarts target node process when any of required files changes

```bash
yarn start:dev
```

## Test And E2E
```bash
yarn test
yarn test:e2e
```

## Only run specify file
```bash
yarn ts src/main.ts
```

## Typescript
[What is TypeScript and why would I use it in place of JavaScript?](https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303)
- Support for modern JavaScript features
- Advanced type system
- Developer tooling support
- Optionally static typing and type inference
- Enhanced IDE support
- Strict null checks
- JavaScript interoperability

## Eslint
[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. ... ESLint uses an AST to evaluate patterns in code. ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

## Jest
[Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity.

Why code testing? Let us start with a few questions:

- How to measure the quality of code
- How to ensure the quality of code
- Are you free to refactor code
- How to guarantee the correctness of refactored code
- Have you confidence to release your untested code
- If you are not sure, you probably need unit testing.

## Prettier
Prettier is an opinionated code formatter with support for:

- JavaScript (including experimental features)
- JSX
- Angular
- Vue
- TypeScript
- CSS, Less, and SCSS
- HTML
- JSON
- GraphQL
- Markdown, including GFM and MDX
- YAML
Why to use Prettier in your project?
- How to ensure the code style in a team?
- [Why Prettier?](https://prettier.io/docs/en/why-prettier.html)

## Husky
Having a good feedback loop is extremely important for developers. A properly configured project has a CI/CD pipeline that ensures the code will not break anything in the application’s logic or codebase itself by running the necessary checks, such as static code analysis and tests. [Husky](https://typicode.github.io/) can help you do this.

## Commitlint
[commitlint](https://commitlint.js.org/) helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.

Why Use Conventional Commits?
- Automatically generating CHANGELOGs.
- Automatically determining a semantic version bump (based on the types of commits landed).
- Communicating the nature of changes to teammates, the public, and other stakeholders.
- Triggering build and publish processes.
- Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.

## Ts-node
[ts-node](https://typestrong.org/ts-node/docs/) is a TypeScript execution engine and REPL for Node.js.

It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.js tools and libraries.

- Automatic sourcemaps in stack traces
- Automatic tsconfig.json parsing
- Automatic defaults to match your node version
- Typechecking (optional)
- REPL
- Write standalone scripts
- Native ESM loader
- Use third-party transpilers
- Use custom transformers
- Integrate with test runners, debuggers, and CLI tools
- Compatible with pre-compilation for production

## Vscode
We recommend install extensions
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Docker
What can I use Docker for?
- Fast, consistent delivery of your applications
- Responsive deployment and scaling
- Running more workloads on the same hardware

## ts-node-dev
[ts-node-dev](https://github.com/wclr/ts-node-dev) Compiles your TS app and restarts when files are modified.



## CD/CI
GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.
