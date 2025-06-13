import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function jenjangoffline() {
  // Data kategori bisa diubah sesuai tahun
const jenjanglist = [
  { label: "Sekolah Menengah Pertama (SMP)", href: "https://drive.google.com/file/d/1DN6HjwaM0Rm9A58rVN0X4lPsbLdpd-x0/view?usp=sharing", target: "_blank" },
  { label: "Sekolah Menengah Atas (SMA)", href: "https://drive.google.com/file/d/1KAlkRlSLn330P9C3h6rK5lRtmdvcYTa8/view?usp=sharing", target: "_blank" },
  { label: "Universitas", href: "https://drive.google.com/file/d/1_JjPWYfMbrgciyXzDRZlYfHc-j6i_DYS/view?usp=sharing", target: "_blank" },
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
