# TM 13_Design_Pattern_Implementation

`Revalsa Putra Lusyandra`

`103122430011`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Soal
Jelaskan dengan kemampuanmu apa itu event delegation dalam design pattern JavaScript. Tidak ada batas bobot kata dalam menjawab tugas ini, tetapi penilaian akan bergantung dari sepaham apa dan sebagus apa kamu menyajikan jawabanmu.

## Jawaban
Event delegation dalam JavaScript itu kurang lebihnya cara untuk menangani event, seperti klik tombol, tanpa harus memasang `addEventListener` ke setiap elemen satu per satu. Jadi, event listener cukup dipasang di elemen induk atau parent, lalu nanti parent itu yang mengecek elemen mana yang sebenarnya diklik.

Contohnya, kalau ada banyak tombol hapus di dalam daftar project TUBES saya yaitu daftar kuda, kita tidak perlu memberi event klik ke semua tombol hapus. Cukup pasang event listener di bagian daftar kudanya saja, lalu ketika ada tombol yang diklik, JavaScript akan mengecek apakah yang diklik itu tombol hapus atau bukan. Jadi kodenya lebih singkat dan tidak terlalu ribet.

Selain itu, event delegation juga berguna kalau ada elemen baru yang ditambahkan lewat JavaScript. Misalnya ada produk baru yang masuk ke daftar, tombol hapusnya tetap bisa berfungsi karena yang menangani event adalah parent-nya, bukan tombolnya langsung. Jadi, kurang lebihnya event delegation ini membuat kode lebih rapi, lebih hemat, dan lebih gampang dirawat, terutama untuk halaman web yang elemennya banyak atau sering berubah.