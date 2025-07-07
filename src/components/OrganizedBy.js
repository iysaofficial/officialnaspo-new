import Image from "next/image";

export default function OrganizedBy() {
  return (
    <section className="organizedby-section">
      <div className="organizedby-container">
        <div className="organizedby-row">
          <div className="organizedby-label">
            <span>Diselenggarakan<br />oleh:</span>
          </div>
          <Image
            src="/images/logo/iysa.png"
            alt="IYSA"
            className="organizedby-logo"
            width={300}
            height={100}
            priority
          />
          <Image
            src="/images/logo/FMIPABLUE.png"
            alt="FMIPA"
            className="organizedby-logo"
            width={300}
            height={100}
            priority
          />
        </div>
        <hr className="organizedby-divider" />
      </div>
    </section>
  );
}