import Head from "next/head";
import Navigation from "@/components/Navbar";
// import { Main } from "next/document";
import MainHero from "@/components/MainHero";
import OrganizedBy from "@/components/OrganizedBy";
import AboutSection from "@/components/AboutSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import ContactNewsletter from "@/components/ContactNewsletter";
import AfterMovie from "@/components/AfterMovie";

export default function Home() {
  return (
    <>
      <Head>
        <title>NASPO - National Applied Science Project Olympiad</title>
        <meta name="description" content="NASPO Official Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <Navigation />

      {/* Hero Section */}
      <MainwHero />

      {/* About Section */}
      <OrganizedBy />
      <AboutSection />

      {/* Programs Section */}
      <CategorySection />

      <AfterMovie />

      {/* Contact Section */}
      <ContactNewsletter /> 

      {/* Footer */}
      <Footer />
    </>
  );
}
