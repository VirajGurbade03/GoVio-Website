import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import WebAppAccess from '@/components/WebAppAccess';
import MobileApp from '@/components/MobileApp';
import Pricing from '@/components/Pricing';
import Security from '@/components/Security';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Services />
            <HowItWorks />
            <WebAppAccess />
            <MobileApp />
            <Pricing />
            {/* <Security /> */}
            <Contact />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
