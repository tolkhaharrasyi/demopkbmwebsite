# DESIGN.md: PKBM Cahaya Ilmu

Sistem desain untuk website PKBM (situs publik + dashboard admin). Gaya: modern, bersih, hangat, dan terpercaya. Nama lembaga hanya contoh dan bisa diganti.

## 1. Brand & Nuansa

- **Kepribadian:** ramah, terpercaya, membangkitkan semangat belajar. Tidak kaku seperti situs pemerintah, tidak ramai.
- **Kesan visual:** ruang lapang, sudut membulat besar, warna cerah yang bersih, foto orang tersenyum.
- **Bahasa antarmuka:** Bahasa Indonesia, nada sopan dan sederhana.

## 2. Warna

### Warna utama
| Nama | Hex | Pemakaian |
|---|---|---|
| Primary Blue | `#1D6FF2` | Tombol utama, tautan, judul yang disorot, ikon aktif |
| Primary Blue Dark | `#1657C4` | Hover/pressed tombol utama |
| Navy | `#0B2A5B` | Judul, bagian gelap (section navy), footer |
| Navy Deep | `#081E42` | Latar bagian gelap yang lebih pekat, sidebar admin |
| Accent Yellow | `#FFB400` | Aksen: tombol play, ikon centang, bingkai blob foto, banner pengumuman |
| Accent Yellow Soft | `#FFF3CC` | Latar lembut untuk sorotan |

### Netral
| Nama | Hex | Pemakaian |
|---|---|---|
| Background | `#FFFFFF` | Latar halaman utama |
| Background Tint | `#F3F8FF` | Latar hero, bagian selang-seling (gradien putih ke biru muda) |
| Surface | `#FFFFFF` | Kartu, modal |
| Border | `#E3EAF5` | Garis tipis kartu, tabel, input |
| Text Primary | `#0B2A5B` | Judul dan teks penting |
| Text Body | `#3B4A66` | Paragraf |
| Text Muted | `#5B6B85` | Keterangan, tanggal, placeholder |
| Text on Dark | `#FFFFFF` | Teks di atas navy atau biru penuh |

### Status
| Nama | Hex | Pemakaian |
|---|---|---|
| Success | `#16A34A` | Berita terbit, panah naik, notifikasi sukses |
| Warning | `#F59E0B` | Peringatan |
| Danger | `#DC2626` | Error, tombol hapus |
| Info | `#1D6FF2` | Informasi |

### Aturan warna
- Kontras teks minimal WCAG AA (4.5:1 untuk teks biasa). Teks putih boleh di atas Primary Blue dan Navy; teks navy di atas Accent Yellow.
- Satu kartu dalam satu deret boleh diberi warna **Primary Blue penuh** sebagai penekanan.
- Gradien hero: dari `#FFFFFF` ke `#F3F8FF`, sangat halus.
- Jangan memakai lebih dari satu warna aksen di satu bagian.

## 3. Tipografi

- **Judul (heading):** *Plus Jakarta Sans*, bobot 700–800
- **Isi (body):** *Plus Jakarta Sans* atau *Inter*, bobot 400–500
- Cadangan: `system-ui, sans-serif`

| Gaya | Ukuran desktop | Ukuran HP | Bobot | Tinggi baris |
|---|---|---|---|---|
| Display (judul hero) | 56px | 36px | 800 | 1.15 |
| H1 (judul halaman) | 44px | 32px | 800 | 1.2 |
| H2 (judul bagian) | 36px | 28px | 700 | 1.25 |
| H3 (judul kartu) | 20px | 18px | 700 | 1.3 |
| Body besar | 18px | 16px | 400 | 1.7 |
| Body | 16px | 16px | 400 | 1.7 |
| Keterangan | 14px | 14px | 500 | 1.5 |
| Label pil | 12px | 12px | 700 | 1, huruf kapital, jarak huruf 0.08em |

**Judul dua warna:** kata kunci judul diberi warna Primary Blue, sisanya Navy.

## 4. Bentuk, Jarak, Bayangan

- **Radius:** kartu 20px · gambar 24px · bingkai foto blob 32–48px · tombol dan label pil 999px · input 12px.
- **Jarak (skala 4px):** 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Jarak antarbagian:** 96px desktop, 64px HP.
- **Lebar konten maksimum:** 1200px, tengah, margin samping 24px (HP: 16px).
- **Bayangan kartu:** `0 8px 24px rgba(11, 42, 91, 0.08)`
- **Bayangan melayang (kartu statistik):** `0 12px 32px rgba(11, 42, 91, 0.14)`

## 5. Komponen

### Tombol
- **Utama:** latar Primary Blue, teks putih, bentuk pil, tinggi 48px, ikon panah kanan opsional. Hover: Primary Blue Dark.
- **Sekunder:** garis Primary Blue 1.5px, teks Primary Blue, bentuk pil.
- **Play:** lingkaran kuning 48px berisi ikon segitiga putih, diikuti label teks navy.
- **Ikon bulat:** lingkaran 44px; versi solid biru (untuk pencarian) dan versi biru muda `#EAF2FF`.
- **Bahaya:** latar Danger, teks putih.
- Area sentuh minimal 44px.

