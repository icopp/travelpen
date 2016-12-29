# travelpen

A basic wrapper for the browser console. Derived from [JavaScript Debug](https://github.com/cowboy/javascript-debug) under the MIT license.

## Usage

As the docs for JavaScript Debug, except that instead of automatically adding a `debug` object to the window, it is supplied as the default export.

```
const debug = require('travelpen');

debug.log('This is a log message.');
```