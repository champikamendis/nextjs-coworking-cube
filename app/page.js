import Head from 'next/head';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import WorkspacesSection from './components/WorkspacesSection';
import PackagesSection from './components/PackagesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coworking Cube</title>
        <meta name="description" content="Coworking spaces with easy commute near Colombo" />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <FeaturesSection />
        {/* <section id="location"> */}
        <WorkspacesSection />
        {/* </section> */}
        <section id="plans">
        <PackagesSection />
        </section>
        <FAQSection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
