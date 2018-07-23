import React from 'react';

import Navbar from './Navbar/Navbar.jsx';
import ListingPage from './Details/ListingPage.jsx';
import Booking from './Booking/Booking.jsx';
import Review from './Review/Review.jsx';

const MainLayout = () => {
  return (
    <div> 
      <div>
        <Navbar />
      </div>
      <div style={{marginTop: 90}}>
        <ListingPage />
        <Booking /> 
        <Review />
      </div>
    </div>
  )
}

export default MainLayout;