# REST API dengan Node.js dan Express

Ini adalah proyek REST API sederhana menggunakan Node.js dan Express. API ini mendukung operasi dasar seperti mendapatkan daftar item, mendapatkan item berdasarkan ID, menambahkan item baru, dan menghapus item.

## Persyaratan

- Node.js
- npm (Node Package Manager)
- Heroku CLI (untuk deployment)

## Instalasi

1. **Clone repository ini**:
    ```bash
    git clone https://github.com/DyraDev/Learn-Rest-API
    cd Learn-Rest-API
    ```

2. **Instal dependencies**:
    ```bash
    npm install
    ```

## Menjalankan API Secara Lokal

1. **Jalankan server**:
    ```bash
    npm run start
    ```

2. **Akses API**:
    Buka browser atau Postman dan akses `http://localhost:3000`.


## API Endpoints

### GET /api/items

- **Deskripsi**: Mendapatkan semua item.
- **Request**: `GET /api/items`
- **Response**:
    ```json
    [
      { "id": 1, "name": "Item 1" },
      { "id": 2, "name": "Item 2" }
    ]
    ```

### GET /api/items/:id

- **Deskripsi**: Mendapatkan item berdasarkan ID.
- **Request**: `GET /api/items/:id`
- **Response**:
    ```json
    { "id": 1, "name": "Item 1" }
    ```

### POST /api/items

- **Deskripsi**: Menambahkan item baru.
- **Request**: `POST /api/items`
    - Headers: `Content-Type: application/json`
    - Body:
        ```json
        {
          "name": "Item 3"
        }
        ```
- **Response**:
    ```json
    { "id": 3, "name": "Item 3" }
    ```

### DELETE /api/items/:id

- **Deskripsi**: Menghapus item berdasarkan ID.
- **Request**: `DELETE /api/items/:id`
- **Response**: Status code `204 No Content`

## Deployment ke Heroku

1. **Login ke Heroku**:
    ```bash
    heroku login
    ```

2. **Inisialisasi Git**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

3. **Buat Aplikasi di Heroku**:
    ```bash
    heroku create
    ```

4. **Deploy Aplikasi ke Heroku**:
    ```bash
    git push heroku master
    ```

5. **Buka Aplikasi di Browser**:
    ```bash
    heroku open
    ```

## Menguji API

### Menggunakan Postman

1. **GET Semua Items**:
    - URL: `https://your-app-name.herokuapp.com/api/items`
    - Method: `GET`

2. **GET Item Berdasarkan ID**:
    - URL: `https://your-app-name.herokuapp.com/api/items/1`
    - Method: `GET`

3. **POST Item Baru**:
    - URL: `https://your-app-name.herokuapp.com/api/items`
    - Method: `POST`
    - Headers: `Content-Type: application/json`
    - Body:
        ```json
        {
          "name": "Item 3"
        }
        ```

4. **DELETE Item Berdasarkan ID**:
    - URL: `https://your-app-name.herokuapp.com/api/items/1`
    - Method: `DELETE`

### Menggunakan cURL

1. **GET Semua Items**:
    ```bash
    curl -X GET https://your-app-name.herokuapp.com/api/items
    ```

2. **POST Item Baru**:
    ```bash
    curl -X POST https://your-app-name.herokuapp.com/api/items \
    -H "Content-Type: application/json" \
    -d '{"name": "Item 3"}'
    ```

3. **GET Item Berdasarkan ID**:
    ```bash
    curl -X GET https://your-app-name.herokuapp.com/api/items/1
    ```

4. **DELETE Item Berdasarkan ID**:
    ```bash
    curl -X DELETE https://your-app-name.herokuapp.com/api/items/1
    ```
## Uji API Di Website Saya

Anda dapat menguji API menggunakan halaman sederhana ini. Isi formulir dengan URL endpoint, metode HTTP, dan (opsional) body JSON, lalu klik "Submit" untuk melihat respons.

### [Buka Halaman Uji API](https://dyradev.github.io/Website-Test-API/)

Halaman ini menggunakan HTML, CSS, dan JavaScript untuk mengirimkan request ke API Anda. Pastikan mengganti `https://your-app-name.herokuapp.com` dengan URL aplikasi Heroku Anda yang sebenarnya.

![API Tester](https://dyradev.github.io/Website-Test-API/Screenshot_2024-05-19-14-45-19-56.jpg)

### Catatan

- Pastikan API Anda mengizinkan CORS dari domain ini agar permintaan dapat berhasil.
- Form ini hanya cocok untuk menguji API yang tidak memerlukan otentikasi khusus dari sisi klien.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
