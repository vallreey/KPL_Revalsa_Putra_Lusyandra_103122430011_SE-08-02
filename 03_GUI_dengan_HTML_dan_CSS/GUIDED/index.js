const elemenEditor = document.getElementById("editor-kecil"); 
// mengambil textarea dari HTML supaya bisa digunakan di JavaScript

const elemenHf = document.getElementById("hf"); 
// span untuk menampilkan jumlah huruf total

const elemenHb = document.getElementById("hb"); 
// span untuk menampilkan jumlah huruf besar

const elemenHk = document.getElementById("hk"); 
// span untuk menampilkan jumlah huruf kecil

const tombolCek = document.getElementById("cek-teks"); 
// tombol untuk menjalankan pengecekan teks

const popup = document.getElementById("popup"); 
// elemen popup

const tombolTutup = document.getElementById("tutup"); 
// tombol untuk menutup popup


function HitungHuruf(){

    const teks = elemenEditor.value;
    // mengambil teks yang diketik user

    const teksBaru = teks.split(" ");
    // memecah teks berdasarkan spasi menjadi array kata

    let jumlahHuruf = 0;
    let jumlahHurufBesar = 0;
    let jumlahHurufKecil = 0;

    for(let i = 0; i < teksBaru.length; i++){

        const kata = teksBaru[i];
        jumlahHuruf += kata.length;
        // menambahkan panjang setiap kata ke total huruf

        for(let j = 0; j < kata.length; j++){

            const huruf = kata[j];

            if(huruf >= "A" && huruf <= "Z"){
                // jika huruf kapital
                jumlahHurufBesar++;

            }else if(huruf >= "a" && huruf <= "z"){
                // jika huruf kecil
                jumlahHurufKecil++;
            }
        }
    }

    elemenHf.textContent = jumlahHuruf;
    elemenHb.textContent = jumlahHurufBesar;
    elemenHk.textContent = jumlahHurufKecil;
    // menampilkan hasil perhitungan ke HTML
}


tombolCek.addEventListener("click", function(){

    HitungHuruf();
    // menjalankan fungsi hitung huruf saat tombol diklik

    if(elemenEditor.value.trim() !== ""){
        // jika textarea tidak kosong maka popup muncul
        popup.style.display = "flex";
    }

});


tombolTutup.addEventListener("click", function(){
    // menutup popup ketika tombol tutup ditekan
    popup.style.display = "none";
});