/* Skrip bersama prototipe PKBM Cahaya Ilmu.
   Menyambungkan tombol yang belum punya tautan dan menampilkan pemberitahuan prototipe. */
(function () {
  var isAdmin = document.body.dataset.page === 'admin';

  function toast(msg) {
    var t = document.createElement('div');
    t.textContent = msg;
    t.setAttribute('role', 'status');
    t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#0B2A5B;color:#fff;padding:12px 20px;border-radius:999px;font:600 14px "Plus Jakarta Sans",system-ui,sans-serif;box-shadow:0 12px 32px rgba(11,42,91,.25);z-index:9999;max-width:90vw;text-align:center';
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }
  window.showToast = toast;

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href="#"]');
    if (a) { e.preventDefault(); toast('Tautan ini belum tersedia (prototipe).'); }
  });

  function btnText(b) { return (b.textContent || '').replace(/\s+/g, ' ').trim(); }

  /* ---------- Situs publik ---------- */
  if (!isAdmin) {
    // Tombol pencarian & portal
    document.querySelectorAll('button[aria-label="Pencarian"]').forEach(function (b) {
      b.addEventListener('click', function () { location.href = 'pencarian.html'; });
    });
    document.querySelectorAll('button[aria-label="Portal Warga Belajar"]').forEach(function (b) {
      b.addEventListener('click', function () { location.href = 'admin/login.html'; });
    });

    // Menu cepat (juga menjadi menu navigasi di HP)
    var links = [
      ['Beranda', 'index.html'], ['Tentang Kami', 'tentang.html'], ['Semua Program', 'program.html'],
      ['Paket C (Setara SMA)', 'program-paket-c.html'], ['Berita & Pengumuman', 'berita.html'],
      ['Kontak', 'kontak.html'], ['Daftar Sekarang', 'kontak.html']
    ];
    var panel = document.createElement('div');
    panel.style.cssText = 'display:none;position:absolute;right:16px;top:100%;width:min(320px,calc(100vw - 32px));background:#fff;border:1px solid #E3EAF5;border-radius:20px;box-shadow:0 12px 32px rgba(11,42,91,.14);padding:8px;z-index:60';
    links.forEach(function (l, i) {
      var a = document.createElement('a');
      a.href = l[1]; a.textContent = l[0];
      a.style.cssText = 'display:block;padding:12px 16px;border-radius:12px;font:600 15px "Plus Jakarta Sans",system-ui,sans-serif;color:' + (i === links.length - 1 ? '#fff' : '#0B2A5B') + ';' + (i === links.length - 1 ? 'background:#1D6FF2;text-align:center;margin-top:6px' : '');
      if (i < links.length - 1) {
        a.onmouseover = function () { a.style.background = '#F3F8FF'; };
        a.onmouseout = function () { a.style.background = 'transparent'; };
      }
      panel.appendChild(a);
    });
    var header = document.querySelector('header');
    document.querySelectorAll('button[aria-label="Layanan Cepat"]').forEach(function (b) {
      if (header) { header.style.position = header.style.position || 'fixed'; header.appendChild(panel); }
      b.setAttribute('aria-expanded', 'false');
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = panel.style.display === 'block';
        panel.style.display = open ? 'none' : 'block';
        b.setAttribute('aria-expanded', String(!open));
      });
    });
    document.addEventListener('click', function (e) { if (!panel.contains(e.target)) panel.style.display = 'none'; });

    // Tombol video profil
    document.querySelectorAll('button').forEach(function (b) {
      if (/Lihat Video Profil/.test(btnText(b))) b.addEventListener('click', function () { toast('Video profil belum tersedia (prototipe).'); });
      if (/Kirim Pesan Sekarang/.test(btnText(b))) { /* ditangani formulir halaman */ }
    });
  }

  /* ---------- Dashboard admin ---------- */
  if (isAdmin) {
    document.querySelectorAll('button').forEach(function (b) {
      if (b.hasAttribute('onclick')) return;
      var t = btnText(b);
      if (/Tulis Berita Baru|Tambah Berita Baru/.test(t)) { b.addEventListener('click', function () { location.href = 'berita-editor.html'; }); return; }
      if (t === 'edit' || t === 'edit_note' || t === 'edit_square') { b.addEventListener('click', function () { location.href = 'berita-editor.html'; }); return; }
      if (t === 'visibility') { b.addEventListener('click', function () { window.open('../berita-detail.html', '_blank'); }); return; }
      if (/Simpan|Terbitkan|Ekspor|Ubah ke Draf|Ubah Kategori|Buang Perubahan|Uji Koneksi|Ubah Banner|Pratinjau Posisi|Ganti Gambar/.test(t)) {
        b.addEventListener('click', function () { toast('Prototipe: aksi ini belum tersambung ke database.'); });
      }
    });
  }
})();
