const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve all static files from the project root
app.use(express.static(__dirname));

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Clean URL aliases — match Vercel rewrites for consistent local dev
app.get('/about',    (req, res) => res.sendFile(path.join(__dirname, 'pages', 'about.html')));
app.get('/menu',     (req, res) => res.sendFile(path.join(__dirname, 'pages', 'menu.html')));
app.get('/services', (req, res) => res.sendFile(path.join(__dirname, 'pages', 'services.html')));
app.get('/gallery',  (req, res) => res.sendFile(path.join(__dirname, 'pages', 'gallery.html')));
app.get('/contact',  (req, res) => res.sendFile(path.join(__dirname, 'pages', 'contact.html')));

app.listen(PORT, () => {
  console.log('Rome 1960 Cafe running at http://localhost:' + PORT);
});
