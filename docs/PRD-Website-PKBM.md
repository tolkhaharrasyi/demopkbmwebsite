# PRD: Website PKBM dengan Dashboard Admin

**Versi:** 0.2 (arah desain ditetapkan) · **Tanggal:** 29 September 2026 · **Status:** Menunggu masukan

---

## 1. Ringkasan

Membangun website resmi untuk lembaga PKBM (Pusat Kegiatan Belajar Masyarakat) berupa sistem CMS buatan sendiri. Website terdiri dari **situs publik** untuk pengunjung dan **dashboard admin** untuk mengelola konten tanpa menyentuh kode. Fungsi mengacu pada website PKBM yang ada (beranda, tentang lembaga, program kesetaraan, berita, kontak), tetapi dengan **desain orisinal, modern, dan responsif** yang mengikuti gaya referensi visual (lihat Bagian 8). Tampilan harus nyaman dibuka di perangkat apa saja: HP, tablet, laptop, hingga layar lebar.

## 2. Tujuan

1. Memberi lembaga citra digital yang profesional, modern, dan terpercaya.
2. Memudahkan calon peserta didik menemukan informasi program dan cara mendaftar.
3. Memungkinkan admin non-teknis memperbarui konten kapan saja.
4. Menjadi kanal resmi berita dan pengumuman lembaga.

**Indikator keberhasilan:**
- Admin bisa menerbitkan berita baru dalam kurang dari 3 menit.
- Halaman utama termuat kurang dari 3 detik di jaringan seluler.
- Skor Lighthouse (Performance, Accessibility, SEO) minimal 85.
- Seluruh konten utama bisa diubah dari dashboard tanpa bantuan developer.

## 3. Pengguna

| Peran | Kebutuhan utama |
|---|---|
| **Calon peserta didik / orang tua** | Memahami program, syarat, dan cara daftar; menghubungi lembaga dengan mudah. Sebagian besar membuka lewat HP. |
| **Peserta didik & alumni** | Membaca pengumuman, jadwal, dan informasi akademik (mis. ujian, ijazah). |
| **Admin / operator lembaga** | Mengelola berita, halaman, program, dan pengaturan situs dengan cepat dan aman. |
| **Kepala lembaga** | Memastikan sambutan, visi misi, dan identitas lembaga tampil benar. |

## 4. Ruang Lingkup

**Termasuk (MVP):**
- Situs publik: Beranda, Tentang Lembaga, Program (Paket A/B/C), Berita, Kontak, Pencarian
- Dashboard admin: login, kelola berita, halaman, program, pengaturan situs, media
- Desain responsif, SEO dasar

**Belum termasuk (fase berikutnya):** formulir pendaftaran online, galeri foto/video, multi-bahasa, notifikasi email/WhatsApp, komentar berita, statistik pengunjung.

## 5. Struktur Situs (Sitemap)

```
Beranda
Tentang Lembaga
 ├─ Sambutan Kepala Lembaga
 ├─ Visi & Misi
 └─ Identitas Lembaga
Program Pendidikan Kesetaraan
 ├─ Paket A (setara SD)
 ├─ Paket B (setara SMP)
 └─ Paket C (setara SMA)
     ├─ IPA
     └─ IPS
Berita
 └─ Detail Berita
Kontak & Lokasi
Pencarian
```

## 6. Kebutuhan Situs Publik

### 6.1 Beranda
Beranda adalah halaman paling ekspresif. Urutan bagian dari atas ke bawah:
1. **Header:** logo, menu navigasi, tombol pencarian, dan tombol CTA "Daftar". Menempel di atas saat digulir.
2. **Hero:** label pil kecil, judul besar dua warna (kata kunci disorot warna utama), paragraf pendek, tombol "Daftar Sekarang" dan "Lihat Program", serta foto dalam bingkai organik dengan 1–2 kartu statistik melayang (mis. jumlah warga belajar, jumlah lulusan).
3. **Banner pengumuman pendaftaran:** dapat diaktifkan atau dinonaktifkan admin.
4. **Kartu akses cepat (4 kartu):** Paket A, Paket B, Paket C, dan Pendaftaran. Kartu menumpuk di batas hero; satu kartu diberi warna penuh sebagai penekanan.
5. **Tentang & sambutan:** foto kepala lembaga dalam bingkai organik, kutipan sambutan, ringkasan Visi dan Misi dengan daftar centang, tombol "Selengkapnya".
6. **Program (bagian gelap):** latar navy dengan kartu putih untuk Paket A, B, C (IPA/IPS), masing-masing dengan tautan "Selengkapnya".
7. **Berita terbaru:** 3–6 kartu artikel.
8. **Lokasi & kontak:** peta, alamat, email, telepon.
9. **Footer:** navigasi cepat, kontak, hak cipta, tombol kembali ke atas.

