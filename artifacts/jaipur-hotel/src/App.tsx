import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavBar } from "@/components/NavBar";
import { HeroChapter } from "@/components/scrollytelling/HeroChapter";
import { HeritageChapter } from "@/components/scrollytelling/HeritageChapter";
import { RoomsChapter } from "@/components/scrollytelling/RoomsChapter";
import { Gallery } from "@/components/Gallery";
import { Amenities } from "@/components/Amenities";
import { DiningChapter } from "@/components/scrollytelling/DiningChapter";
import { Testimonials } from "@/components/Testimonials";
import { ExploreChapter } from "@/components/scrollytelling/ExploreChapter";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const queryClient = new QueryClient();

function HotelPage() {
  useSmoothScroll();

  useEffect(() => {
    document.title = "Jaipur Hotel New – A Heritage Hotel | Jaipur, Rajasthan";
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroChapter />
        <HeritageChapter />
        <RoomsChapter />
        <Gallery />
        <Amenities />
        <DiningChapter />
        <Testimonials />
        <ExploreChapter />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HotelPage />
    </QueryClientProvider>
  );
}

export default App;
