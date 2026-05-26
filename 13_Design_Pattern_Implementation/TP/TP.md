# TP 13_Design_Pattern_Implementation

`Revalsa Putra Lusyandra`

`103122430011`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Soal

Bukalah repostori kode tugas besarmu dan carilah satu saja design pattern yang digunakan di dalamnya (boleh design pattern apa saja, akan direviu kasus-per-kasus). Sertakan kodenya di tugas ini dan coba jelaskan desainnya.

## Kode Sumber

Ada di https://github.com/vallreey/TUBES-Ram_May_Cry-BasDat_KPL-SE_08_02/tree/staging

## DeskripsI
Design pattern yang digunakan adalah MVC (Model-View-Controller). Pada kode yang saya sertakan di bawah, digunakan design pattern MVC, yaitu pemisahan program menjadi tiga bagian utama. Model digunakan untuk mengatur data dan relasi database, seperti data kuda, peternakan, lisensi, dan transaksi. Controller digunakan untuk mengatur logika program, misalnya menentukan data kuda yang boleh dilihat oleh admin, peternak, atau pembeli. View digunakan untuk menampilkan data ke halaman web menggunakan Blade.

Jadi dengan pola ini, kode menjadi lebih rapi karena bagian database, proses, dan tampilan tidak dicampur dalam satu file. Misalnya, ketika ingin mengubah tampilan halaman data kuda, cukup mengubah file view. Jika ingin mengubah aturan data yang tampil, cukup mengubah controller. contoh code yang saya ambil dari repo saya :

`Model`
```
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kuda extends Model
{
    use HasFactory;

    protected $table = 'kuda';
    protected $primaryKey = 'id_kuda';

    protected $fillable = [
        'nama_kuda',
        'jenis_kuda',
        'status_jual',
        'harga_buka',
        'id_peternakan',
        'id_ibu',
        'id_ayah',
    ];

    public function peternakan()
    {
        return $this->belongsTo(
            Peternakan::class,
            'id_peternakan',
            'id_peternakan'
        );
    }

    public function ibu()
    {
        return $this->belongsTo(
            Kuda::class,
            'id_ibu',
            'id_kuda'
        );
    }

    public function ayah()
    {
        return $this->belongsTo(
            Kuda::class,
            'id_ayah',
            'id_kuda'
        );
    }

    public function lisensi()
    {
        return $this->hasOne(
            Lisensi::class,
            'id_kuda',
            'id_kuda'
        );
    }

    public function transaksi()
    {
        return $this->hasMany(
            Transaksi::class,
            'id_kuda',
            'id_kuda'
        );
    }
}
```

`View`
```
// resources/views/admin/kuda/index.blade.php
@forelse($kuda as $item)
    <tr>
        <td>{{ $item->nama_kuda }}</td>
        <td>{{ $item->jenis_kuda }}</td>
        <td>{{ $item->peternakan->nama_peternakan ?? '-' }}</td>
        <td>{{ ucfirst($item->status_jual) }}</td>
    </tr>
@empty
    <tr>
        <td colspan="6">Belum ada data kuda</td>
    </tr>
@endforelse
```

