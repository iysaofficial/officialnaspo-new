import Head from "next/head";
import Image from "next/image";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import faqData from "@/lib/data/faq.json";

function FAQAccordion({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="faq-accordion">
      {faqs.map((faq, idx) => (
        <div
          className={`faq-item${openIdx === idx ? " open" : ""}`}
          key={faq.id}
          onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
        >
          <div className="faq-question">
            <span>{faq.title}</span>
            <span className="faq-arrow">{openIdx === idx ? "▲" : "▼"}</span>
          </div>
          <div
            className="faq-answer"
            style={{ display: openIdx === idx ? "block" : "none" }}
          >
            {faq.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | NASPO</title>
        <meta name="description" content="Frequently Asked Questions NASPO" />
      </Head>
      <Navigation />
      <Breadcrumb items={[{ label: "FAQ" }]} title="FAQ" />
      <section className="faq-hero">
        <div className="faq-hero-bg" />
        <div className="faq-container">
          <div className="faq-left">
            <h1 className="faq-title">Setelah Mendaftar</h1>
            <FAQAccordion faqs={faqData.SetelahMendaftar} />
          </div>
          <div className="faq-right">
            <Image
              src="/images/background/faq-image.png"
              alt="FAQ Illustration"
              className="faq-illustration"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>

        <div className="faq-container">
          <div className="faq-right">
            <Image
              src="/images/background/faq-image.png"
              alt="FAQ Illustration"
              className="faq-illustration"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="faq-left">
            <h1 className="faq-title">Selama Event Berlangsung</h1>
            <FAQAccordion faqs={faqData.SelamaEventBerlangsung} />
          </div>
        </div>

        <div className="faq-container">
          <div className="faq-left">
            <h1 className="faq-title">Setelah Acara</h1>
            <FAQAccordion faqs={faqData.SetelahAcara} />
          </div>
          <div className="faq-right">
            <Image
              src="/images/background/faq-image.png"
              alt="FAQ Illustration"
              className="faq-illustration"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}