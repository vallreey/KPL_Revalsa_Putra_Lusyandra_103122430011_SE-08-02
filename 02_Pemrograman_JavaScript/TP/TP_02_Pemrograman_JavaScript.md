hasilnya sebelum diperbaiki adalah '0', karena ada '0' dan di bagian "if (arr[i] >= 0)" berarti akan mengalikan bilangan dari 0 sampai dengan nilai positif seterusnya, jadi untuk
'-2' tidak dihitung karena '0 > -2', dan cara memperbaiki agar hasilnya 1456, cukup hapus bagian '=' jadi "if (arr[i] > 0)".

yang berarti '0' tidak akan ikut dihitung karena lebih dari (>) bukan lebih dari sama dengan (>=)