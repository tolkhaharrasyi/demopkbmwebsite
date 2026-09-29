# Prompt Google Stitch: Website PKBM + Dashboard Admin

Dipecah dari PRD v0.2. Satu prompt = satu layar, supaya hasil Stitch lebih fokus.

## Cara pakai

1. Buat dulu sistem desainnya memakai file **DESIGN.md** (sudah kubuatkan terpisah). Setelah itu prompt di bawah **tidak perlu mengulang detail warna dan font**, hanya gaya singkat di "Konteks Global".
2. Tempel **Konteks Global** di awal setiap prompt (atau di awal proyek, kalau Stitch mengingatnya).
3. Kerjakan berurutan: **Beranda dulu**, karena itu penentu gaya. Layar lain akan mengikuti.
4. Untuk versi HP, pilih mode Mobile di Stitch lalu jalankan prompt yang sama, atau pakai prompt responsif di Bagian C.
5. Nama lembaga di bawah (**PKBM Cahaya Ilmu**) hanya contoh. Ganti dengan nama aslimu sebelum menempel.

Prompt ditulis dalam bahasa Inggris karena Stitch umumnya lebih akurat, sedangkan **teks yang tampil di layar diminta dalam bahasa Indonesia**.

---

## Konteks Global (tempel di awal setiap prompt)

```
Project: official website for "PKBM Cahaya Ilmu", a community learning center offering equivalency education (Paket A = elementary, Paket B = junior high, Paket C = senior high with IPA/IPS tracks) in Indonesia.
Style: modern, clean, warm, trustworthy. Bright blue primary, deep navy for dark sections and headings, warm yellow accent, soft blue-white background. Large rounded corners, white cards with soft shadows, pill-shaped buttons, small pill labels above section titles, two-color headlines (keyword highlighted in primary blue), circular icon badges in varied colors (yellow, navy, blue), organic blob-shaped photo frames, floating white stat cards over photos, light blue-white gradient hero background.
Language: all visible UI text in Indonesian.
Responsive: must work on mobile, tablet, and desktop. Use the existing design file for colors and typography.
```

---

## A. Situs Publik

### A1. Beranda (Home)

> Tips: kalau Stitch-mu menyediakan unggah gambar, lampirkan screenshot referensi bersama prompt ini agar gayanya lebih mirip.

```
Design the HOME page (desktop, 1440px wide) for the PKBM website. Follow the attached reference image's layout and style closely, but with original content for an Indonesian community learning center.

Sections, top to bottom:

0. Slim announcement bar at the very top (yellow accent, dismissible): "Pendaftaran Peserta Didik Baru Telah Dibuka" with a small link "Info Pendaftaran".

1. Sticky header: logo "PKBM Cahaya Ilmu" on the left; nav in the center (Beranda active in blue, Tentang with dropdown, Program with dropdown, Berita, Kontak); on the right three circular icon buttons: search (solid blue), user (light blue), menu (light blue). No pill button in the header.

2. Hero on a light blue-white gradient background. Left column: small pill label "PENDIDIKAN KESETARAAN"; big two-color headline "Belajar Tanpa Batas, Raih Masa Depan Lebih Cerah" (highlight "Masa Depan Lebih Cerah" in bright blue); short paragraph; a primary pill button with arrow "Daftar Sekarang"; next to it a round yellow play button with the label "Lihat Video Profil" (this is the secondary action, not an outline button). Below: a row of 4 overlapping circular avatar photos with text "500+ Warga Belajar Telah Bergabung". Right column: a photo of adult and teen learners smiling, inside a large rounded blue organic blob frame, with two floating white stat cards: bottom-left (blue icon, "500+", "Warga Belajar") and right side (shield icon, "100%", "Resmi & Terpercaya").

3. Four quick-access cards overlapping the bottom edge of the hero, straddling the boundary between the pale blue hero and the white section below: Paket A, Paket B, Paket C, Pendaftaran. Each card is white with rounded corners and a soft shadow, has a circular icon badge in a different color (yellow, blue, navy, blue), a bold title, and a two-line description. The second card (Paket B) is solid bright blue with white text and a white icon circle.

4. About section on white, two columns. Left: photo of the head of institution with learners inside a yellow organic blob frame, with two floating white stat cards (top-left: blue icon, "500+", "Warga Belajar"; bottom-right: bar chart icon with a small green up arrow, "98%", "Tingkat Kelulusan"). Right: pill label "TENTANG KAMI"; two-color headline "Berkomitmen pada Pendidikan untuk Semua" (highlight "Pendidikan untuk Semua"); short greeting paragraph; two columns "Visi" and "Misi" separated by a thin vertical divider, each with 4 items marked by yellow circular check icons; primary pill button "Selengkapnya" with arrow.

5. Dark navy full-width section: centered small pill label "PROGRAM"; centered two-color headline "Program Pendidikan untuk Setiap Jenjang" (highlight "Setiap Jenjang"); one-line centered subtitle. Below, a 3x2 grid of white rounded cards, each with a circular icon on the left, a bold title, a short description, and a "Selengkapnya" link with arrow: Paket A, Paket B, Paket C IPA, Paket C IPS, Keterampilan, Kursus. Make the top-middle card solid bright blue as emphasis.

6. Latest news on light background: pill label "BERITA", two-color headline, three news cards (image, date, title, 2-line excerpt, "Baca" link), and a "Lihat Semua Berita" button.

7. Contact and location: map placeholder on one side; address, email, phone, and a WhatsApp button on the other.

8. Footer: logo, short description, quick links, contact info, social icons, copyright, and a "back to top" button.

Keep generous whitespace and realistic Indonesian placeholder content.
```

