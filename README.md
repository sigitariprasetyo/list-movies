# List Movies

Project ini dibuat menggunakan Reactjs dan redux untuk state management.
untuk data diambil dari OMDb API [http://www.omdbapi.com/](http://www.omdbapi.com/).

## Fitur

1. Default list movies display dengan default key search "Batman".
2. Search movie by keyword, aplikasi akan mengambil data dari API setelah user mengetik keyword movie yang akan di cari. Disini juga menggunakan Cancel Token dari Axios yang akan membatalkan request ketika user masih mengetik.
3. Ifinite Scroll, saya menggunakan IntersectionObserver dan useRef untuk menyimpan node movie paling akhir. Dan aplikasi akan mengambil data untuk page selanjutnya ketika posisi window sudah sampai ke node terakhir dari list movie.
4. Popup modal untuk poster movie. User dapat mengklik poster di list movies maka poster akan di tampilkan di dalam modal dengan ukuran asli dari poster tersebut.
5. Page movie detail. User dapat melihat detail movie dengan klik link detail yang ada dibawah title movie didalam card list movie.
6. Autocomplete search box. Search box akan menampilkan sugestions ketika user mengetikan keyword.
7. Testing components. Testing menggunakan @testing-library/react dan @testing-library/jest-dom


## Bagaimana untuk menjalankan aplikasi ini?

1. Clone project ini
### `https://github.com/sigitariprasetyo/list-movies.git`

2. Masuk ke directory list-movies atau buka folder list-movies menggunakan code editor
### `cd list-movies`

3. Install dependencies
### `npm install`

4. Menjalankan aplikasi di local server
### `npm run start`
Perintah ini akan menjalankan aplikasi di local server yaitu di http://localhost:3000

5. Testing
### `npm run test`
