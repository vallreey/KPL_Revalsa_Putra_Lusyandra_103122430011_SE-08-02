# TM 14_Clean_Code

`Revalsa Putra Lusyandra`

`103122430011`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Soal
Dari dua kode di bawah ini, mana yang kamu ingin cari masalahnya dan perbaiki di tengah-tengah malam, katakanlah jam 1 malam? Mengapa?

```
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return doSomething(user)
      }
    }
  }
  return null
}
```

```
function processUser(user) {
  if (!isValidCandidate(user)) return null;
  return doSomething(user);
}

function isValidCandidate(user) {
  return user && user.isActive && user.hasPermission;
}
```

## Jawaban
Kalau saya pribadi lebih baik pilih code 2, karena lebih gampang dibaca dan lebih cepat dipahami, apalagi kalau harus cari masalahnya jam 1 malam pas kondisi udah capek capeknya.

Di code 1, pengecekannya harus mengecek satu per satu untuk if nya, apalagi kalau if nya itu lebih banyak dari code 1 ini:
```
if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      return doSomething(user)
    }
  }
}
```
jadi kalau saya lagi ngantuk, kode yang di atas ini lebih rawan bikin bingung karena harus mengikuti alurnya satu per satu. Jadi ketika ada bug, saya harus mikir dulu: “ini masuk kondisi user atau tidak?” atau mungkin "ini masuk ke kondisi yang mana yak?".

Sedangkan di code 2, alurnya lebih langsung:
```
if (!isValidCandidate(user)) return null;
return doSomething(user);
```
Kalau saya pribadi lebih suka code di atas ini karena dari awal sudah jelas kalau user tidak valid langsung berhenti. Kalau valid, baru lanjut menjalankan `doSomething(user)`. Jadi proses membaca kodenya lebih ringan.

Selain itu, validasinya juga dipisahkan ke fungsi sendiri:
```
function isValidCandidate(user) {
  return user && user.isActive && user.hasPermission;
}
```
jadi menurut saya ini lebih enak untuk diotak atik, karena syarat user yang valid sudah dikumpulkan di satu tempat. Jadi kalau nanti ada tambahan kondisi, misalnya user harus sudah verifikasi email, tinggal ubah di fungsi `isValidCandidate()` saja, tidak perlu mengubah alur utama `processUser()` terlalu banyak.

Jadi kurang lebihnya, code 2 lebih nyaman dicari masalahnya dan diperbaiki, karena lebih rapi, lebih singkat, tidak terlalu banyak nested if, dan alurnya lebih mudah dipahami walaupun lagi capek atau ngantuk.