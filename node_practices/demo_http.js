const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.write('Hello NodeJS Newbie...!');
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    //res.write(req.url);
    res.end(txt);
}).listen(8080);