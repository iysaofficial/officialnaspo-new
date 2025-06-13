import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function jenjangonline() {
  // Data kategori bisa diubah sesuai tahun
const jenjanglist = [
  { label: "Sekolah Dasar (SD)", href: "https://drive.google.com/file/d/1EXtcp_OjbuVg3Rp4V-hGSKYsKBWZoga8/view?usp=sharing", target: "_blank" },
  { label: "Sekolah Menengah Pertama (SMP)", href: "https://drive.google.com/file/d/1tcOcONm-ZGwbGHPTLqU3H-5tBd09vHJp/view?usp=sharing", target: "_blank" },
  { label: "Sekolah Menengah Atas (SMA)", href: "https://drive.google.com/file/d/1otSY_NjPQaOWUWtxYPt19OmUxSeIdObr/view?usp=sharing", target: "_blank" },
  { label: "Universitas", href: "https://drive.google.com/file/d/1s_fGRI0gy39KPQdVYykdLXbPOvbMC20f/view?usp=sharing", target: "_blank" },
];

  return (
    <>
      <Head>
        <title>Level Pendidikan | NASPO</title>
        <meta name="description" content="Kategori NASPO" />
      </Head>
      <Navbar />
      <Breadcrumb
        items={[{ label: "Daftar Pemenang 2023" }]}
        title="Daftar Pemenang"
      />
      <section className="winner-content">
        <h2 className="winner-subtitle">Daftar Pemenang</h2>
        <p>Pilih berdasarkan Level Pendidikan di event online yang kamu ikuti</p>
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
