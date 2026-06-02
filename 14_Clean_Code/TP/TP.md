# TP 14_Clean_Code

`Revalsa Putra Lusyandra`

`103122430011`

`S1SE-08-02`

`Dosen pengampu: Yudha Islami Sulistiya`

`Asisten Praktikum: Adhiansyah Ancha & Hamid Khaeruman`

## Soal

Kode ini tampak baik dan bagus, tetapi menyalahi beberapa prinsip kode bersih. Bisakah kamu melakukan refaktorisasi? Dimodifikasi dari amrrwael/Delivery-website-Hits.

Sebagai konteks, fungsi di bawah ini menampilkan rincian pesanan di modal dan jika klik konfirmasi, sistem apa menyimpannya.

```
function fetchOrderDetails(orderId, token) {
    fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            'Authorization': token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch order details');
        }
        return response.json();
    })
    .then(order => {
        // Display order info
        const modal = document.getElementById('orderModal');
        const detailsDiv = modal.querySelector('#orderDetails');
        detailsDiv.innerHTML = '';

        const header = document.createElement('h3');
        header.textContent = `Order ID: ${order.id}`;
        detailsDiv.appendChild(header);

        const status = document.createElement('p');
        status.textContent = `Status: ${order.status}`;
        detailsDiv.appendChild(status);

        // Show modal
        modal.style.display = 'block';

        // Setup close button
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Setup confirm button
        const confirmBtn = modal.querySelector('#confirmOrderBtn');
        if (order.status === 'Delivered') {
            confirmBtn.style.display = 'none';
        } else {
            confirmBtn.addEventListener('click', () => {
                confirmOrder(order.id, token);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
```

## Jawaban
Di sini saya mengubah fungsi utama `fetchOrderDetails()` supaya tidak terlalu panjang. Jadi fungsi ini hanya mengatur alur utama saja, yaitu mengambil data order, menampilkan modal, dan menangani error.

```
async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrderDetails(orderId, token);
        showOrderModal(order, token);
    } catch (error) {
        handleError(error);
    }
}
```

Lalu bagian pengambilan data dari API saya pisahkan ke fungsi `getOrderDetails()`. Jadi kode fetch() tidak bercampur dengan kode untuk menampilkan modal. Saya juga memakai async/await agar alurnya lebih mudah dibaca.

```
async function getOrderDetails(orderId, token) {
    const response = await fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            Authorization: token
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch order details');
    }

    return response.json();
}
```

Kemudian bagian untuk menampilkan modal saya pisahkan ke fungsi `showOrderModal()`. Jadi fungsi ini hanya fokus untuk menyiapkan modal, menghapus isi lama, menampilkan detail order, dan mengatur tombol confirm.

```
function showOrderModal(order, token) {
    const modal = document.getElementById('orderModal');
    const detailsDiv = modal.querySelector('#orderDetails');

    detailsDiv.innerHTML = '';

    renderOrderDetails(detailsDiv, order);
    setupConfirmButton(modal, order, token);

    modal.style.display = 'block';
}
```

Selanjutnya, bagian pembuatan isi detail order saya pisahkan ke fungsi `renderOrderDetails()`. Jadi pembuatan elemen seperti Order ID dan Status tidak ditulis langsung di fungsi utama.

```
function renderOrderDetails(detailsDiv, order) {
    const header = document.createElement('h3');
    header.textContent = `Order ID: ${order.id}`;

    const status = document.createElement('p');
    status.textContent = `Status: ${order.status}`;

    detailsDiv.appendChild(header);
    detailsDiv.appendChild(status);
}
```

Terakhir, bagian tombol confirm saya perbaiki agar event kliknya tidak menumpuk. Sebelumnya memakai `addEventListener()`, jadi kalau modal dibuka berkali-kali, event bisa bertambah terus. Di sini saya ubah menjadi onclick, supaya event lama diganti dengan event baru.

```
function setupConfirmButton(modal, order, token) {
    const confirmBtn = modal.querySelector('#confirmOrderBtn');

    if (order.status === 'Delivered') {
        confirmBtn.style.display = 'none';
        confirmBtn.onclick = null;
        return;
    }

    confirmBtn.style.display = 'inline-block';

    confirmBtn.onclick = () => {
        confirmOrder(order.id, token);
    };
}
```

Jadi secara keseluruhan, kode ini saya buat lebih rapi dengan memisahkan tugas tiap fungsi. Selain itu, bug event listener yang bisa menumpuk juga dikurangi, terutama pada tombol confirm.