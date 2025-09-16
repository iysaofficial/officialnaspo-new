import { useEffect } from "react";
export default function ContactNewsletter() {
   useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbwfw1dAhzyY6p6crVCCuoEXzb_E7hBOi8cYuIBu_-JZzz2a25h-tCvT6Xd3dUH9Mx2fQA/exec";

        const form = document.forms.namedItem("home-newsletter");

        if (form) {
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Data sent successfully!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Failed to send data.");
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup listener
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
        }
    }, []);


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
        <form className="newsletter-form" name="home-newsletter">
          <input
            type="email"
            name="Email"
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