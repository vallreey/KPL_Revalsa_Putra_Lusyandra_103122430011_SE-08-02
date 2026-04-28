require('dotenv').config({ quiet: true });

const URL = process.env.BASE_API;

async function fetchKurs() {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("API error");
    return response.json();
}

function formatTanggal(dateStr) {
    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(new Date(dateStr));
}

function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka).replace(/\s/g, '');
}

function formatValuta(angka, kode) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: kode
    }).format(angka);
}

async function run() {
    try {
        const kursData = await fetchKurs();
        const tanggal = formatTanggal(kursData.date);

        const nilaiUji = [25000, 50000, 100000];

        for (let i = 0; i < nilaiUji.length; i++) {
            const idr = nilaiUji[i];
            const hasilCNH = idr * kursData.idr.cnh;
            const hasilEUR = idr * kursData.idr.eur;

            console.log(
                `Kurs ${formatRupiah(idr)} pada ${tanggal} adalah ${formatValuta(hasilCNH, 'CNH')} dan ${formatValuta(hasilEUR, 'EUR')}`
            );
        }
    } catch (err) {
        console.error("Error:", err.message);
    }
}

run();