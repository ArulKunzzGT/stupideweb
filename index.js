const express = require('express');
const port = 3000;
const path = require('path');
var app = express();
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'flower', 'home.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'flower', 'home.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'error', '404.html'));
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
