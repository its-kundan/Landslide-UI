import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
// import Map from '@/components/Map';
import React from 'react';
// import Graph from '@/components/Graph';
import FeedbackForm from '@/components/FeedbackForm';



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Map /> */}
      {/* <Graph /> */}
      <FeedbackForm />
      <Footer />
    </div>
  );
}
