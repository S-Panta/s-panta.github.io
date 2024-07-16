## User Authentication
knowing who the user is
- Session based auth
- JSON Web Tokens
- Oath (for accessing huge site) : more about authorization, what access has these user? OpenIDConnect

### Passport JS
- It's a middleware for express server. 
- On every HTTP request, it search first for the strategy and then check whether the requester has permission to do that or not. If the flow fails, it returns `401 unauthorized`
- 

### HTTP headers
- HTTP headers(metadata about the requests) let the client and the server pass additional information with an HTTP request or response.
- Three types of headers in the `Network Tab` on the browser. `General`, `Response Headers` and `Request Headers`.
- General tab contains general information about the request, response. For example, `url`,`http methods`  

### Cookies
- Request and Response Cookies
- HTTP is a stateless protocol ( it doesn't store any information in request and response).

- An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests.

- Set-Cookie HTTP response header is used to send a cookie from the server to the user agent, so that the user agent can send it back to the server later. A cookie definition begins with a name-value pair.

