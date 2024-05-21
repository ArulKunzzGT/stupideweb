const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Beranda Portofolio' });
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'flower', 'home.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'error', '404.html'));
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
