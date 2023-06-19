## Overview:

This project shows you how to create a breadcrumbs component with react router dom v6

### To display nested routes only:

- Set `isDisplayNestedRoutesOnly` to `true` in `/src/js/components/breadcrumbs/Breadcrumbs.jsx`

  ```
  modifiedRoutes = constructBreadcrumbsLinks({ routes, isDisplayNestedRoutesOnly: true });
  ```

- Pass `constructBreadcrumbsLinks({ routes })` to `useRoutes` hook in `/src/js/routing/routingConstants/RoutesConfig`

  ```
  export default function Router() {
    return useRoutes(constructBreadcrumbsLinks({ routes }));
  }
  ```

### To display parent routes with nested routes:

- Set `isDisplayNestedRoutesOnly` to `false` in `/src/js/components/breadcrumbs/Breadcrumbs.jsx`

  ```
  modifiedRoutes = constructBreadcrumbsLinks({ routes, isDisplayNestedRoutesOnly: false });
  ```

- Pass `routes` to `useRoutes` hook in `/src/js/routing/routingConstants/RoutesConfig`

  ```
  export default function Router() {
    return useRoutes(routes);
  }
  ```
- Use the `<Outlet />` component in parent routes

## Prerequisites:

- nodeJS > 14.X.X or Docker

## Installing / Getting Started:

### Development (locally):

- Clone repo => `git clone git@github.com:DonAdam2/webpack-react-boilerplate.git`
- Navigate to project directory `cd webpack-react-boilerplate`
- Install dependencies => `yarn install`
- Start the development server => `yarn start`

### Development (using Docker):

- Clone repo => `git clone git@github.com:DonAdam2/webpack-react-boilerplate.git`
- Navigate to project directory `cd webpack-react-boilerplate`
- Install dependencies (required for prettier) => `yarn install`
- Start the development server => `docker-compose up web-dev`

### Windows subsystem for linux "WSL2" (for Docker):

- If you are using Windows 11 or 10, it's recommended to use WSL2:
  - [Install WSL on windows](https://pureinfotech.com/install-wsl-windows-11/)
  - [Install docker on windows](https://docs.docker.com/desktop/install/windows-install/)
  - Open docker desktop app:
    - settings => resources => WSL integration => enable required Ubuntu integration
  - [Setup SSH keys (if you want) on windows and share it with WSL](https://devblogs.microsoft.com/commandline/sharing-ssh-keys-between-windows-and-wsl-2/)
  - Create a new directory in ubuntu:
  ```
  mkdir workspace
  cd workspace
  ```
  - Clone this repo into the selected Ubuntu:
  ```
  git clone git@github.com:DonAdam2/webpack-react-boilerplate.git
  ```
  - Install curl in Ubuntu:
  ```
  sudo apt-get install curl
  ```
  - Install nvm:
  ```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  ```
  - Install required node version:
  ```
  nvm install --lts
  ```
  - Install yarn globally:
  ```
  npm install -g yarn
  ```
  - Update permissions to be able to install NPM packages
  ```
  sudo chown -R $(whoami) ~/workspace/webpack-react-boilerplate
  ```
  - Install packages (for linting purposes):
  ```
  yarn install
  ```
  - Run docker for development:
  ```
  docker-compose up web-dev
  ```

## Docker for production (_basic setup_) (modify it to your needs):
- Update the **_production_** section of the **_Dockerfile_** to meet your needs
- Run the following command to build your image => `docker-compose up web-prod`

## Configuring Prettier

This build relies on [Prettier formatter](https://prettier.io/) to enforce code style. And [ESLint](https://eslint.org/) for identifying problematic patterns found in the code.

- Setting up prettier:

  1- You can find steps on how to set up prettier formatter with WebStorm/PhpStorm [here](https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher).

  **Notes**:

  - It's better to use the local `node_modules` version of prettier instead of a global one, to avoid version conflicts (in case the globally installed version does not match the version specified in `package.json`).

  2- Follow the next steps to set up **prettier** and **eslint** in **_VS Code_**:

  - Install `prettier` plugin

  - Install `eslint` plugin

  - Open **_VS Code settings_** `CTRL + ,`:

    a- Search for `formatter` => check **Format on save**

    b- Search for `prettier` => add `.prettierrc` in **_Prettier: Config Path_** section && check **_Prettier: Require Config_**

  3- Please refer to other tutorials if you are using a different IDE.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
It will open [http://localhost:3000](http://localhost:3000) automatically in the browser to see your app.

All changes will be injected automatically without reloading the page.<br>

You will see in the console the following:

- All redux store related changes
- Any of the following errors:
  1. Linting errors.
  2. Code format errors (because of [prettier](https://prettier.io/))

### `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn build:serve`

Serves the app on `http://localhost:8080/` from the `dist` folder to check the production version.

**_Note:_** Use this script only if you ran the build script `yarn build`.

### `yarn analyze-bundle`

It allows you to analyze the bundle size.

### `yarn generate` **_component_** || **_container_** || **_page_** || **_hook_** || **_service_** || **_reducer_** || **_progressiveWebApp_**

- It creates a boilerplate for component, container, page, custom hook, service, reducer or progressive web app setup.
