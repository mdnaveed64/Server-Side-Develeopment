import http from 'http';   // load modules

const hostName: string = '127.0.0.1';
const port: number = 5000;

const server: http.Server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('content-Type', 'text/html');
    response.end(`<h2>Welcome to Node JS Server</h2>`);
});
server.listen(port, hostName, () => {
    console.log(`Node JS Server is Started at http://${hostName}:${port}`);
});