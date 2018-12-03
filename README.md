## Configure

# Add .env file in root

```sh
REACT_APP_GITHUB_SEARCH_API=https://api.github.com/search/users
REACT_APP_GITHUB_USER=https://api.github.com/users
```

## Run

# development

```sh
yarn install
yarn dev
```

# production

```sh
yarn install
yarn build
serve -s build
```
