# Chimp.js
[![Circle CI](https://circleci.com/gh/xolvio/chimp.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/xolvio/chimp) [![npm Version](https://img.shields.io/npm/dm/chimp.svg)](https://www.npmjs.com/package/chimp) [![Code Climate](https://codeclimate.com/github/xolvio/chimp/badges/gpa.svg)](https://codeclimate.com/github/xolvio/chimp) [![License](https://img.shields.io/npm/l/chimp.svg)](https://www.npmjs.com/package/chimp) [![OpenCollective](https://opencollective.com/chimp/backers/badge.svg)](#backers) [![OpenCollective](https://opencollective.com/chimp/sponsors/badge.svg)](#sponsors)

[![Gitter](https://img.shields.io/gitter/room/xolvio/chimp.svg)](https://gitter.im/xolvio/chimp)  [![Slack Status](http://community.xolv.io/badge.svg)](http://community.xolv.io)


An awesome developer-centric experience to writing tests with **realtime feedback** using Mocha, Jasmine or Cucumber.js.

![Chimp by Xolv.io](./images/header.png?raw=true)

Chimp can be used with *any technology stack* as it allows your to write your test automation in the language of the web: JavaScript.

### Realtime feedback?
Traditionally only available for unit testing, and now you can get super fast feedback for your acceptance and end-to-end tests:

![Realtime feedback](./images/realtime.gif?raw=true) 

Set an `@focus` tag in the spec title, save a file, Chimp reruns the spec until you make it pass. 

### Want to be a Chimp Ninja?
Checkout our new book where you can learn how to use Chimp across the Full Stack from React to Node.JS, Mocha, Meteor and more.

[Quality Faster](http://quality.xolv.io/?utm_source=XolvOSS&utm_medium=OSSGitHub&utm_content=ChimpGitHubReadme&utm_campaign=QFLaunch) by Sam Hatoum, creator of Chimp.

### Installation as cli

```sh
npm install -g chimp
```

Be sure to checkout our [Automated Testing Best Practices](https://github.com/xolvio/automated-testing-best-practices) repository.

Having trouble? See the [installation documentation](https://chimp.readme.io/docs/installation).

### Usage as cli

For development mode, you can use the watch mode:
```sh
chimp --watch
```
You can also easily change the browser Chimp with `--browser`, e.g. `--browser=phantomjs`

### Installation as gulp/grunt module

```sh
npm install chimp
```

### Usage in a gulp task

```sh
let Chimp = require('chimp');
let options = require('./my/config/for/chimp');
options['_'] = [
	'/my/path/to/node',
	'/my/path/to/my/project/node_modules/.bin/chimp.js'
];
let chimp = new Chimp(options);
chimp.run(function (err, res) {
	console.log('CHIMP RES:',res);
	console.log('CHIMP ERR:',err);
	//next action after chimp finish
});
```

### Documentation

Read the full [documentation site](http://chimp.readme.io/docs). 

*(Thank you to [Readme.io](Readme.io) for the OSS <3)*

## Additional Features

###### Synchronous Javascript
[![WebdriverIO](./images/wdio.png?raw=true)](http://webdriver.io/)

We chose [WebdriverIO](http://webdriver.io) for it's awesome API and made it awesomer by converting it to a synchronous syntax: 

```javascript
browser.url('http://google.com'); // SETUP

var title = browser.getTitle();   // EXECUTE

expect(title).to.equal('Google'); // VERIFY
```

No callback-hell or confusing assertions with promises, just easy-to-read synchronous code that works as you expect it to.

###### Easy CI
![CI](./images/ci.png?raw=true)

Chimp is tested on all the popular CI servers. We genuinely just want you to focus on writing tests and let us deal with all the boring bits!

###### Mocha, Jasmine or Cucumber.js
![Test Frameworks](./images/test-frameworks.png?raw=true)

Some developers love Jasmine and Mocha, and some teams love to use Cucumber for BDD. We decided to give you the choice between the best in class test frameworks for writing end-to-end and acceptance tests. 

###### Client & Server

End-to-end and acceptance testing often require you to setup data on the server and reset state between specs. 

Chimp exposes a global function called `request` that is a synchronous version of the popular [request module](https://www.npmjs.com/package/request#request-options-callback). Our synchronous version of the request module allows you to call your server to reset your system or setup data and receive a result back synchronously, like this:

```javascript
var userId = request({
  url: 'http://localhost:3000/fixtures/createUser'
  method: 'POST',
  json: true,
  body: {username: 'Bob', password: 't0ps3cret'}
});
```

Or if you are using Meteor, you can get fancy with our `server.execute` method:

```javascript
var privateSetting = server.execute(function(settingKey) {
  return Meteor.settings[settingKey];
}, 'privateSetting')
```

###### Lots more
Chimp is PACKED with features that make your life easier. See the [documentation site](http://chimp.readme.io/docs) for more details.

## Using Meteor?

Chimp comes with first-grade Meteor support out-of-the-box, including hot-deploy detection that runs specs after your Meteor client or server restart. 

Be sure to checkout our [Automated Testing Best Practices](https://github.com/xolvio/automated-testing-best-practices) repository which is written using Meteor.

### Usage

In development mode, use the watch mode:
```sh
# start your Meteor app first
chimp --watch --ddp=http://localhost:3000
```

On CI, can select the browser:
```sh
# start your Meteor app first
chimp --browser=firefox --ddp=http://localhost:3000
```

#### Multiple Meteor Servers
If you'd like to run a test with more than one Meteor app server, you can do so by running the same app on multiple ports and providing mulitple `-ddp` options to chimp:
```
# start first app
meteor --port 3005

# start second app in another shell 
meteor --port 3007

# run chimp in another shell
chimp --watch --ddp=http://localhost:3005 --ddp=http://localhost:3007
```
Then you can access the servers in your tests on the global `server.instances` property
```
it('has PORT env var set', function() {
  function getRootUrl() {
    return process.env.ROOT_URL;
  }
  expect(server.instances[0].execute(getRootUrl)).to.equal('http://localhost:3005/');
  expect(server.instances[1].execute(getRootUrl)).to.equal('http://localhost:3007/');
});
```




