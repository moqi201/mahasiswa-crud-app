 <div align="center">

# 🎓 Student Management System

**Aplikasi Manajemen Data Mahasiswa**

Aplikasi CRUD sederhana untuk mengelola data mahasiswa menggunakan Node.js, Express.js, EJS, dan MySQL.

<br>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" />
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />

<br><br>

**Simple · Modern · Efficient**

</div>

---

## 📌 About Project

**Student Management System** merupakan aplikasi berbasis web yang digunakan untuk mengelola data mahasiswa secara sederhana.

Project ini dibuat menggunakan konsep CRUD (Create, Read, Update, Delete) dengan database MySQL sebagai penyimpanan data.

## ✨ Features

| Features | Description |
|:---|:---|
| ➕ Create | Menambahkan data mahasiswa |
| 📋 Read | Menampilkan seluruh data mahasiswa |
| ✏️ Update | Mengubah data mahasiswa |
| 🗑️ Delete | Menghapus data mahasiswa |
| 🗄️ MySQL | Menyimpan data ke database |

## 🛠️ Tech Stack

- **Backend:** Node.js & Express.js
- **Frontend:** EJS, HTML, CSS
- **Database:** MySQL
- **Package Manager:** NPM

## 📁 Project Structure

```text
student-management-system/
│
├── public/
│   └── css/
│       ├── input.css
│       └── style.css
│
├── views/
│   ├── index.ejs
│   ├── tambah.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
├── package-lock.json
├── tailwind.config.js
├── .gitignore
└── README.md
```

## 🚀 Installation

**1. Clone Repository**

```bash
git clone https://github.com/USERNAME/student-management-system.git
```

**2. Masuk ke Folder Project**

```bash
cd student-management-system
```

**3. Install Dependencies**

```bash
npm install
```

**4. Konfigurasi Database**

Buat database MySQL dengan nama:

```sql
CREATE DATABASE kampus_db;

USE kampus_db;

CREATE TABLE mahasiswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    nim VARCHAR(30) NOT NULL,
    jurusan VARCHAR(100) NOT NULL
);
```

**5. Jalankan Aplikasi**

```bash
node index.js
```

Buka browser dan akses:

```text
http://localhost:3000
```

## 📸 Application Preview

<div align="center">

*Student Management System – Dashboard Data Mahasiswa*

</div>

## 👨‍💻 Developer

<div align="center">

**Developed with ❤️**

Student Management System

*Learning Project – CRUD Application*

</div>

---

<div align="center">

© 2026 Student Management System

</div>