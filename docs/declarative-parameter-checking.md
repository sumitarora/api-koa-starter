# Declarative Parameter Checking

Validating request parameters is important. However it can also result in a
lot of duplicate boilerplate code.

In this project, we've adopted an approach that uses Koa middleware to validate
as much of this as possible. We try to write these middlewares so that they
are declarative: the code that uses them "says what it's doing", so to speak.

Here's an example of the `requires` middleware, that sends a 400 error if
the specified parameters are missing:

```JavaScript
router.post('/someRoute/:someRouteParam',
  // ... requires someRouteParam as a route parameter:
  requires(['params'], ['someRouteParam']),

  // ... requires offset and limit as query parameters:
  requires(['query'], ['offset', 'limit']),
  someRouteController);
```

TODO: use this pattern to write more sophisticated middlewares
to filter bad data from parameters as well.
