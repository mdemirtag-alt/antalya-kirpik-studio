import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import AppointmentSection from "@/components/AppointmentSection";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <ServicesSection />
      <GallerySection />
      <BeforeAfterSection />
      <AboutSection />
      <ReviewsSection />
      <AppointmentSection />
      <InstagramFeed />
      <Footer />
    </main>
  );
};

export default Index;
