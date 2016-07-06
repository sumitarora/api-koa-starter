# Rangle Koa-starter

## Installation:

```sh
npm install
```

## Run the server in dev mode:

```sh
npm run dev
```

This watches server files and runs the ES6 source code directly using a require
hook, for a convenient developer experience. This mode is __not suitable for
production__.

Make API requests to http://localhost:3001

## Run the server in prod mode:

```sh
npm run build
npm start
```

This transpiles the ES6 code to ES5 (in the `dist` folder) and runs it.

Make API requests to http://localhost:3001

## Lint the code and Run the unit tests:

```sh
npm test
```

This will also analyze unit test code coverage info and output a report to
`./coverage`.

## TODO:

* Basic prodmode clustering with throng?
* Basic auth endpoint for other starters to use?
  * with caveats - big blurb on session management
  * protected whoami?
* Jasmine instead of mocha?
* Better coverage numbers, tools.
* Update rangle-starter CLI, README.
