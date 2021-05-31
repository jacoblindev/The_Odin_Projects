const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = "";
    switch (q.pathname) {
        case "/":
            filename = "./index.html";
            break;
        case "/about":
        case "/contact-me":
            filename = "." + q.pathname + ".html";
            break;
        default:
            filename = "./404.html";
            break;
    }
    fs.readFile(filename, (err, data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080, () => {
    console.log('Node server is live...!');
});