import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import FAQSection from "@/components/faq";
import HireMeSection from "@/components/hire-me";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import AskSection from "@/components/ask";
import { Carousel } from "@/components/magicui/carousel";
import { SectionBordered, Section } from "@/components/magicui/section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <SectionBordered>
        <ServicesSection />
      </SectionBordered>
      <Section>
        <HireMeSection />
      </Section>
      <SectionBordered>
        <ContactSection />
      </SectionBordered>
      <Section>
        <FAQSection />
      </Section>
      <SectionBordered>
        <AskSection />
      </SectionBordered>

      <Footer />
    </>
  );
}
