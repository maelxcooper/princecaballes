import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import GlobalStyle from './components/styles/globalStyles';

function App() {
  return (
    <div className='relative bg-[var(--navy)]'>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
