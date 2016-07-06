# HTTP Endpoint Tests

This project uses an approach to unit testing called "HTTP Endpoint Testing".
This approach works in the following way:

1. Any outgoing service calls are stubbed out.
2. [Supertest](https://npmjs.org/package/supertest) is used to drive
the server using local HTTP.
3. The code is verified at the HTTP interface level, including checks
proper status codes for failure conditions.

Well-written endpoint tests accomplish the following things:
* They provide 'living documentation' for the HTTP endpoints.
* They thoroughly check all aspects of the client-server contract,
including status codes, session requirements, and request parameters.

## A Basic Endpoint Test

TODO: Example

## Testing Endpoints that Call Other services

TODO: Example

# Testing Authenticated Endpoints

TODO: Example
