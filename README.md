This is a repository with official website of Keenethics company. It's built on top of
meteor.js.

#Development

##Running app locally

1. Clone repository
2. [Install meteor.js](https://www.meteor.com/install) and make sure you have MongoDB installed
3. Run `meteor npm install` to install all the dependencies
3. Start server via ```meteor```

##Commit strategy

Commit message should contain related ticket number and a brief description (e.g.
`Finish homepage layout (ref #2)`). Currently we just commit everything to `master` branch.

##Code style

Please use ESLint to ensure quality of your code. You can also consult
[Google JavaScript Style Guide](http://google.github.io/styleguide/javascriptguide.xml) for other
code styling questions.

## Deploying to Production Server

To deploy to production server you need to have `mup.json` file with proper configuration. You
can use `mup.json.example` as an example. Once this is done you can simply run

```
mup deploy
```

#Testing

We don't currently have any tests.
