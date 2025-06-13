import Head from "next/head";
import Navigation from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

const tahunList = [
  { label: "2024", href: "/daftar-pemenang/2024" },
  { label: "2023", href: "/daftar-pemenang/2023" },
  { label: "2022", href: "/daftar-pemenang/2022" },
  { label: "2021", href: "/daftar-pemenang/2021" },
  { label: "2020", href: "/daftar-pemenang/2020" },
];

export default function DaftarPemenang() {
  return (
    <>
      <Head>
        <title>Daftar Pemenang | NASPO</title>
        <meta name="description" content="Daftar Pemenang NASPO" />
      </Head>

      <Navigation />
      
      <Breadcrumb items={[{ label: "Daftar Pemenang" }]} title="Daftar Pemenang" />

      <section className="winner-content">
        <h2 className="winner-subtitle">Daftar Pemenang</h2>
        <p>Pilih berdasarkan tahun event yang Anda ikuti</p>
        <div className="winner-year-list">
          {tahunList.map((t) => (
            <a
              key={t.label}
              href={t.href}
              className="winner-year-btn"
            >
              {t.label}
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}