import Image from "next/image";

export default function OrganizedBy() {
  return (
    <section className="organizedby-section">
      <div className="organizedby-container">
        <div
          className="organizedby-label"
          style={{ textAlign: "center", marginBottom: "32px" }}
        >
          <span>Diselenggarakan oleh:</span>
        </div>
        <div className="organizedby-row" style={{ justifyContent: "center" }}>
          <Image
            src="images/logo/LOGO IYSA FIX.png"
            alt="IYSA"
            className="organizedby-logo"
            width={320}
            height={200}
            priority
            unoptimized
          />
          <Image
            src="images/logo/Logo Tengah block SV UGM biru lock-up.png"
            alt="FMIPA"
            className="organizedby-logo"
            width={300}
            height={150}
            priority
            unoptimized
          />
          <Image
            src="images/logo/prospera.png"
            alt="prospera"
            className="organizedby-logo"
            width={295}
            height={300}
            priority
            unoptimized
          />
        </div>
        <hr className="organizedby-divider" />
      </div>
    </section>
  );
}
