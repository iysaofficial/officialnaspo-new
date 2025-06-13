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
            width={120}
            height={60}
            priority
          />
        </div>
        <hr className="organizedby-divider" />
      </div>
    </section>
  );
}