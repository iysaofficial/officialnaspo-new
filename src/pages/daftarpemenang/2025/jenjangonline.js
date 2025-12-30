import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function jenjangonline() {
  // Data kategori bisa diubah sesuai tahun
const jenjanglist = [
  { label: "Sekolah Dasar (SD)", href: "https://drive.google.com/file/d/1KvFiF1FOUzrkQ68WIu0vhpsn-RgqXHzX/view?usp=sharing", target: "_blank" },
  { label: "Sekolah Menengah Pertama (SMP)", href: "https://drive.google.com/file/d/1ByImB984QwTCFxek6_NnimewQZ-lrzFl/view?usp=sharing", target: "_blank" },
  { label: "Sekolah Menengah Atas (SMA)", href: "https://drive.google.com/file/d/1AfnralZGui5BhTxstl7vJZcr1hsylqcq/view?usp=sharing", target: "_blank" },
  { label: "Universitas", href: "https://drive.google.com/file/d/19xCqYZbFivmuaDsnxOCTht8o94owj0yJ/view?usp=sharing", target: "_blank" },
];

  return (
    <>
      <Head>
        <title>Level Pendidikan | NASPO</title>
        <meta name="description" content="Kategori NASPO" />
      </Head>
      <Navbar />
      <Breadcrumb
        items={[{ label: "Daftar Pemenang 2025" }]}
        title="Daftar Pemenang"
      />
      <section className="winner-content">
        <h2 className="winner-subtitle">Daftar Pemenang</h2>
        <p>Pilih berdasarkan Level Pendidikan di event Daring yang kamu ikuti</p>
        <div className="winner-year-list">
           {jenjanglist.map((t) =>
            t.target === "_blank" ? (
              <a
                key={t.label}
                href={t.href}
                className="winner-year-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.label}
              </a>
            ) : (
              <Link href={t.href} key={t.label} legacyBehavior>
                <a className="winner-year-btn">{t.label}</a>
              </Link>
            )
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