### 6.2 Halaman lain
- **Tentang Lembaga:** tiga subhalaman berisi teks dan gambar yang dapat diedit admin.
- **Semua halaman dalam** memakai header halaman yang ringkas (judul, label pil, breadcrumb), bukan hero besar.
- **Program:** halaman per paket berisi deskripsi, jenjang, syarat pendaftaran, dan mata pelajaran; Paket C memiliki pilihan peminatan IPA/IPS.
- **Berita:** daftar dengan paginasi dan kategori; halaman detail memuat judul, tanggal, gambar utama, isi, dan tombol bagikan.
- **Kontak:** alamat, email, telepon (tautan langsung telepon/WhatsApp di HP), peta.
- **Pencarian:** mencari berita dan halaman berdasarkan kata kunci.

## 7. Kebutuhan Dashboard Admin

| Modul | Fitur |
|---|---|
| **Autentikasi** | Login email + password, logout, ganti password, lupa password, sesi otomatis berakhir |
| **Ringkasan** | Jumlah berita, draf terakhir, pintasan "Tulis Berita" |
| **Berita** | Tambah/ubah/hapus, editor teks kaya (heading, daftar, tautan, gambar), gambar utama, kategori, status Draf/Terbit, atur tanggal terbit, pencarian dan filter |
| **Halaman** | Ubah sambutan, visi misi, identitas lembaga |
| **Program** | Ubah deskripsi, syarat, dan mata pelajaran Paket A/B/C |
| **Media** | Unggah, lihat, dan hapus gambar; batas ukuran dan kompresi otomatis |
| **Pengaturan situs** | Nama lembaga, slogan, logo, favicon, alamat, email, telepon, tautan peta, teks dan status banner pendaftaran, tautan media sosial |
| **Pengguna** | Kelola akun admin dengan peran **Admin** (semua akses) dan **Editor** (hanya berita) |

**Aturan umum dashboard:** konfirmasi sebelum menghapus, pesan sukses/gagal yang jelas, pratinjau sebelum terbit, dan tampilan nyaman di tablet.

## 8. Arahan Desain

**Karakter:** modern, bersih, hangat, dan terpercaya. Referensi visual: landing page bergaya "SecureLife" (biru cerah, navy, kuning aksen, kartu membulat). Referensi dipakai sebagai **gaya**, bukan untuk ditiru persis; seluruh aset, teks, dan tata letak dibuat orisinal.

### 8.1 Prinsip
1. **Responsif di mana saja:** mobile-first, lalu diperluas ke tablet, laptop, dan layar lebar.
2. **Satu bahasa desain:** semua halaman dirakit dari komponen yang sama sehingga terasa satu keluarga.
3. **Jelas sebelum indah:** info pendaftaran dan kontak dapat ditemukan maksimal 2 klik.
4. **Ruang napas:** whitespace lapang, satu ide per bagian.

### 8.2 Gaya visual
- **Palet (usulan):** biru cerah sebagai warna utama, navy tua untuk bagian gelap dan judul, kuning hangat sebagai aksen, latar putih kebiruan lembut. Nilai warna final menyesuaikan logo lembaga.
- **Bentuk:** sudut membulat besar (kartu, gambar), tombol berbentuk pil, bayangan halus dan lembut.
- **Label pil:** label kecil di atas setiap judul bagian (mis. "TENTANG KAMI", "PROGRAM").
- **Judul dua warna:** kata kunci disorot dengan warna utama.
- **Foto:** dalam bingkai organik (blob) berwarna, dengan kartu statistik atau lencana melayang. Foto asli kegiatan lembaga diutamakan; tersedia slot foto yang dapat diganti dari dashboard.
- **Ikon:** satu set ikon garis atau isian yang konsisten, di dalam lingkaran berwarna.
- **Kartu:** putih, sudut membulat, bayangan tipis; kartu penekanan berwarna biru penuh.
- **Bagian gelap:** latar navy dengan kartu putih untuk daftar program.
- **Tipografi:** sans-serif geometris yang bersih dan mendukung teks Indonesia; ukuran isi minimal 16px; hierarki jelas (judul tebal, isi ringan).
- **Gerak:** animasi halus seperlunya (kartu muncul saat digulir, hover lembut) dan menghormati pengaturan "kurangi gerakan".

