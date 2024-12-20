const express = require('express');
const path = require('path');
const port = 3000;
var cors = require("cors");
var secure = require("ssl-express-www");
var app = express();
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'flower', 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'flower', 'index.html'));
});

app.get('/mtk', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contekan', 'mtk.txt'));
});

app.get('/pai', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contekan', 'mtk.txt'));
});

app.get('/bindo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contekan', 'bindo.txt'));
});

app.get('/pkn', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contekan', 'pkn.txt'));
});

app.get('/ipa', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contekan', 'ipa.txt'));
});

app.get('/ips', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contekan', 'ips.txt'));
});

app.get('/spotifyicon', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contekan', 'klipartz.com.png'));
});

app.get('/kls8sts1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contekan', 'ranks.txt'));
});


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'error', '404.html'));
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
