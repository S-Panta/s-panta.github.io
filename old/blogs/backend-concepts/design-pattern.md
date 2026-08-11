### Request-Response Model
- client sends a request. Server should understand, executes the request and send that back as response. Client parses the response and consumes. 
- Protocol Buffer parsing is easier and cost is less.
- HTTP,DNS,RPC ( remote procedure call) 
- SQL and database protocols
- APIs (REST,SOAP,GraphQL) 

Example: A image service that upload large image at once vs chunk image and send a request for chunk (resummable)
- Don't work for Notification service, chatting, (doesn't work with this model), very long running requests , also when client disconnects in the middle of process? 
Project: Build a web server in Go