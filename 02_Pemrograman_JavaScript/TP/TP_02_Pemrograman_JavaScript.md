# TUGAS PENDAHULUAN 02_Pemrograman_JavaScript

`Revalsa Putra Lusyandra`

`103122430011`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Soal

Kamu sudah menulis fungsi `mulOfArray`. Ujilah dengan input `[2, 0, 26, 28, -2]`, dengan output yang seharusnya adalah `1456`. Jika kamu menemukan bahwa hasilnya berbeda, bisakah kamu memperbaikinya? Jika kamu menemukan bahwa hasilnya sama, bisakah kamu menjelaskan mengapa demikian?

## Kode Sumber
Hasil ada di :
[index.js](index.js)

## Output

![Jawaban.png](/02_Pemrograman_JavaScript/TP/Screenshot%202026-03-03-220515.png)


## Deskripsi
hasilnya sebelum diperbaiki adalah '0', karena ada '0' di bagian inputan dan di code bagian "if (arr[i] >= 0)" berarti akan mengalikan bilangan dari 0 sampai dengan nilai positif seterusnya, jadi untuk '-2' tidak dihitung karena '0 > -2', dan cara memperbaiki agar hasilnya 1456, cukup hapus bagian '=' jadi "if (arr[i] > 0)" :

![sebelum.png](/02_Pemrograman_JavaScript/TP/Screenshot%202026-03-03-220643.png)

yang berarti '0' tidak akan ikut dihitung karena lebih dari (>) bukan lebih dari sama dengan (>=), jadi intinya kalau sudah diganti jadi (>0) dan bukan (>=0) angka 0 di inputan tidak akan ikut dikalikan, dan hanya mengalikan angka yang lebih dari 0, mulai dari 1 dan seterusnya, dan negatif tidak termasuk, karena (negatif < 0)

![sesudah.png](/02_Pemrograman_JavaScript/TP/Screenshot%202026-03-03-221814.png)