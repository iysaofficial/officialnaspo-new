import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Gelembung "Proses Kurasi" IYSA — kabar kemajuan pengajuan kurasi
            ajang ke Puspresnas. Dikelola dari dasbor IYSA; berkas ini tidak perlu
            diubah lagi saat tahunnya berganti, dan gelembungnya tidak muncul sama
            sekali selama belum ada langkah yang dicatat. <script> biasa, bukan
            next/script: pemuatnya membaca atributnya lewat document.currentScript. */}
        <script
          src="https://api-dashboard.iysa.or.id/embed/kurasi.js"
          data-iysa-kurasi="naspo"
          defer
        />
      </body>
    </Html>
  );
}