### 8.3 Perilaku responsif

| Perangkat | Lebar | Perilaku utama |
|---|---|---|
| **HP** | 320–767px | Menu hamburger; hero menumpuk (teks di atas, foto di bawah); kartu 1 kolom; tombol lebar penuh; tombol telepon/WhatsApp mudah diketuk (target sentuh ≥ 44px) |
| **Tablet** | 768–1199px | Kartu 2 kolom; menu bisa ringkas; hero mulai berdampingan |
| **Laptop / desktop** | ≥ 1200px | Tata letak penuh dua kolom, kartu 3–4 kolom, menu horizontal |
| **Layar lebar** | ≥ 1600px | Konten dibatasi lebar maksimum agar tetap nyaman dibaca |

Syarat tambahan: tidak ada gulir horizontal di lebar berapa pun, teks tidak terpotong, gambar menyesuaikan lebar, dan diuji pada orientasi tegak dan mendatar.

### 8.4 Komponen (pustaka bersama)
Header + navigasi (menempel, hamburger di HP), tombol (utama, sekunder, ikon), label pil, kartu fitur, kartu program, kartu berita, kartu statistik melayang, banner pengumuman, daftar centang, header halaman + breadcrumb, paginasi, formulir, peta, footer.

### 8.5 Dashboard
Tampilan bersih dan fungsional, memakai palet dan bentuk yang sama agar serasi dengan situs publik. Menu samping (menjadi laci di HP/tablet), formulir sederhana, mengutamakan kecepatan kerja.

## 9. Kebutuhan Data

| Entitas | Kolom utama |
|---|---|
| **users** | id, nama, email, password (di-hash), peran, dibuat |
| **posts** | id, judul, slug, isi, gambar utama, kategori, status, tanggal terbit, penulis |
| **pages** | id, slug, judul, isi (sambutan, visi misi, identitas) |
| **programs** | id, paket (A/B/C), judul, deskripsi, syarat, mata pelajaran |
| **media** | id, nama file, path, ukuran, diunggah oleh |
| **settings** | kunci–nilai (nama lembaga, slogan, alamat, kontak, banner, dll.) |

## 10. Kebutuhan Non-Fungsional

- **Performa:** gambar dikompresi dan dimuat malas (lazy load); halaman utama < 3 detik di 4G.
- **Keamanan:** password di-hash, proteksi CSRF dan XSS, validasi input dan unggahan file, HTTPS, batas percobaan login.
- **SEO:** judul dan meta deskripsi per halaman, URL ramah (slug), sitemap.xml, Open Graph untuk berbagi.
- **Aksesibilitas:** teks alternatif gambar, navigasi keyboard, kontras memadai.
- **Kompatibilitas & responsif:** dua versi terbaru Chrome, Safari, Firefox, Edge; Android dan iOS; layar 320px hingga 1920px.
- **Perawatan:** pencadangan database berkala, kode terdokumentasi.

## 11. Asumsi & Ketergantungan

- Lembaga menyediakan logo, foto, teks sambutan, visi misi, dan identitas.
- Domain dan hosting tersedia. Pilihan teknologi (PHP + MySQL atau Node.js) menunggu keputusan.
- Konten awal (berita lama) dimigrasi manual atau ditulis ulang.

## 12. Tahapan Kerja (Usulan)

| Tahap | Isi |
|---|---|
| **1. Desain** | Palet dan tipografi final, pustaka komponen, desain beranda, lalu halaman dalam dan dashboard (semua responsif) |
| **2. Fondasi** | Setup proyek, database, autentikasi |
| **3. Dashboard** | Modul berita, halaman, program, media, pengaturan |
| **4. Situs publik** | Implementasi desain, ambil data dari database |
| **5. Uji & rilis** | Uji perangkat, keamanan, performa; deploy; pelatihan singkat admin |

## 13. Pertanyaan Terbuka

1. Teknologi dan hosting apa yang akan dipakai?
2. Apakah sudah ada logo dan warna identitas lembaga? Jika belum, palet biru–navy–kuning di atas dipakai sementara.
3. Apakah situs ini untuk satu lembaga saja, atau nantinya untuk banyak lembaga?
4. Apakah perlu formulir pendaftaran online pada fase awal?
5. Siapa saja yang akan memakai dashboard, dan berapa orang?
6. Apakah tersedia foto asli kegiatan lembaga, dan data statistik apa yang ingin ditampilkan (warga belajar, lulusan, tutor)?
