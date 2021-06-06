const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index', (req, res) => {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.get('/:404', (req, res) => {
    console.log(req.originalUrl);
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});