### A2. Tentang Lembaga

```
Design the ABOUT page (desktop) of the PKBM website.

- Compact page header: pill label "TENTANG KAMI", title "Tentang Lembaga", breadcrumb (Beranda / Tentang Lembaga).
- Sub-navigation tabs under the header: Sambutan Kepala Lembaga, Visi & Misi, Identitas Lembaga (show "Sambutan" as active).
- Active content: head-of-institution photo in an organic blob frame beside a long, readable greeting text with a signature line (name and title).
- Below: a "Visi & Misi" block with a large vision card and a list of mission items with check icons.
- Below: an "Identitas Lembaga" card grid with key facts (Nama Lembaga, NPSN, Tahun Berdiri, Akreditasi, Alamat, Kontak) as icon + label + value.
- Footer same as home.

Do not use a large hero. Keep the reading width comfortable.
```

### A3. Program (daftar program)

```
Design the PROGRAMS overview page (desktop).

- Compact page header: pill label "PROGRAM", title "Program Pendidikan Kesetaraan", breadcrumb.
- Short intro paragraph explaining equivalency education.
- Three large program cards in a row: Paket A (setara SD), Paket B (setara SMP), Paket C (setara SMA). Each with icon, level badge, short description, 3 key facts, and button "Lihat Detail". Make Paket C carry a small badge "IPA & IPS".
- A comparison strip below: simple table comparing the three programs (jenjang, usia minimal, lama belajar, ijazah).
- CTA banner at the bottom: "Siap bergabung?" with button "Daftar Sekarang".
- Footer.
```

### A4. Detail Program (Paket C)

```
Design the PROGRAM DETAIL page for "Paket C (setara SMA)" (desktop).

- Compact header with breadcrumb (Beranda / Program / Paket C).
- Left (wide): overview text, tab switch between "IPA" and "IPS" tracks (IPA active), list of subjects as chip tags, learning schedule summary, and an accordion FAQ.
- Right (sticky sidebar card): "Syarat Pendaftaran" checklist, key facts (durasi, jadwal), primary button "Daftar Sekarang", and secondary button "Hubungi via WhatsApp".
- Related programs row (Paket A, Paket B cards) near the bottom.
- Footer.
```

### A5. Berita (daftar)

```
Design the NEWS LIST page (desktop).

- Compact header: pill label "BERITA", title "Berita & Pengumuman", breadcrumb.
- Filter row: category pills (Semua, Pengumuman, Kegiatan, Info Akademik) and a search field.
- One large featured article card on top (image, category pill, date, title, excerpt).
- Grid of 6 news cards (3 columns): image, category pill, date, title, 2-line excerpt.
- Pagination at the bottom (previous, page numbers, next).
- Sidebar or bottom block: "Berita Populer" list.
- Footer.
```

### A6. Detail Berita

