/**
 * Buatlah sebuah array berisi 3 minuman favorit kalian dan simpan dalam variabel
 * bernama listMinuman. setelah itu, ubah 2 element pertama menggunakan notasi kurung dan penugasan
 * terakhir, tambahkan minuman baru di bagian depan array.
 */

const listMinuman = ["Es Teh", "Kopi Susu", "Es Kelapa Muda"];

listMinuman[0] = "Thai Tea";
listMinuman[1] = "Dawet Ayu";
listMinuman.unshift ("Es Campur");
console.log(listMinuman); 