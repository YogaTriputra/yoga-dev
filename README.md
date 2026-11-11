# Yoga Setia Triputra — Portfolio

Website portofolio pribadi Yoga Setia Triputra, mahasiswa Informatika Universitas Amikom Yogyakarta yang berfokus pada frontend development. Dibangun dengan Next.js, React, dan Tailwind CSS dengan identitas visual biru, off-white, dan dark navy.

## Fitur

- Halaman Home dengan profil, teknologi, dan tautan sosial.
- About dengan lima bagian: Introduction, My Journey, What I Do, Tech Stack, dan Beyond Coding.
- Showcase proyek dengan navigasi carousel desktop dan tab pada layar kecil.
- Preview live NeoRain dan tautan ke aplikasi aslinya.
- CV PDF satu halaman dengan foto yang dapat diunduh.
- Contact dengan tautan email, tombol salin alamat, dan form untuk menyusun email.
- Dock navigasi dengan indikator aktif dan animasi spring.
- Transisi halaman dengan variasi panel serta transisi konsisten untuk About 1–5.
- Light/dark mode yang mengikuti preferensi sistem secara default dan menyimpan pilihan pengguna di browser.
- Layout responsif untuk mobile, tablet, dan desktop serta dukungan preferensi reduced motion.

## Tech Stack

| Teknologi | Penggunaan |
| --- | --- |
| Next.js 16 / App Router | Routing dan aplikasi web |
| React 19 | Komponen antarmuka |
| TypeScript | Pemeriksaan tipe |
| Tailwind CSS 4 | Styling responsif dan tema |
| Motion | Animasi dan micro-interactions |
| Lucide React | Ikon antarmuka |
| Geist | Font melalui `next/font` |

## Menjalankan Secara Lokal

Gunakan Node.js 20.9 atau lebih baru dan npm.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser. Perubahan kode akan diperbarui otomatis saat development server berjalan.

## Pemeriksaan dan Production

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
npm run start
```

`npm run start` dijalankan setelah build berhasil. Proyek belum memiliki suite automated test khusus.

## Struktur Proyek

```text
app/
  page.tsx                  Home
  layout.tsx                Layout global dan inisialisasi tema
  template.tsx              Pembungkus transisi halaman
  globals.css               Styling global
  components/
    Navbar.tsx              Dock navigasi
    PageTransition.tsx      Transisi antarhalaman
    ThemeToggle.tsx         Toggle dan pengelolaan tema
    DotField.tsx            Dekorasi interaktif
  about/
    page.tsx                Overview About
    SectionShell.tsx        Layout reusable untuk bagian 3–5
    introduction/           Introduction
    journey/                Pendidikan dan perjalanan belajar
    experience/             What I Do
    tech-stack/             Technologies I Use
    beyond-coding/          Passions and Interests
  project/page.tsx          Showcase proyek
  contact/page.tsx          Kontak dan form email
public/
  foto.jpg                  Foto formal CV
  yoga-setia-triputra-cv.pdf PDF yang digunakan tombol download
```

## Mengubah Konten

- **Profil dan tautan sosial:** `app/page.tsx`.
- **Daftar proyek dan URL live:** `app/project/page.tsx`.
- **Email penerima:** konstanta `email` pada `app/contact/page.tsx`.
- **Judul tab dan metadata:** `app/layout.tsx`.
- **CV:** ganti `public/yoga-setia-triputra-cv.pdf` untuk memperbarui file unduhan; PDF tidak dibuat otomatis dari konten website.
- **Tema:** toggle pada dock, atau tombol floating pada halaman detail About. Pilihan disimpan melalui key `theme` di localStorage.

### Cara Kerja Form Kontak

Form menggunakan `mailto:` untuk membuka aplikasi email pengunjung dengan penerima, subjek, dan pesan yang sudah terisi. Pengunjung tetap harus menekan **Send** di aplikasi email. Form ini tidak mengirim email langsung dari server dan tidak menyimpan pesan.

Pengiriman langsung memerlukan integrasi layanan email atau backend. Implementasi saat ini tidak memerlukan API key maupun environment variable.

### Preview Proyek

Preview NeoRain menggunakan iframe eksternal. Ketersediaan dan interaksinya bergantung pada aplikasi sumber serta kebijakan embedding browser; tautan live tetap disediakan untuk membuka aplikasi secara langsung.

## Deploy ke Vercel

1. Hubungkan akun Vercel dengan GitHub.
2. Import repository [YogaTriputra/yoga-dev](https://github.com/YogaTriputra/yoga-dev).
3. Pilih preset **Next.js**, root directory `./`, dan biarkan pengaturan build default.
4. Klik **Deploy**.
5. Setelah integrasi Git aktif, push ke branch production `main` memicu deployment baru.

Domain dapat dikelola melalui menu **Domains** di dashboard proyek Vercel. Tidak ada environment variable yang wajib untuk fitur saat ini.

## Kontak

- Email: [yogasetiatriputra@gmail.com](mailto:yogasetiatriputra@gmail.com)
- GitHub: [YogaTriputra](https://github.com/YogaTriputra)
- LinkedIn: [Yoga Setia Triputra](https://www.linkedin.com/in/yoga-triputra-2a3345416/)
