
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Set EJS sebagai template engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// Menghubungkan folder public untuk CSS dan asset lainnya
app.use(express.static('public'));

// ================= KONEKSI DATABASE TiDB =================

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 4000),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true
    },
    waitForConnections: true,
    connectionLimit: 5
});

// ================= ROUTING CRUD =================

// READ: Tampilkan semua mahasiswa
app.get('/', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Gagal mengambil data mahasiswa');
        }

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
            if (err) {
                console.error(err);
                return res.status(500).send('Gagal menambahkan mahasiswa');
            }

            res.redirect('/');
        }
    );
});

// UPDATE: Tampilkan form edit
app.get('/edit/:id', (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM mahasiswa WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Gagal mengambil data mahasiswa');
        }

        if (results.length === 0) {
            return res.status(404).send('Mahasiswa tidak ditemukan');
        }

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
            if (err) {
                console.error(err);
                return res.status(500).send('Gagal mengubah data mahasiswa');
            }

            res.redirect('/');
        }
    );
});

// DELETE: Hapus data
app.get('/hapus/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM mahasiswa WHERE id = ?', [id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Gagal menghapus data mahasiswa');
        }

        res.redirect('/');
    });
});

// Jalankan server secara lokal
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
}

// Export app untuk Vercel
module.exports = app;