`Controller`
```
<?php

namespace App\Http\Controllers;

use App\Models\Kuda;
use Illuminate\Http\Request;

class KudaController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        if ($user->role === 'admin') {
            $kuda = Kuda::with(['peternakan', 'lisensi'])->latest()->get();
        } elseif ($user->role === 'peternak') {
            $kuda = Kuda::with(['peternakan', 'lisensi'])
                ->whereHas('peternakan', function ($q) use ($user) {
                    $q->where('id_user', $user->id_user);
                })
                ->latest()
                ->get();
        } else {
            $kuda = Kuda::with(['peternakan', 'lisensi'])
                ->whereHas('transaksi', function ($q) use ($user) {
                    $q->where('id_pembeli', $user->id_user)
                      ->where('status_transaksi', 'selesai');
                })
                ->latest()
                ->get();
        }

        $page = 'owned';

        return view('admin.kuda.index', compact('kuda', 'page'));
    }

    public function tersedia()
    {
        $kuda = Kuda::with(['peternakan', 'lisensi'])
            ->where('status_jual', 'tersedia')
            ->latest()
            ->get();

        $page = 'tersedia';

        return view('admin.kuda.index', compact('kuda', 'page'));
    }

    public function terjual()
    {
        $kuda = Kuda::with(['peternakan', 'lisensi'])
            ->where('status_jual', 'terjual')
            ->latest()
            ->get();

        $page = 'terjual';

        return view('admin.kuda.index', compact('kuda', 'page'));
    }

    public function breeding()
    {
        $kuda = Kuda::with(['peternakan', 'lisensi'])
            ->where('status_jual', 'breeding')
            ->latest()
            ->get();

        $page = 'breeding';

        return view('admin.kuda.index', compact('kuda', 'page'));
    }

    public function create()
    {
        if (auth()->user()->role === 'pembeli') {
            return redirect()
                ->route('kuda.index')
                ->with('error', 'Pembeli tidak bisa menambahkan kuda karena tidak memiliki peternakan.');
        }

        return view('kuda.create');
    }

    public function store(Request $request)
    {
        $user = auth()->user();

        if ($user->role === 'pembeli') {
            return redirect()
                ->route('kuda.index')
                ->with('error', 'Pembeli tidak bisa menambahkan kuda.');
        }

        $peternakan = \App\Models\Peternakan::where('id_user', $user->id_user)->first();

        if (!$peternakan) {
            return redirect()
                ->route('kuda.index')
                ->with('error', 'Anda belum memiliki peternakan.');
        }

        Kuda::create([
            'nama_kuda'     => $request->nama_kuda,
            'jenis_kuda'    => $request->jenis_kuda,
            'status_jual'   => $request->status_jual,
            'harga_buka'    => $request->harga_buka,
            'id_peternakan' => $peternakan->id_peternakan,
            'id_ibu'        => $request->id_ibu,
            'id_ayah'       => $request->id_ayah,
        ]);

        return redirect()
            ->route('kuda.index')
            ->with('success', 'Data kuda berhasil ditambahkan.');
    }

    public function edit($id)
    {
        $user = auth()->user();

        $kuda = Kuda::with('peternakan')->findOrFail($id);

        if ($user->role === 'pembeli') {
            return redirect()
                ->route('kuda.index')
                ->with('error', 'Pembeli tidak bisa mengedit data kuda.');
        }

        if (
            $user->role === 'peternak'
            && (
                !$kuda->peternakan
                || $kuda->peternakan->id_user !== $user->id_user
                || $kuda->status_jual === 'terjual'
            )
        ) {
            return redirect()
                ->route('kuda.index')
                ->with('error', 'Anda tidak bisa mengedit kuda ini.');
        }

        return view('admin.kuda.edit', compact('kuda'));
    }

    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $kuda = Kuda::with('peternakan')->findOrFail($id);

        if ($user->role === 'pembeli') {
            return redirect()
                ->route('kuda.index')
                ->with('error', 'Pembeli tidak bisa mengubah data kuda.');
        }

        if (
            $user->role === 'peternak'
            && (
                !$kuda->peternakan
                || $kuda->peternakan->id_user !== $user->id_user
                || $kuda->status_jual === 'terjual'
            )
        ) {
            return redirect()
                ->route('kuda.index')
                ->with('error', 'Anda tidak bisa mengubah data kuda ini.');
        }

        $kuda->update($request->all());

        return redirect()
            ->route('kuda.index')
            ->with('success', 'Data kuda berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $user = auth()->user();

        $kuda = Kuda::with('peternakan')->findOrFail($id);

        if ($user->role === 'pembeli') {
            return redirect()
                ->route('kuda.index')
                ->with('error', 'Pembeli tidak bisa menghapus data kuda.');
        }

        if (
            $user->role === 'peternak'
            && (
                !$kuda->peternakan
                || $kuda->peternakan->id_user !== $user->id_user
                || $kuda->status_jual === 'terjual'
            )
        ) {
            return redirect()
                ->route('kuda.index')
                ->with('error', 'Anda tidak bisa menghapus kuda ini.');
        }

        $kuda->delete();

        return redirect()
            ->route('kuda.index')
            ->with('success', 'Data kuda berhasil dihapus.');
    }
}
```