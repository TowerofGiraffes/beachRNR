import React from 'react';

import Navbar from './Navbar/Navbar.jsx';
import Search from './Search/Search.jsx';

const LandingPage = () => {
  return (
    <div> 
      <div>
        <Navbar />
      </div>
      <div style={{marginTop: 90}}>
        <Search />
      </div>
    </div>
  )
}

export default LandingPage;