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
            src="https://ik.imagekit.io/iysaimg/ASSET%20IYSA/logo%20IYSA%20bagus%20(1).png"
            alt="IYSA"
            className="organizedby-logo"
            width={300}
            height={150}
            priority
            unoptimized
          />
          <Image
            src="https://ik.imagekit.io/iysaimg/ASSET%20IYSA/Logo%20Tengah%20block%20SV%20UGM%20biru%20lock-up%20(1).png"
            alt="FMIPA"
            className="organizedby-logo"
            width={300}
            height={150}
            priority
            unoptimized
          />
          <Image
            src="https://ik.imagekit.io/iysaimg/ASSET%20IYSA/prospera%20creative.png"
            alt="prospera"
            className="organizedby-logo"
            width={700}
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
