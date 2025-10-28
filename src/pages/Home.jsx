import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Showcase from '../components/sections/Showcase';
import Services from '../components/sections/Services';
import Differentials from '../components/sections/Differentials';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Showcase />
      <Services />
      <Differentials />
      <Contact />
    </div>
  );
};

export default Home;
