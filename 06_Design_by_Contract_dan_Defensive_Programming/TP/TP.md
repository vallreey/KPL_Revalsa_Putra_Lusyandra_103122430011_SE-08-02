# TM 06_Design_by_Contract_dan_Defensive_Programming

`Revalsa Putra Lusyandra`

`103122430011`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Soal

Diberikan dua kode yang sama-sama melakukan operasi pembagian. Pertama menggunakan asersi, kedua menggunakan eksepsi.

```
const assert = require('assert');

function divide(a, b) {
  assert(typeof a === 'number' && typeof b === 'number', 'Nilai harus bilangan bulat');

  assert(b !== 0, 'Tidak bisa pembagian dengan nol');

  return a / b;
}
```

```
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Nilai harus bilangan bulat");
  }

  if (b === 0) {
    throw new Error("Tidak bisa pembagian dengan nol");
  }

  return a / b;
}

try {
  const result = divide(10, 2);
  console.log("Hasilnya adalah:", result);
} catch (error) {
  console.error("Error:", error);
}
```
Menurutmu, kapankah kita saatnya menggunakan asersi atau eksepsi untuk fungsi seperti ini di atas? Apakah kita harus sepenuhnya asersi, atau sepenuhnya eksepsi? Lakukan riset dan berikan jawabannya dalam bentuk esai minimal 300 kata.

## Jawaban
Menurut saya, asersi dan eksepsi memang terlihat hampir sama karena digunakan saat terjadinya error, tetapi sebenarnya keduanya memiliki peran yang berbeda. Asersi itu lebih untuk memastikan bahwa logika yang dibuat di code itu benar atau logika yang dibuat oleh kita sebagai programmer. Jadi kondisi yang diperiksa dengan asersi adalah sesuatu yang seharusnya tidak pernah salah jika code ditulis dengan baik dan mengikuti logika yang benar. Jika asersi gagal, berarti bisa saja ada bug di code. Dengan kata lain, asersi lebih berfungsi sebagai alat bantu untuk mengecek apakah logika yang kita buat sudah berjalan sesuai harapan, terutama saat proses pengembangan atau debugging.

Sedangkan kalau eksepsi, lebih untuk menangani error yang memang berpotensi terjadi saat program dijalankan, terutama yang berasal dari input user atau kondisi di luar logika program. Dalam case nyata, kita tidak bisa menebak/mengira-ngira apa yang dimasukkan oleh user atau kondisi apa yang terjadi saat program berjalan. Misalnya, dalam fungsi pembagian, kalau user memasukkan nilai nol sebagai pembagi atau memberikan tipe data yang tidak sesuai seperti string. Hal seperti ini bisa saja terjadi, sehingga perlu dibuat solusinya dengan baik. Kalau case seperti ini sebaiknya ditangani menggunakan eksepsi agar program bisa memberikan respon yang tepat tanpa langsung berhenti dan tetap menjaga alur program tetap stabil, jadi tidak perlu memulai program dari awal atau harus running ulang.

Dalam kasus fungsi `divide(a, b)`, menurut saya penggunaan eksepsi lebih tepat karena kesalahan yang dicek berkaitan dengan validasi input. Hal ini penting agar fungsi tersebut aman digunakan dan tidak mudah menyebabkan error yang tidak terkontrol. Asersi masih bisa digunakan, tetapi bukan sebagai mekanisme utama, karena penggunaannya lebih difokuskan untuk mengecek code, bukan untuk menangani kesalahan dari user.

Kurang lebihnya seperti itu, jadi menurut saya tidak perlu memilih hanya satu pendekatan. Eksepsi sebaiknya digunakan untuk menangani kesalahan yang mungkin terjadi saat program berjalan, nah kalau asersi sendiri lebih cocok digunakan untuk menjaga logika di saat coding, terutama saat ingin memastikan bahwa logika dalam code tetap benar.