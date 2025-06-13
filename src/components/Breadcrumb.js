import Link from "next/link";

export default function Breadcrumb({ items = [], title }) {
  const fullItems = [{ label: "Beranda", href: "/" }, ...items];

  return (
    <section className="breadcrumb" aria-label="Breadcrumb">
      {title && (
        <h1 className="breadcrumb-title">{title}</h1>
      )}
      <ul className="breadcrumb-list">
        {fullItems.map((item, idx) => (
          <li key={idx} className="breadcrumb-item">
            {item.href && idx !== fullItems.length - 1 ? (
              <Link href={item.href} className="breadcrumb-link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
            {idx < fullItems.length - 1 && <span className="breadcrumb-separator">›</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}