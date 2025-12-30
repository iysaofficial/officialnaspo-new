import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function KategoriPage() {
  // Data kategori bisa diubah sesuai tahun
const kategorilist = [
  // { label: "Special Award", href: "https://drive.google.com/file/d/1kH9C26Bt7W4Cl0Zgnea-Gpi61DWbvsmR/view?usp=sharing", target: "_blank" },
  { label: "NASPO DARING", href: "/daftarpemenang/2025/jenjangonline" },
  { label: "NASPO LURING", href: "/daftarpemenang/2025/jenjangoffline" },
];

  return (
    <>
      <Head>
        <title>Kategori | NASPO</title>
        <meta name="description" content="Kategori NASPO" />
      </Head>
      <Navbar />
      <Breadcrumb
        items={[{ label: "Daftar Pemenang 2025" }]}
        title="Daftar Pemenang"
      />
      <section className="winner-content">
        <h2 className="winner-subtitle">Daftar Pemenang</h2>
        <p>Pilih berdasarkan kategori event yang Anda ikuti</p>
        <div className="winner-year-list">
          {kategorilist.map((t) =>
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
