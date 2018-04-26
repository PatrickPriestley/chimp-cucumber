# Chimp.js
Chimp can be used with *any technology stack* as it allows your to write your test automation in the language of the web: JavaScript.

Set an `@focus` tag in the spec title, save a file, Chimp reruns the spec until you make it pass. 

### Installation as cli

```sh
npm install -g chimp
```


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



