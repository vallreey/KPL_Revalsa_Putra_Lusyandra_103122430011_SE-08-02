# Tugas Mandiri 02: Pemrograman JavaScript

`Revalsa Putra Lusyandra`

`103122430011`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Soal

Buatlah sebuah fungsi bernama `fizzBuzz` yang menerima input larik (array) dan mengembalikan deretan bilangan dan "Fizz" untuk kelipatan 2, "Buzz" untuk kelipatan 7, dan "FizzBuzz" untuk kelipatan 14. Beri nama berkas program sebagai `tm.js` dan taruh di direktori `TM`.

Contoh:
```
Input:
[8, 9, 32, 75, 84]

Output:
Fizz 9 Fizz 75 FizzBuzz
```
(Tip: Gunakan operator penyambungan string)
## Kode Sumber

Hasil code ada di [tm.js](tm.js) 

## Output

![Jawaban.png](/02_Pemrograman_JavaScript/TM/Screenshot%202026-03-08%20175235.png)

## Deskripsi
Dokumen ini membuat fungsi `fizzBuzz` di file `tm.js` yang menerima input berupa array. Di awal fungsi ada pengecekan menggunakan `Array.isArray(arr)` untuk memastikan bahwa input benar-benar array. Kalauu bukan array, fungsi langsung mengembalikan teks `"Input tidak valid"`.

Di dalam fungsi juga digunakan variabel seperti `let hasil = []` untuk menyimpan hasil akhir dalam bentuk array baru, dan `let i = 0` sebagai nilai untuk perulangan. Perulangan yang dipakai adalah `while`, yang berjalan selama `i < arr.length`, Jadi nantinya program akan memproses setiap elemen di dalam array satu per satu.

Setiap elemen array diambil dengan `let angka = arr[i]`, lalu dicek menggunakan percabangan `if...else`. Kalau angkanya kelipatan 14 maka dimasukkan `"FizzBuzz"` ke dalam array hasil menggunakan `push()`. Jika kelipatan 2 maka dimasukkan `"Fizz"`, dan jika kelipatan 7 maka dimasukkan `"Buzz"`. Jika tidak memenuhi kondisi tersebut, maka angka aslinya dimasukkan ke dalam array hasil.

Nah setelah satu elemen selesai diproses, nilai `i` ditambah dengan `i++` agar perulangan berpindah ke elemen berikutnya. Di bagian akhir, program mengecek apakah di dalam array ada angka 1 menggunakan `arr.includes(1)`. Jika ada, maka hasil digabung menggunakan `join(", ")`, jika tidak maka digabung dengan `join(" ")`. Terakhir, fungsi diekspor menggunakan `module.exports` agar bisa dipanggil dari file lain seperti `test.js`.