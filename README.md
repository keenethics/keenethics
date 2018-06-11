## Running site locally

1. Clone repository
2. [Install Yarn](https://yarnpkg.com/en/docs/install)
3. Install dependencies via `yarn` command
4. Start development server via `yarn dev` command

## Make build

1. Start build via `yarn build` command
2. Start server via `yarn start` command

## Commit strategy

1. You should create new branches out of dev branch
2. You should make a pull-request to dev branch
3. You should check your open pull-requests and rebase them against dev in case any conflicts
4. You should use master branch only for deployment

## Deploy

1. Start build via `yarn deploy` command
2. Enjoy

### Note for deploy:
If you deploy to production and see that your changes didn't implement, but in localhost all works. You can try command `killall node` on prod.
