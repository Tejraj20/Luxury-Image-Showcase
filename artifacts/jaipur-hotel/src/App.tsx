import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Rooms } from "@/components/Rooms";
import { Gallery } from "@/components/Gallery";
import { Timeline } from "@/components/Timeline";
import { Amenities } from "@/components/Amenities";
import { Dining } from "@/components/Dining";
import { Testimonials } from "@/components/Testimonials";
import { Attractions } from "@/components/Attractions";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function HotelPage() {
  useEffect(() => {
    document.title = "Jaipur Hotel New – A Heritage Hotel | Jaipur, Rajasthan";
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Gallery />
        <Timeline />
        <Amenities />
        <Dining />
        <Testimonials />
        <Attractions />
        <Booking />
        <Contact />
      </main>
      <Footer />
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
