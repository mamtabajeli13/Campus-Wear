import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyCampusWearSection } from './components/WhyCampusWearSection';
import { FreeMockupCtaSection } from './components/FreeMockupCtaSection';
import { SocialJourneySection } from './components/SocialJourneySection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GalleryItem, ProductItem } from './data/campusWearData';

export default function App() {
  const [prefilledMerchType, setPrefilledMerchType] = useState<string>('Custom T-Shirts');
  const [prefilledNote, setPrefilledNote] = useState<string>('');

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMockupPreset = (merchType: string, customNote: string) => {
    setPrefilledMerchType(merchType);
    setPrefilledNote(customNote);
    scrollToContact();
  };

  const handleRequestProductMockup = (product: ProductItem) => {
    setPrefilledMerchType(product.title);
    setPrefilledNote(`Requesting a free digital mockup for ${product.title} (${product.specs}).`);
    scrollToContact();
  };

  const handleSelectGalleryMockup = (item: GalleryItem) => {
    const mappedType =
      item.category === 'Hoodies'
        ? 'Custom Hoodies'
        : item.category === 'Fest merchandise'
        ? 'Event Merchandise'
        : 'Custom T-Shirts';
    setPrefilledMerchType(mappedType);
    setPrefilledNote(`Inspired by Gallery Concept: "${item.title}" (${item.specDetail}).`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070A11] text-[#F3F4F6]">
      <Navbar onOpenMockupModal={scrollToContact} />

      <main className="flex-grow">
        <HeroSection onSelectMockupPreset={handleSelectMockupPreset} />
        <ProductsSection onRequestProductMockup={handleRequestProductMockup} />
        <HowItWorksSection />
        <WhyCampusWearSection />
        <FreeMockupCtaSection />
        <SocialJourneySection />
        <GallerySection onSelectGalleryMockup={handleSelectGalleryMockup} />
        <ContactSection
          prefilledMerchType={prefilledMerchType}
          prefilledNote={prefilledNote}
        />
      </main>

      <Footer />
    </div>
  );
}
