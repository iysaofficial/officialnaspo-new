import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-illustration-col">
          <Image
            src="/images/background/docs.jpg"
            alt="About NASPO"
            className="about-illustration-img"
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="about-text-col">
          <h2 className="about-title">
            <span className="about-title-underline">Pendahuluan</span>
          </h2>
          <div className="about-subtitle">
            <span className="about-subtitle-highlight">
              NATIONAL APPLIED SCIENCE PROJECT OLYMPIAD
            </span>
          </div>
          <div className="about-desc">
            <p>
              Perubahan dunia saat ini terjadi dengan begitu cepat. Perubahan
              ini, memberikan berbagai macam hal yang mengharuskan manusia untuk
              beradaptasi dengan perubahan yang terjadi. Khususnya dalam bidang
              penelitian. Penelitian menjadi hal yang cukup penting karena mampu
              menciptakan solusi – solusi dari masalah yang terjadi saat ini.
            </p>
          </div>
          <div className="about-desc">
            <p>
              Alasan inilah yang mendasari IYSA untuk membuat sebuah lomba yang
              mengajak para peserta didik baik siswa SD, SMP, SMA, dan Mahasiswa
              untuk bisa berkontribusi menghasilkan sebuah produk yang dapat
              digunakan oleh masyarakat luas.
            </p>
          </div>
          <a href="#contact" className="about-btn">
            Hubungi Kami &nbsp; →
          </a>
        </div>
      </div>
    </section>
  );
}
