import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Daftar Pemenang", href: "/daftarpemenang/daftar-pemenang" },
  {
    label: "Sertifikat",
    submenu: [
      {
        label: "Sertifikat Pembimbing",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/14qpJslRH5A6EIZQ0ojovuMdscj7wn9NJ?usp=sharing",
      },
    ],
  },
  {
    label: "Kurasi",
    submenu: [
      {
        label: "Kurasi 2024",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1AAuI8el0ri1dBzZqT0gUh9gy7r7KdLse?usp=sharing",
      },
      {
        label: "Kurasi 2023",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1VKW5nQYcQSY7HT3O12ymnjUcNNqKdnc-?usp=sharing",
      },
      {
        label: "Kurasi 2022",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/16gPiJi-yXJSB2efBbp3_FoageGRH7urT?usp=sharing",
      },
      {
        label: "Kurasi 2021",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1mDb1yhh813A7xaBqhwMRKRvytBsih0zQ?usp=sharing",
      },
      {
        label: "Kurasi 2020",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1bX-Lg2vECgT6SbFQM3WR_6lTfiDaoF-5?usp=sharing",
      },
    ],
  },
  {
    label: "Galeri",
    submenu: [
      {
        label: "Galeri 2024",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1OZAy_5LPSwutTivLjuhIVYRgO0ctFoSX?usp=sharing",
      },
      {
        label: "Galeri 2023",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1dmpVvlo9oW4lT7ocNSw-pCsMm8JMRNcR?usp=sharing",
      },
      {
        label: "Galeri 2022",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1qj5nnb0JCV2GxDZUZyWZTaxdtXlVjI-R?usp=drive_link",
      },
      {
        label: "Galeri 2021",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/100rDLD2T9EjwCgNDJcC7ldMCfUzym_aN?usp=drive_link",
      },
      {
        label: "Galeri 2020",
        target: "_blank",
        href: "https://drive.google.com/drive/folders/1awa1sITOW8HcnSb8VUo5991z7mJ5CIl9?usp=drive_link",
      },
    ],
  },
  { label: "Kontak", href: "/kontak" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Liputan Media",
    submenu: [
      { label: "Berita dari Media", href: "/" },
      {
        label: "Press Release 2024",
        target: "_blank",
        href: "https://drive.google.com/file/d/1ixLPdHz9Bq-0virK17Rss9Zu1uxx74Ho/view?usp=sharing",
      },
      {
        label: "Press Release 2023",
        target: "_blank",
        href: "https://drive.google.com/file/d/1so7MicFKw6SHyDym0D8qPBnrfgRMouv9/view?usp=sharing",
      },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-logo">
          <Image
            src="/images/logo/naspo-head.png"
            alt="NASPO Logo"
            className="navbar-logo-img"
            width={120}
            height={48}
            priority
          />
        </div>
        <ul className="navbar-menu">
          {menu.map((item, idx) =>
            item.submenu ? (
              <li
                key={item.label}
                className="navbar-menu-item navbar-has-dropdown"
                onMouseEnter={() => setOpen(idx)}
                onMouseLeave={() => setOpen(null)}
              >
                <span className="navbar-link">
                  {item.label} <span className="navbar-caret">▼</span>
                </span>
                {open === idx && (
                  <ul className="navbar-dropdown">
                    {item.submenu.map((sub) => (
                      <li key={sub.href} className="navbar-dropdown-item">
                        {sub.target === "_blank" ? (
                          <a
                            href={sub.href}
                            className="navbar-dropdown-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            href={sub.href}
                            className="navbar-dropdown-link"
                          >
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label} className="navbar-menu-item">
                <Link href={item.href} className="navbar-link">
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <button
          className="navbar-burger"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`navbar-mobile-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside className={`navbar-mobile${mobileOpen ? " open" : ""}`}>
        <div className="navbar-mobile-header">
          <Image
            src="/images/logo/naspo-head.png"
            alt="NASPO Logo"
            className="navbar-logo-img"
            width={120}
            height={48}
            priority
          />
          <button
            className="navbar-mobile-close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="32" height="32" viewBox="0 0 32 32">
              <line
                x1="8"
                y1="8"
                x2="24"
                y2="24"
                stroke="#fff"
                strokeWidth="2.5"
              />
              <line
                x1="24"
                y1="8"
                x2="8"
                y2="24"
                stroke="#fff"
                strokeWidth="2.5"
              />
            </svg>
          </button>
        </div>
        <ul className="navbar-mobile-menu">
          {menu.map((item, idx) =>
            item.submenu ? (
              <li key={item.label} className="navbar-mobile-item">
                <button
                  className="navbar-mobile-link"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === idx ? null : idx)
                  }
                >
                  {item.label}
                  <span
                    className={`navbar-mobile-caret${
                      mobileDropdown === idx ? " open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <ul
                  className={`navbar-mobile-dropdown${
                    mobileDropdown === idx ? " open" : ""
                  }`}
                >
                  {item.submenu.map((sub) => (
                    <li key={sub.href}>
                      {sub.target === "_blank" ? (
                        <a
                          href={sub.href}
                          className="navbar-mobile-sublink"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ) : (
                        <Link
                          href={sub.href}
                          className="navbar-mobile-sublink"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label} className="navbar-mobile-item">
                <Link
                  href={item.href}
                  className="navbar-mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </aside>
    </>
  );
}
