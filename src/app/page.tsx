"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);

  return (
    <>
      <Navbar onBookClick={openBooking} />
      <Hero onBookClick={openBooking} />
      <About />
      <Rooms onBookClick={openBooking} />
      <Amenities />
      <WhyChoose />
      <Testimonials />
      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
