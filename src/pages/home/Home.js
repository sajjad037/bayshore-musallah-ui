import React from 'react';

import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/hero/HeroSection';

import '../../App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;