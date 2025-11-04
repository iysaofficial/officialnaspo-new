import Image from "next/image";
import Link from "next/link";

export default function MainHero() {
  return (
    <>
      <section className="main-hero">
        <div className="main-hero-bgpattern" />
        <div className="main-hero-container">
          <div className="main-hero-row">
            <div className="main-hero-col">
              <h1 className="main-hero-title">TUTUTP PENDAFTARAN</h1>
              <h1 className="main-hero-title">NASPO 2025</h1>
              <div className="main-hero-btns">
                <a className="main-hero-btn">
                  Tutup Pendaftaran&nbsp; <span aria-hidden>→</span>
                </a>
                <a href="https://drive.google.com/file/d/1WYabsi1LRuKvcQ5bwTSHD980ErWzfucT/view?usp=sharing" target="_blank" className="main-hero-btn">
                  Buku Panduan 2025 &nbsp; <span aria-hidden>→</span>
                </a>
                <a href="https://drive.google.com/file/d/1xhm1O3RwZKEj4WFhLZHvOmqx4aJXwURB/view?usp=sharing" target="_blank" className="main-hero-btn">
                  Trip & Tour Package 2025 &nbsp; <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <div className="main-hero-img-col">
              <Image
                src="/images/background/bg-main.png"
                alt="Hero Illustration"
                width={350}
                height={300}
                priority
                className="main-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="main-hero-goals">
        <div className="main-hero-goals-container">
          <div className="goals-card">
            {/* Tujuan Pertama */}
            <div className="goal-item">
              <div className="goal-icon">
                {/* Ikon Target */}
                <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" stroke="#fff" strokeWidth="3" />
                  <circle cx="32" cy="32" r="14" stroke="#fff" strokeWidth="3" />
                  <circle cx="32" cy="32" r="6" stroke="#fff" strokeWidth="3" />
                  <path d="M32 18v-8M32 46v8M18 32h-8M46 32h8" stroke="#fff" strokeWidth="3" />
                  <path d="M32 32l14-14" stroke="#fff" strokeWidth="3" />
                  <path d="M46 18l4-8-8 4" stroke="#fff" strokeWidth="3" />
                </svg>
              </div>
              <div>
                <h3 className="goal-title">Tujuan Pertama</h3>
                <p className="goal-desc">
                  Menantang para siswa/mahasiswa Indonesia untuk membuat sebuah karya yang bisa diaplikasikan dan bermanfaat secara langsung pada masyarakat.
                </p>
              </div>
            </div>
            {/* Divider */}
            <div className="goal-divider" />
            {/* Tujuan Kedua */}
            <div className="goal-item">
              <div className="goal-icon">
                {/* Ikon Grafik */}
                <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
                  <rect x="12" y="44" width="8" height="8" stroke="#fff" strokeWidth="3" />
                  <rect x="28" y="36" width="8" height="16" stroke="#fff" strokeWidth="3" />
                  <rect x="44" y="28" width="8" height="24" stroke="#fff" strokeWidth="3" />
                  <path d="M12 52l16-16 16-8 8 8" stroke="#fff" strokeWidth="3" />
                </svg>
              </div>
              <div>
                <h3 className="goal-title">Tujuan Kedua</h3>
                <p className="goal-desc">
                  Mengajak para siswa/mahasiswa Indonesia untuk lebih peka terhadap permasalahan di lingkungan masing-masing dan mencari solusinya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