### Label pil (pill label)
Pil kecil berlatar `#EAF2FF`, teks Primary Blue, huruf kapital 12px, di atas setiap judul bagian.

### Kartu
Putih, radius 20px, padding 24px, garis 1px Border, bayangan kartu. Kartu penekanan: latar Primary Blue, teks putih, lingkaran ikon putih.

### Lencana ikon
Lingkaran 48–56px dengan ikon di tengah. Warna latar bervariasi: kuning, biru, navy, atau putih (di atas kartu biru).

### Bingkai foto organik (blob)
Bentuk squircle/blob besar berwarna biru atau kuning di belakang foto; foto orang boleh sedikit keluar dari bingkai.

### Kartu statistik melayang
Kartu putih kecil, radius 16px, bayangan melayang; berisi ikon bulat, angka besar (bobot 800), dan keterangan kecil. Diletakkan menimpa sudut foto.

### Daftar centang
Ikon lingkaran kuning dengan tanda centang putih di kiri setiap butir, teks Body.

### Header (situs publik)
Menempel di atas, putih, tinggi 72px. Logo kiri, menu tengah (item aktif berwarna Primary Blue), tiga tombol ikon bulat di kanan (cari, pengguna, menu). Di HP: logo + hamburger; menu terbuka sebagai overlay layar penuh.

### Banner pengumuman
Bar tipis kuning di paling atas halaman, teks navy, tautan kecil, tombol tutup.

### Bagian gelap (section navy)
Latar Navy; label pil dan judul rata tengah; kartu putih dalam grid 3×2 dengan ikon di kiri, judul, deskripsi, dan tautan "Selengkapnya →". Satu kartu penekanan berwarna biru penuh.

### Formulir
Input tinggi 48px, radius 12px, garis Border; fokus: garis Primary Blue 2px. Label di atas input, pesan error merah di bawah input.

### Tabel (dashboard)
Baris 56px, garis pemisah tipis, header tabel latar `#F3F8FF`, lencana status: Terbit (hijau muda), Draf (abu-abu), Ditolak (merah muda).

### Modal & notifikasi
Modal putih radius 20px di atas lapisan gelap transparan; notifikasi (toast) muncul kanan atas, ikon status di kiri.

### Footer
Latar Navy Deep, teks putih dan biru muda, tombol "kembali ke atas" bulat di kanan bawah.

## 6. Dashboard Admin

Memakai warna, radius, dan huruf yang sama dengan situs publik, tetapi tata letak lebih ringkas:
- **Sidebar:** lebar 260px, latar Navy Deep, item aktif berlatar Primary Blue; di tablet/HP menjadi laci geser.
- **Bilah atas:** putih, judul halaman, pencarian, avatar pengguna.
- **Area konten:** latar `#F3F8FF`, kartu putih.
- **Tabel di HP:** berubah jadi kartu daftar dengan menu tiga titik.

## 7. Tata Letak & Responsif

| Perangkat | Lebar | Aturan |
|---|---|---|
| HP | 320–767px | 1 kolom, hamburger, tombol lebar penuh, hero menumpuk (teks di atas, foto di bawah), bilah bawah tetap berisi tombol WhatsApp dan Daftar |
| Tablet | 768–1199px | 2 kolom, hero mulai berdampingan |
| Desktop | ≥ 1200px | 2–4 kolom, menu horizontal |
| Layar lebar | ≥ 1600px | Konten dibatasi 1200px |

Tidak boleh ada gulir horizontal di lebar berapa pun.

## 8. Foto & Ikon

- **Foto:** orang sungguhan yang tersenyum, berbagai usia (remaja dan dewasa), suasana belajar; hangat dan terang. Hindari foto gelap atau terlalu formal.
- **Ikon:** satu set konsisten (garis atau isian, tebal seragam), di dalam lingkaran berwarna.
- **Ilustrasi:** minimal, hanya untuk kondisi kosong (empty state).

## 9. Gerak

Halus dan seperlunya: kartu muncul perlahan saat digulir (200–300ms), hover kartu naik 4px, tombol berubah warna lembut. Hormati pengaturan "kurangi gerakan".

## 10. Aksesibilitas

- Kontras minimal WCAG AA.
- Teks isi minimal 16px.
- Setiap gambar punya teks alternatif.
- Fokus keyboard terlihat jelas (garis Primary Blue 2px).
- Jangan mengandalkan warna saja untuk menyampaikan status; sertakan teks atau ikon.

## 11. Yang Perlu Dihindari

- Gradien mencolok, bayangan tebal, dan sudut tajam.
- Lebih dari satu warna aksen di satu bagian.
- Teks abu-abu pucat di atas latar terang.
- Paragraf panjang tanpa jeda atau subjudul.
- Foto stok yang terasa generik dan tidak menggambarkan lembaga.
