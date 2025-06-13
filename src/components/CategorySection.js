import { useState } from "react";
import Image from "next/image";

const categories = [
  { label: "Waste treatment", img: "/images/kategori/service-thumbnail-1.png" },
  { label: "IoT and Its Applications", img: "/images/kategori/service-thumbnail-2.png" },
  { label: "Functional Food", img: "/images/kategori/service-thumbnail-3.png" },
  { label: "Energy", img: "/images/kategori/service-thumbnail-4.png" },
  { label: "Research on Children with Special Needs", img: "/images/kategori/service-thumbnail-5.png" },
  { label: "Entrepreneurship", img: "/images/kategori/service-thumbnail-6.png" },
];

export default function CategorySection() {
  const [selected, setSelected] = useState(3);

  return (
    <section className="kategori-section">
      <div className="kategori-bgpattern" />
      <div className="kategori-container">
        <div className="kategori-header">
          <span className="kategori-badge">Kategori</span>
          <h2 className="kategori-title">
            Pilih Kategori yang Ingin<br />Kalian Daftarkan
          </h2>
        </div>
        <div className="kategori-grid">
          {categories.map((cat, idx) => (
            <div
              key={cat.label}
              className={`kategori-card${selected === idx ? " selected" : ""}`}
              onClick={() => setSelected(idx)}
            >
              <Image
                src={cat.img}
                alt={cat.label}
                className="kategori-img"
                width={120}
                height={120}
                priority={idx === 0}
              />
              <div className="kategori-label">{cat.label}</div>
              <div className="kategori-radio-wrap">
                <span
                  className={`kategori-radio${selected === idx ? " selected" : ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}