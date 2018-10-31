const { Response, Request, Headers, fetch } = require('node-fetch');
global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;
