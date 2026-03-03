hasilnya sebelum diperbaiki adalah '0', karena ada '0' di bagian inputan dan di code bagian "if (arr[i] >= 0)" berarti akan mengalikan bilangan dari 0 sampai dengan nilai positif seterusnya, jadi untuk
'-2' tidak dihitung karena '0 > -2', dan cara memperbaiki agar hasilnya 1456, cukup hapus bagian '=' jadi "if (arr[i] > 0)".

yang berarti '0' tidak akan ikut dihitung karena lebih dari (>) bukan lebih dari sama dengan (>=)

jadi intinya kalau sudah diganti jadi (>0) dan bukan (>=0) angka 0 di inputan tidak akan ikut dikalikan, dan hanya mengalikan angka yang lebih dari 0, mulai dari 1 dan seterusnya, dan negatif tidak termasuk, karena (negatif < 0)

cc : Revalsa Putra Lusyandra
<img src="https://tenor.com/view/low-cortisol-low-cortisol-seiun-sky-uma-musume-gif-10541092392106719335.gif">