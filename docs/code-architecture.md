## Code Architecture

This is a basic Koa HTTP server which consists of six main types of construct:

* Middleware
* Routes
* Controllers
* Services

### Middleware

Middleware are things that intercept incoming HTTP request and manipulate them
before passing them down to other middleware or controllers.

They live in the `middleware` folder and are typically used to validate
request parameters, parse request bodies, or enforce authentication rules.

They are implemented as `async` functions which act on the Koa request context
(`ctx`), and then `await` the `next` middleware in the chain for that HTTP
endpoint.

### Routes

A route simply configures an HTTP endpoint serviced by this server. It consists
of a path, and a list of middleware, terminating in a controller.

HTTP requests to that endpoint trigger each middleware to run in turn, until
the controller finally sets a response on the Koa context. This response is then
sent back to the HTTP client.

We try really hard to make the 'routes' files as declarative as possible; they
should be self-documenting roadmaps for sets of endpoints.

They live in the `routes` folder.

### Controllers

A controller is a special case of a middleware - it's doesn't call `next`, and
therefore ends the execution chain. It is expected to supply a status code
and body to be sent back to the HTTP client.

Controllers are typically the main HTTP request handlers for each route. They
mainly deal with HTTP-related logic: unpacking request parameters or marshaling
responses. Try to put business logic into services as much as possible.

Controllers also live in the `routes` folder.

### Services

Services are collections of utility functions that don't belong anywhere else.
They live in the `services` folder.
