## Running site locally

1. Clone repository
2. Install dependencies via `npm i` command
3. Create `.env` file from `.env.example` file and make sure it has correct values
4. Start development server via `npm run dev` command

## Make build

1. Start build via `npm run build` command
2. Start server via `npm run start` command

## Commit strategy

1. You should create new branches out of dev branch
2. You should make a pull-request to dev branch
3. You should check your open pull-requests and rebase them against dev in case any conflicts
4. You should use master branch only for deployment

## Deploy

1. Deploy `dev` to staging http://167.71.71.176:8000/ (file `bash deploy-staging`)
2. Deploy `master` to production https://keenethics.com/ (file `bash deploy`)

### Note for deploy:

If you deploy to production and see that your changes didn't implement, but in localhost all works. You can try command `killall node` on prod.

## Test it

1. Start development server via `npm run dev` command
2. Start tests via `npm run test`

## Note for macOS developers

1. Node.js version has to be >= 9
2. After installing dependencies you have to run `npm rebuild node-sass`
