import Head from "next/head";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function Kontak() {
  return (
    <>
      <Head>
        <title>Kontak Kami | NASPO</title>
        <meta name="description" content="Halaman Kontak NASPO" />
      </Head>
      <Navbar />
      <Breadcrumb items={[{ label: "Kontak" }]} title="KONTAK" />
      <section className="kontak-section">
        <div className="kontak-container">
          {/* Left Info */}
          <div className="kontak-info">
            <div className="kontak-card">
              <div className="icon-bg icon-lokasi">
                <span style={{ fontSize: 28, color: "#fff" }}>📍</span>
              </div>
              <div>
                <div className="kontak-card-title">Lokasi Kami</div>
                <div className="kontak-card-desc">
                  Jl. Kemang RT 03 RW 06, Jawa Barat 16519, Indonesia.
                </div>
              </div>
            </div>
            <div className="kontak-card">
              <div className="icon-bg icon-email">
                <span style={{ fontSize: 28, color: "#fff" }}>📧</span>
              </div>
              <div>
                <div className="kontak-card-title">Alamat Email</div>
                <div className="kontak-card-desc">
                  youngscientist.iysa@gmail.com
                  <br />
                  naspoi2aspo.iysa@gmail.com
                </div>
              </div>
            </div>
            <div className="kontak-card">
              <div className="icon-bg icon-telp">
                <span style={{ fontSize: 28, color: "#fff" }}>📞</span>
              </div>
              <div>
                <div className="kontak-card-title">Hubungi Kami</div>
                <div className="kontak-card-desc">0882 1324 8890</div>
              </div>
            </div>
          </div>
          {/* Right Form */}
          <div className="kontak-form">
            <div className="kontak-form-title">Kirimi Kami Pesan</div>
            <div className="kontak-form-subtitle">
              Ada pertanyaan ?<br />
              Mari kita mulai bicara
            </div>
            <form>
              <input type="text" placeholder="Nama Lengkap" />
              <input type="text" placeholder="Nomor Telepon" />
              <input type="email" placeholder="Alamat Email" />
              <input type="text" placeholder="Subyek" />
              <textarea placeholder="Pesan" rows={5} />
              <button type="submit">
                Kirim Pesan &nbsp; <span style={{ fontSize: 18 }}>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
