### Express 101
- Routing: how application end point (URI) responds to client request. It uses all HTTP methods.
- `app.all` : it handles all HTTP methods.
 - `app.use` : to specify the middleware.
 -  The handler functions (callback) are called when that specific endpoint is triggered. 


### Middleware
- use `next()` to pass control to other callback function if multiple callback is used. 
- global middleware is  defined using `app.use` where that function will be run before every route. it is called everytime a  new request is made.
- for functional middleware, define them in the routing functions and add `next()` to make sure other  functions is called. 

