const express = require('express');
const path = require('path');

const app = express();
const PORT = 1278;

// Establecer la carpeta pública desde donde se servirán los archivos estáticos
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista1.html'));
});

// Endpoint para vista2.html
app.get('/vista2', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista2.html'));
});

// Nuevo endpoint para vista3.html
app.get('/vista3', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista3.html'));
});


app.get('/vista4', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista4.html'));
});


app.get('/vista5', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista5.html'));
});


app.get('/vista6', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista6.html'));
});


app.get('/vista7', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista7.html'));
});


app.get('/vista8', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista8.html'));
});

app.get('/vista9', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista9.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
