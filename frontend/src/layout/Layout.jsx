import React from 'react';
import Header from '../components/Header';
import Routers from '../routes/Routers';
import background from './background.jpeg';

const layoutStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Layout = () => {
  return (
    <div style={layoutStyle} className='h-screen flex flex-col justify-between'>
      <Header />
      <Routers />
    </div>
  );
};

export default Layout;
