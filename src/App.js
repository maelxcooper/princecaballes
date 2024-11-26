import React from 'react'
import Navbar from './components/sections/Navbar';
import Sidebar from './components/sections/Sidebar';
import Hero from './components/sections/Hero';
import GlobalStyle from './components/styles/globalStyles';


function App() {
  return (
    <div className='relative bg-[var(--navy)]'>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;
