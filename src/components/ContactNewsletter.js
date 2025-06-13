export default function ContactNewsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-bg" />
      <div className="newsletter-container">
        <div className="newsletter-header">
          <div className="newsletter-subtitle">Berlangganan Newsletter</div>
          <h2 className="newsletter-title">
            Berlangganan Newsletter Kami Untuk<br />
            Mendapatkan Lebih Banyak Pembaruan
          </h2>
          <div className="newsletter-underline">
            <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
              <path d="M10 15 Q100 0 190 15" stroke="#ff7a22" strokeWidth="4" fill="none" />
            </svg>
          </div>
        </div>
        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Masukkan alamat email Anda"
            required
          />
          <button type="submit" className="newsletter-btn">
            Berlangganan Sekarang &nbsp; <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}