import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Products } from "@/components/Products";
import { InPractice } from "@/components/InPractice";
import { WhyUs } from "@/components/WhyUs";
import { Personalization } from "@/components/Personalization";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Products />
        <InPractice />
        <WhyUs />
        <Personalization />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
