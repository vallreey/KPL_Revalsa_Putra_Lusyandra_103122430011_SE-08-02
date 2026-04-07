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
Menurut saya, asersi dan eksepsi memang terlihat hampir sama karena digunakan saat terjadi error, tetapi sebenarnya keduanya memiliki peran yang berbeda. Asersi itu lebih untuk memastikan bahwa asumsi yang dibuat di code itu benar atau asumsi yang dibuat oleh kita sebagai programmer. Jadi kondisi yang diperiksa dengan asersi adalah sesuatu yang seharusnya tidak pernah salah jika code ditulis dengan baik. Jika asersi gagal, berarti bisa saja ada bug di code.

Sedangkan kalau eksepsi, lebih untuk menangani error yang memang berpotensi terjadi saat program dijalankan, terutama yang berasal dari input user atau kondisi di luar logika program. Misalnya, dalam fungsi pembagian, kalau user memasukkan nilai nol sebagai atau memberikan tipe data yang tidak sesuai. Kalau case seperti ini sebaiknya ditangani menggunakan eksepsi agar program bisa memberikan respon yang tepat tanpa langsung berhenti.

Dalam kasus fungsi `divide(a, b)`, menurut saya penggunaan eksepsi lebih tepat karena kesalahan yang dicek berkaitan dengan validasi input. Asersi masih bisa digunakan, tetapi bukan sebagai mekanisme utama, karena penggunaannya lebih difokuskan untuk mengecek code, bukan untuk menangani kesalahan dari user.

Kurang lebihnya seperti itu, jadi menurut saya tidak perlu memilih hanya satu pendekatan. Eksepsi sebaiknya digunakan untuk menangani kesalahan yang mungkin terjadi saat program berjalan, sedangkan kalau asersi lebih cocok digunakan sebagai alat bantu untuk menjaga konsistensi logika selama proses coding.