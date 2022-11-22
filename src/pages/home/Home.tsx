import React from 'react';

import PrayerTable from '../../components/prayer-table/PrayerTable';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/hero/HeroSection';

import '../../App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <PrayerTable />
      <Footer />
    </>
  );
}

export default Home;