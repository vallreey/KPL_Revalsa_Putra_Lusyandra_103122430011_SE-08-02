# Tugas Guided 02: Pemrograman JavaScript

`Revalsa Putra Lusyandra`

`103122430011`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Kode Sumber
Tersedia di :
1. [array.js](array.js)
2. [exercise.js](exercise.js)
3. [exercise2.js](exercise2.js)
4. [main.js](main.js)

## Output
Output dari [array.js](array.js)
![arrayjs.png](/02_Pemrograman_JavaScript/Guided/img/Screenshot%202026-03-11%20092054.png)

Output dari [exercise.js](exercise.js)
![arrayjs.png](/02_Pemrograman_JavaScript/Guided/img/Screenshot%202026-03-11%20092304.png)

Output dari [exercise2.js](exercise.js)
![arrayjs.png](/02_Pemrograman_JavaScript/Guided/img/Screenshot%202026-03-11%20092346.png)

Output dari [main.js](main.js)
![arrayjs.png](/02_Pemrograman_JavaScript/Guided/img/Screenshot%202026-03-11%20092423.png)

## Deskripsi

### array.js
Pada bagian `array.js`, program membuat sebuah array bernama `kotaDikunjungi` yang berisi beberapa nama kota yang pernah dikunjungi oleh saya. Lalu dilakukan beberapa operasi array seperti `unshift()` untuk menambahkan kota di awal array, `push()` untuk menambahkan kota di akhir array, dan `pop()` untuk menghapus elemen terakhir. Di code juga ada comment `// kotaDikunjungi.reverse();`, nah comment yang itu adalah perintah untuk membalik urutan isi array. Setelah itu `splice()` dipakai untuk menghapus elemen pada posisi tertentu, lalu salah satu isi array diganti menggunakan notasi indeks `(kotaDikunjungi[1]).` lalu nanti hasil array ditampilkan dengan `console.log()`.

### exercise.js
Pada `exercise.js`, terdapat fungsi `sumNvalue(n)` yang menerima sebuah angka. Fungsi ini menggunakan perulangan `for` untuk menjumlahkan angka dari 1 sampai n. Setiap angka akan ditambahkan ke variabel `hasil`, lalu setelah perulangan selesai hasilnya dikembalikan dengan `return`. Di bagian bawah, fungsi dipanggil dengan `sumNvalue(5)` sehingga program menghitung penjumlahan dari 1 sampai 5.

### exercise2.js
Pada `exercise2.js`, di situ membuat sebuah array bernama `listMinuman` yang berisi tiga minuman favorit. Setelah itu dua elemen pertama diubah menggunakan notasi kurung seperti `listMinuman[0]` dan `listMinuman[1]`. Lalu ditambahkan satu minuman baru di bagian depan array menggunakan `unshift()`. Terakhir, isi array ditampilkan menggunakan `console.log()`.

### main.js
Pada `main.js`, di bagian code yang diberi comment. Nah di comment itu adalah berisi contoh fungsi seperti fungsi untuk mengecek ganjil atau genap dan fungsi untuk mencari nilai absolut. lalu di `main.js` setelah comment itu, membuat sebuah object bernama user yang berisi data seperti `firstName`, `lastName`, dan `age`. Di bagian akhir, program mengambil nilai `firstName` dari object menggunakan user `["firstName"]`, lalu menampilkannya dengan `console.log()`.