This is a repository with official website of Keenethics company. It's built on top of
meteor.js. Issue tracking is currently handled within BitBuckets issue system.

#Development

##Running app locally

1. Clone repository
2. [Install meteor.js](https://www.meteor.com/install) and make sure you have MongoDB installed
3. Start server via ```meteor```

##Commit strategy

Commit message should contain related ticket number and a brief description (e.g.
`Finish homepage layout (ref #2)`). Currently we just commit everything to `master` branch.

##Code style

Please use JSLint to ensure quality of your code. You can also consult
[Google JavaScript Style Guide](http://google.github.io/styleguide/javascriptguide.xml) for other
code styling questions.

##Deploying to remote server

We currently use meteor.com hosting as our server. To deploy you can simply run:

`meteor deploy keenethics.meteor.com`

#Testing

We don't currently have any tests.
