import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

const tahunList = [
  {
    label: "2025",
    href: "/daftarpemenang/2025/kategori"
  },
  {
    label: "2024",
    href: "https://drive.google.com/drive/folders/1qCQkAbcDO9a96suBZcr5LtuOPH8jLsKi?usp=drive_link",
    target: "_blank",
  },
  { label: "2023", href: "/daftarpemenang/2023/kategori" },
  {
    label: "2022",
    href: "https://drive.google.com/file/d/16cT0Qixf86IZPAv6qmnKh1Hb51s1x2Fx/view?usp=sharing",
    target: "_blank",
  },
  {
    label: "2021",
    href: "https://drive.google.com/file/d/1E1HEdRUNaQ5KOixCfCCCeiRkQmZJjobx/view?usp=drive_link",
    target: "_blank",
  },
  {
    label: "2020",
    href: "https://drive.google.com/file/d/1eA7YebN_wfTagG5P0gZB9jrl7CjkNfot/view?usp=drive_link",
    target: "_blank",
  },
];

export default function DaftarPemenang() {
  return (
    <>
      <Head>
        <title>Daftar Pemenang | NASPO</title>
        <meta name="description" content="Daftar Pemenang NASPO" />
      </Head>
      <Navigation />
      <Breadcrumb
        items={[{ label: "Daftar Pemenang" }]}
        title="Daftar Pemenang"
      />
      <section className="winner-content">
        <h2 className="winner-subtitle">Daftar Pemenang</h2>
        <p>Pilih berdasarkan tahun event yang Anda ikuti</p>
        <div className="winner-year-list">
          {tahunList.map((t) =>
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
