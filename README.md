# katalog-resto
Project aplikasi web ini bertema katalog restoran. Aplikasi ini guna memenuhi project submission pertama pada kelas Front-End Web Developer Expert di Dicoding Academy. 
Kriteria Submission
Fitur yang harus ada pada aplikasi: 
1.	App Bar (Navigation Bar)
Syarat:
o	Menampilkan nama aplikasi atau brand logo dari aplikasi katalog restoran (tentukan sendiri nama aplikasi atau brand logonya).
o	Terdapat navigation menu:
	Home → mengarah ke root domain.
	Favorite → target URL cukup bernilai “#” (Sebagai placeholder untuk digunakan pada submission selanjutnya).
	About Us → arahkan ke profil LinkedIn/Github/Social Media Anda, atau boleh juga ke personal web/blog.
o	Terdapat fitur navigation drawer yang berfungsi dengan baik bila diakses pada layar seluler.
2.	Hero Element (Jumbotron Element)
Syarat:
o	Menampilkan hero element dengan gambar yang sudah ditentukan, silakan pilih salah satu aset yang disediakan di dalam starter proyek, src → public → images → hero. Gambar yang tidak digunakan, bisa Anda hapus.
o	Gambar hero element yang ditampilkan haruslah full-width atau memenuhi persyaratan sebagai berikut: 
	Tampilkanlah minimal width 1000px pada  viewport width >= 1200px.
	Jika ukuran viewport width < 1200px, maka hero element ditampilkan full-width.
3.	Daftar Restoran
Syarat:
o	Menampilkan daftar restoran berdasarkan data yang sudah disediakan di dalam project starter (src → DATA.json), untuk menampilkannya boleh melalui cara hardcoded di berkas HTML, atau menggunakan DOM manipulation menggunakan JavaScript.
o	Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
4.	Footer
Syarat:
o	Terdapat footer yang ditampilkan di bawah halaman.
o	Terdapat konten teks bebas sesuai dengan kreatifitas Anda. Misalnya, konten copyright yang mencangkup tahun dan nama aplikasi. Contoh: “Copyright © 2020 - Hunger Apps”.
5.	Responsibilitas Tampilan
Syarat:
o	Tampilan web app harus responsif pada seluruh ukuran layar (mobile - tablet - desktop). Utamakan tampilan mobile terlebih dahulu.
o	Gunakan teknik Grid CSS atau Flexbox dalam menyusun layout. Bila terdapat float, submission akan ditolak.
o	Menetapkan ukuran viewport secara dinamis berdasarkan layar device yang digunakan.
6.	Aksesibilitas Website
Syarat:
o	Seluruh fungsionalitas website dapat dilakukan dengan menggunakan keyboard. Contohnya mengakses tombol hamburger button, mengakses tautan yang ada.
o	Menerapkan teknik skip to content untuk melewati focus pada menu navigasi.
o	Terdapat alternative teks pada seluruh gambar yang ditampilkan. Bila hanya gambar tidak memiliki arti apapun, cukup berikan atribut alt dengan nilai kosong. 
o	Dimensi touch target pada elemen yang diinteraksikan dengan touch harus memilliki ukuran minimal 44x44px. Adapun beberapa contoh elemen tersebut ialah button, anchor, input text, dan textarea.
Pastikan juga terdapat jarak antar elemen tersebut supaya dimensi touch target tidak menumpuk.
o	Menggunakan semantic element dalam menyusun struktur dan landmarking HTML.
Perhatian:
•	Dalam mengerjakan submission ini, Anda tidak diperkenankan menggunakan css framework (seperti Bootstrap, Materialize, Tailwind, dll) yang dapat membantu dalam menyusun tampilan yang responsif. Tuliskan kode CSS from scratch, sistem layouting CSS murni saat ini sudah cukup powerful untuk membuat tampilan website responsif.
•	Semua materi dan starter project pada kelas ini masih menggunakan webpack v4. Jika ingin menambahkan dependensi baru kedalam project, maka pastikan dependensi tersebut support dengan webpack v4. Kamu bisa periksa terlebih dahulu changelog dari repository module yang akan diimport lalu install module tersebut sesuai dengan versinya, seperti ini : npm install [nama-module]@[versi].
