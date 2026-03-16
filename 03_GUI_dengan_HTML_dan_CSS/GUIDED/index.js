const elemenEditor = document.getElementById("editor-kecil"); 
// mengambil elemen textarea dari HTML pakai id "editor-kecil" agar bisa dipakai di JavaScript

const elemenHf = document.getElementById("hf");
// ini untuk menampilkan jumlah seluruh huruf

const elemenHb = document.getElementById("hb");
// ini untuk menampilkan jumlah huruf besar

const elemenHk = document.getElementById("hk");
// ini untuk menampilkan jumlah huruf kecil

function HitungHuruf(event) {
   // const textlength = event.target.value.length;

    const teks = event.target.value;
    // untuk text yang diinput di textarea

    const teksBaru = teks.split(" ");
    // memecah teks menjadi beberapa bagian (array) berdasarkan spasi

    let jumlahHuruf = 0; 
    // variabel untuk menyimpan total huruf

    let jumlahHurufBesar = 0;
    // variabel untuk menghitung huruf kapital

    let jumlahHurufKecil = 0;
    // variabel untuk menghitung huruf kecil

    for (let i = 0; i < teksBaru.length; i++) {
        const kata = teksBaru[i];
        jumlahHuruf += kata.length; 
        // menambahkan panjang setiap kata ke total huruf

        for (let j = 0; j < kata.length; j++) {
            const huruf = kata[j]; 
            // mengambil huruf satu per satu dari kata

            if (huruf >= "A" && huruf <= "Z") { 
                // mengecek apakah huruf termasuk huruf kapital
                jumlahHurufBesar++;

            } else if (huruf >= "a" && huruf <= "z") {
                // mengecek apakah huruf termasuk huruf kecil
                jumlahHurufKecil++;
            }
        }
    }

    elemenHf.textContent = jumlahHuruf;
    elemenHb.textContent = jumlahHurufBesar;
    elemenHk.textContent = jumlahHurufKecil;
    // menampilkan hasil perhitungan huruf ke elemen span di HTML
} 

elemenEditor.addEventListener("input", HitungHuruf);
// event listener ini untuk running fungsi HitungHuruf setiap kali ada perubahan input di textarea, 
// jadi jumlah huruf akan langsung diperbarui saat pengguna mengetik