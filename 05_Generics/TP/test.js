const hitung = require('./index'); 

const str = "Bar bar bar";

console.log(
    hitung(str, "semua") // Harusnya 11
);

console.log(
    hitung(str, "huruf") // Harusnya 9
);

hitung(str, "huruf"); // Tidak terjadi apa-apa