```
Design the NEWS DETAIL page (desktop).

- Compact header with breadcrumb (Beranda / Berita / judul).
- Article: category pill, large title, meta row (date, author), wide featured image with rounded corners, readable body text with a subheading, a bullet list, and a quote block.
- Share buttons row (WhatsApp, Facebook, Salin Tautan).
- Right sidebar: "Berita Terbaru" list and a small enrollment CTA card.
- "Berita Lainnya" row of three cards below.
- Footer.
```

### A7. Kontak & Lokasi

```
Design the CONTACT page (desktop).

- Compact header: pill label "KONTAK", title "Hubungi Kami", breadcrumb.
- Row of three info cards with circular icons: Alamat, Telepon / WhatsApp, Email (plus jam layanan).
- Two columns: left a large map placeholder; right a simple message form (Nama, Email/No. HP, Pesan, button "Kirim Pesan").
- Floating WhatsApp button at the bottom right.
- Footer.
```

### A8. Hasil Pencarian

```
Design the SEARCH RESULTS page (desktop).

- Compact header with title "Hasil Pencarian" and a large search field showing the query "pendaftaran paket c".
- Result count text, then a list of result cards mixing news and pages: each with a small type badge (Berita / Halaman), title, snippet with the keyword highlighted, and date.
- Pagination.
- Empty-state variant: friendly illustration, message "Tidak ada hasil ditemukan", and suggested links.
- Footer.
```

---

## B. Dashboard Admin

> Tambahkan di setiap prompt admin: "Admin dashboard uses the same colors, radius, and fonts as the public site, but a simpler, work-focused layout."

### B1. Login

```
Design the ADMIN LOGIN page (desktop).

Centered white card on a soft blue background: logo, title "Masuk ke Dashboard", fields Email and Password (with show/hide icon), a "Ingat saya" checkbox, primary full-width button "Masuk", and a "Lupa password?" link. Add a subtle decorative blob shape. Include an error state (red message "Email atau password salah").
```

### B2. Ringkasan (Dashboard Home)

```
Design the ADMIN DASHBOARD HOME (desktop).

- Left sidebar menu: Ringkasan (active), Berita, Halaman, Program, Media, Pengaturan, Pengguna; logo at top; user profile and logout at the bottom.
- Top bar: page title, search, and user avatar.
- Row of 4 stat cards: Total Berita, Berita Terbit, Draf, Total Media.
- Large primary button card "Tulis Berita Baru" as a quick action, plus quick links (Ubah Banner Pendaftaran, Ubah Sambutan).
- "Berita Terbaru" table (judul, kategori, status badge, tanggal) with edit icons.
- Keep it clean and functional.
```

### B3. Kelola Berita (daftar)

```
Design the ADMIN NEWS LIST page (desktop), with the same sidebar and top bar (Berita active).

- Header row: title "Berita", primary button "+ Tambah Berita".
- Toolbar: search field, filter by status (Semua, Terbit, Draf) and category.
- Data table: checkbox, thumbnail, judul, kategori, penulis, status badge (Terbit green / Draf gray), tanggal terbit, action icons (edit, lihat, hapus).
- Bulk action bar and pagination.
- Delete confirmation modal variant: "Hapus berita ini?" with buttons "Batal" and "Hapus".
```

### B4. Editor Berita

```
Design the ADMIN NEWS EDITOR page (desktop), with sidebar and top bar (Berita active).

- Title field at the top, then a rich text editor with toolbar (heading, bold, italic, list, link, image, quote) and body area.
- Right column cards: "Publikasi" (status Draf/Terbit, tanggal terbit, buttons "Simpan Draf", "Pratinjau", "Terbitkan"), "Kategori" (select), "Gambar Utama" (upload area with preview), "Slug URL" (text field).
- Sticky bottom bar with save actions. Show a success toast "Berita berhasil disimpan".
```

### B5. Kelola Halaman & Program

```
Design the ADMIN PAGES & PROGRAMS editor (desktop), with sidebar (Halaman active).

- Tabs at the top: Sambutan, Visi & Misi, Identitas Lembaga, Paket A, Paket B, Paket C.
- Show the "Sambutan" tab: fields Nama Kepala Lembaga, Jabatan, upload Foto, and a rich text area for the greeting.
- Right card: live mini-preview of how the section looks on the public site, and a button "Simpan Perubahan".
- Also show how the "Paket C" tab looks: description, syarat pendaftaran (repeatable list items with add/remove), mata pelajaran (tag input).
```

