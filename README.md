# Cara menjalankan soal

## Soal No 1
pada soal no 1, kita diminta menentukan saklar mana yang terhubung dengan lampu yang mana.
Cukup dibaca saja karena jawaban diberikan dalam bentuk file .txt

# Soal No 2
Pada soal, kita diminta untuk bikin array kedua pas 4 elemen, cuma boleh isi penuh, kosongin, sama mindahin, kalau punya 2 array: satu muat 3, satu muat 5, awalnya kosong.
karena soal ini dijawab dengan typescrip, maka perlu dijalankan via terminal dengan perintah berikut:

```bash
npx ts-node number-2.ts
```

# Soal No 3
Pada soal no 3, kita diminta membuat aplokasi microservice dimana ada 3 Service
- **Order Service**: untuk mengelola menu dan order
- **Payment Service**: untuk mengelola pembayaran
- **Notification Service**: untuk mengirim notifikasi
Untuk menjalankan aplikasi ini, pastikan Anda sudah menginstall Docker dan Docker Compose di sistem Anda.

kemudian, ikuti langkah-langkah berikut:
```bash
docker-compose up --build
```
Setelah itu, Anda dapat mengakses aplikasi melalui URL berikut:
- Order Service: [http://localhost:3000](http://localhost:3000)
- Payment Service: [http://localhost:3001](http://localhost:3001)
- Notification Service: [http://localhost:3002](http://localhost:3002)

# Cara Menggunakan Aplikasi Microservice
## Order Service
Menu Pastikan untuk mengisi menu terlebih dahulu sebelum membuat order.
### Menambahkan Menu
Untuk menambahkan menu, Anda dapat menggunakan endpoint berikut:
```bash
curl -X POST http://localhost:3000/menu -H "Content-Type: application/json" -d '{"name":"Nasi Goreng","price":20000}'
```
### Mendapatkan Daftar Menu
Untuk mendapatkan daftar menu, Anda dapat menggunakan endpoint berikut:
```bash
curl -X GET http://localhost:3000/menu
```
### Membuat Order
Untuk membuat order, Anda dapat menggunakan endpoint berikut:
```bash
curl -X POST http://localhost:3000/order -H "Content-Type: application/json" -d '{"menuIds":[1,2],"customerEmail":"me@asrul.dev"}'
```
### Mendapatkan Status Order
Untuk mendapatkan status order, Anda dapat menggunakan endpoint berikut:
```bash
curl -X GET http://localhost:3000/order/1
```

## Kitchen Service
Untuk Kitchen Service, Anda dapat melihat log dari service ini untuk memantau ada order yang masuk kemudian mengubah status order menjadi "Processed".

## Notification Service
Untuk Notification Service, Anda dapat melihat log dari service ini untuk memantau notifikasi yang dikirimkan setelah order dibuat untuk mengirimkan ke customerEmail.

