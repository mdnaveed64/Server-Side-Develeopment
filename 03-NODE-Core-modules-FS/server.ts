import http from 'http';   // load modules
import fs from 'fs';
import path from 'path';

const hostName: string = '127.0.0.1';
const port: number = 5000;
let output: string = '';

const server: http.Server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('content-Type', 'text/html');

    //fs module

    fs.readFile(path.join(__dirname, 'data', 'message.txt'), 'utf-8', (err, data) => {
        if (err) throw err;
        print(data);
        fs.writeFile(path.join(__dirname, 'data', 'data.txt'), data, 'utf-8', (err) => {
            if (err) throw err;
            print('Data is written to a file');
        });
    });

    //read the current program and write to  another file
    fs.readFile(path.join(__dirname, 'server.ts'), 'utf=8', (err, data) => {
        if (err) throw err;
        fs.writeFile(path.join(__dirname, 'program', 'app.ts'), data, 'utf-8', (err) => {
            if (err) throw err;
            print('data is written to a file');
        });
    });


    response.end(`<pre style="color: orangered">${output}</pre>`);
});
let print = (str: string) => {
    output = `${str} \n`;
};

server.listen(port, hostName, () => {
    console.log(`Node JS Server is Started at http://${hostName}:${port}`);
});