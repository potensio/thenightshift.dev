import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import FAQSection from "@/components/faq";
import HireMeSection from "@/components/hire-me";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import AskSection from "@/components/ask";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HireMeSection />
      <ContactSection />
      <FAQSection />
      <AskSection />
      <Footer />
    </>
  );
}
