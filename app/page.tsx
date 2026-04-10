import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import WhatsAppBubble from "./components/WhatsAppBubble";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <ContactForm/>
      <Footer />
      <WhatsAppBubble />
    </>
  );
}
