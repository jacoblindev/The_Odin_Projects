const http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('demofile.html', (err, data) => {
        if (err) {
            console.error(err);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
    // fs.appendFile('mynewfile.txt', 'Hello content!', (err) => {
    //     if (err) throw err;
    //     console.log('1: Updated...!');
    // });
    // fs.open('mynewfile2.txt', 'w', (err) => {
    //     if (err) throw err;
    //     console.log('2: Saved...!');
    // });
    // fs.writeFile('mynewfile3.txt', 'YO, Node.js is here!!!', (err) => {
    //     if (err) throw err;
    //     console.log('3: Saved...!');
    // });
}).listen(8080);