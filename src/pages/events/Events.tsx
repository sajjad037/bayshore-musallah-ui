import React from 'react';

import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';
import '../../App.css';

export default function Events() {
    return (
        <>
          <h1 className='events'>Events</h1>
          <Cards />
          <Footer />
        </>
      );
}