### B6. Media

```
Design the ADMIN MEDIA LIBRARY page (desktop), with sidebar (Media active).

- Header: title "Media", primary button "Unggah Gambar".
- Drag-and-drop upload area with file size hint (maks. 2 MB).
- Grid of image thumbnails with file name and size; hover shows copy-link and delete icons; selecting one opens a right-side detail panel (preview, nama file, ukuran, tanggal, tombol "Hapus").
- Search field and pagination.
```

### B7. Pengaturan Situs

```
Design the ADMIN SITE SETTINGS page (desktop), with sidebar (Pengaturan active).

- Sectioned form on cards: "Identitas" (Nama Lembaga, Slogan, Logo upload, Favicon upload), "Kontak" (Alamat, Email, Telepon, WhatsApp, Tautan Peta), "Banner Pendaftaran" (toggle Aktif/Nonaktif, teks banner, teks tombol, tautan), "Statistik Beranda" (four editable number + label pairs), "Media Sosial" (Facebook, Instagram, YouTube).
- Sticky "Simpan Pengaturan" button.
```

### B8. Pengguna

```
Design the ADMIN USERS page (desktop), with sidebar (Pengguna active).

- Header: title "Pengguna", primary button "+ Tambah Pengguna".
- Table: avatar, nama, email, peran badge (Admin / Editor), terakhir login, action icons.
- "Tambah Pengguna" modal: Nama, Email, Password, Peran (select Admin/Editor) with a short description of each role.
- A separate small card for "Ganti Password" (password lama, baru, konfirmasi).
```

---

## C. Versi Responsif (HP & Tablet)

### C1. Beranda versi HP

```
Convert the HOME page to MOBILE (390px wide) using the same content and style.

- Header: logo left, hamburger menu right; show the opened menu as a full-screen overlay with large links and a "Daftar" button.
- Hero stacks: text first, buttons full width, photo below, stat cards smaller and overlapping the photo.
- Quick-access cards become a horizontal scroll or 2x2 grid.
- About, programs, news, contact sections each single column; program cards stacked.
- Sticky bottom bar with two buttons: "WhatsApp" and "Daftar".
- Touch targets at least 44px. No horizontal page scroll.
```

### C2. Halaman dalam versi HP (Berita, Detail Berita, Kontak)

```
Create MOBILE (390px) versions of the NEWS LIST, NEWS DETAIL, and CONTACT pages.

- Compact header with hamburger menu.
- News list: single-column cards, category pills as a horizontally scrollable row, simple prev/next pagination.
- News detail: full-width image, comfortable text size, share buttons row, related news as stacked cards.
- Contact: info cards stacked, map above the form, full-width form fields, floating WhatsApp button.
```

### C3. Dashboard admin versi HP/Tablet

```
Create TABLET (768px) and MOBILE (390px) versions of the ADMIN DASHBOARD HOME and NEWS LIST.

- Sidebar becomes a slide-in drawer opened by a hamburger button in the top bar.
- Stat cards in a 2x2 grid.
- Tables turn into stacked list cards showing title, status badge, and date, with a three-dot action menu.
- Primary action "+ Tambah Berita" becomes a floating button at the bottom right.
```

---

## D. Prompt Perbaikan (opsional, untuk iterasi)

Gunakan setelah layar jadi, satu per satu.

- **Konsistensi:** `Make all cards use the same corner radius, shadow, and spacing as the home page. Keep pill labels and two-color headlines consistent on every section title.`
- **Aksesibilitas:** `Increase contrast of secondary text to meet WCAG AA and make sure body text is at least 16px.`
- **Lebih hangat:** `Make the design feel warmer and more human: use real-looking photos of learners of mixed ages, and soften shadows.`
- **Lebih ringkas:** `Reduce vertical spacing by about 20% and shorten section descriptions, keeping the layout airy.`
- **Teks Indonesia:** `Check that all visible text is in natural Indonesian and no English placeholder text remains.`

---

## Urutan pengerjaan yang disarankan

1. A1 Beranda, lalu C1 Beranda HP (kunci gaya)
2. A3 Program, A4 Detail Program, A2 Tentang
3. A5 Berita, A6 Detail Berita, A7 Kontak, A8 Pencarian, C2
4. B1 Login, B2 Ringkasan, B3 dan B4 (Berita), lalu B5–B8, dan C3
