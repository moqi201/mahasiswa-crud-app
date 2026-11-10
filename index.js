
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set EJS sebagai template engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// Menghubungkan folder public untuk CSS dan asset lainnya
app.use(express.static('public'));

// Koneksi Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Sesuaikan dengan user MySQL kamu
    password: '', // Sesuaikan dengan password MySQL kamu
    database: 'kampus_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Terkoneksi ke database kampus_db');
});

// ================= ROUTING CRUD =================

// READ: Tampilkan semua mahasiswa
app.get('/', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) throw err;
        res.render('index', { mahasiswa: results });
    });
});

// CREATE: Tampilkan form tambah
app.get('/tambah', (req, res) => {
    res.render('tambah');
});

// CREATE: Proses tambah data
app.post('/tambah', (req, res) => {
    const { nama, nim, jurusan } = req.body;

    db.query(
        'INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?, ?, ?)',
        [nama, nim, jurusan],
        (err) => {
            if (err) throw err;
            res.redirect('/');
        }
    );
});

// UPDATE: Tampilkan form edit
app.get('/edit/:id', (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM mahasiswa WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.render('edit', { mhs: results[0] });
    });
});

// UPDATE: Proses edit data
app.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const { nama, nim, jurusan } = req.body;

    db.query(
        'UPDATE mahasiswa SET nama = ?, nim = ?, jurusan = ? WHERE id = ?',
        [nama, nim, jurusan, id],
        (err) => {
            if (err) throw err;
            res.redirect('/');
        }
    );
});

// DELETE: Hapus data
app.get('/hapus/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM mahasiswa WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Jalankan server (Untuk lokal)
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

// Export app untuk Vercel
module.exports = app;
