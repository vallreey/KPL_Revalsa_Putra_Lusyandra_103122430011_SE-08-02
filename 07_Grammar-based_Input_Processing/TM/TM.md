# TP 07_Grammar-based_Input_Processing

`Revalsa Putra Lusyandra`

`103122430011`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Soal
Tugas pada kesempatan kali ini adalah membuat fungsi yang menguraikan isi robots.txt menjadi POJO (plain old JavaScript object). Empat properti yang perlu diuraikan dijabarkan di bawah berikut.

1. User-agent adalah nama robot perayapnya
2. Allow adalah daftar halaman-halaman yang boleh dirayap
3. Disallow adalah daftar halaman-halaman yang tidak boleh dirayap
4. Sitemap adalah sebuah pranala yang menunjuk pada "denah" situs web (biasanya berformat XML)

## Kode Sumber

Ada di [index.js](./index.js)

## Output
![1.](img1.png)
![2.](img2.png)

## Deskripsi
Function yang saya buat di [index.js](./index.js) bertujuan untuk read isi robots.txt per baris, lalu mengubahnya menjadi object yang terstruktur. Di awal function dilakukan pemecahan teks menjadi array baris menggunakan `split('\n')` lalu menyiapkan object hasil dengan properti agents dan Sitemap. lalu saya membuat variabel currentAgents untuk menyimpan user-agent yang sedang aktif. codenya:
```
function parseRobots(text) {
    const lines = text.split('\n');

    const result = {
        agents: {},
        Sitemap: []
    };

    let currentAgents = [];
```

Setelah itu dilakukan perulangan untuk membaca setiap baris. Di sini saya menggunakan `trim()` supaya spasi tidak mengganggu parsing. Jika baris kosong atau komentar `(diawali #)`, maka saya reset currentAgents karena artinya blok sebelumnya sudah selesai. codenya:
```
    for (let rawLine of lines) {
        let line = rawLine.trim();

        if (line === '' || line.startsWith('#')) {
            currentAgents = [];
            continue;
        }
    }
```

Selanjutnya saya memisahkan key dan value dengan `split(':')`. Karena dalam robots.txt formatnya seperti `User-agent: *`, maka bagian sebelum `:` jadi key dan setelahnya jadi value. Key juga saya ubah ke lowercase supaya tidak sensitif terhadap huruf besar/kecil. codenya:
```
const [key, ...rest] = line.split(':');
if (!key || rest.length === 0) continue;
     
const value = rest.join(':').trim();
const lowerKey = key.toLowerCase();
```

selanjutnya di bagian ini saya menangani `User-agent`. Saat menemukan `user-agent`, lalu saya simpan ke dalam `currentAgents`. Kalau agent tersebut belum ada di result, saya inisialisasi menjadi array kosong untuk Allow dan Disallow. codenya:
```
        if (lowerKey === 'user-agent') {
            const agent = value.toLowerCase();

            if (!result.agents[agent]) {
                result.agents[agent] = {
                    Allow: [],
                    Disallow: []
                };
            }

            currentAgents.push(agent);
        }
```

selanjutnya untuk `Allow`, saya tambahkan path ke semua agent yang sedang aktif. Tapi saya cek dulu kalau valuenya kosong, maka tidak dimasukkan. Ini untuk menghindari array berisi string kosong. codenya:
```
        else if (lowerKey === 'allow') {
            if (value === '') continue;

            for (const agent of currentAgents) {
                result.agents[agent].Allow.push(value);
            }
        }
```

kurang lebihnya sama seperti sebelumnya, saya implementasikan juga untuk Disallow, yaitu memasukkan path ke semua agent aktif. Lagi-lagi saya abaikan kalau kosong supaya hasilnya bersih. codenya :
```
        else if (lowerKey === 'disallow') {
            if (value === '') continue;

            for (const agent of currentAgents) {
                result.agents[agent].Disallow.push(value);
            }
        }
```

Untuk `Sitemap`, karena sifatnya general jadi saya langsung masukkan ke array `Sitemap` di result. codenya:
```
        else if (lowerKey === 'sitemap') {
            if (value !== '') {
                result.Sitemap.push(value);
            }
        }
```

Selain itu, saya juga menangani `Host` sebagai properti tambahan jika ada di file robots.txt. codenya:
```
        else if (lowerKey === 'host') {
            if (value !== '') {
                result.Host = value;
            }
        }
    }
```

jadi intinya function ini diibaratkan seperti konsep sederhana seperti state machine, di mana currentAgents berperan sebagai state aktif. Setiap kali ada User-agent, state berubah, dan setiap Allow atau Disallow akan mengikuti state tersebut sampai ada perubahan atau reset.