import React, { useState, useEffect } from 'react';
import { hoverUnderlineEffect, buttonHoverEffect } from '../styles/styles';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { animateNavbar } from '../animation/gsapAnimation';


const StyledLink = styled.a`
  ${hoverUnderlineEffect};
`;

const ButtonStyled = styled.a`
  ${buttonHoverEffect};
`


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  };

  useEffect(() => {
    animateNavbar();

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <header className='navbar px-6 md:px-12 py-0 flex justify-between items-center h-24'>
      <h1 className='titleLogo w-full text-4xl font-montserrat font-bold '>
        <a className='text-[#00f4a3] hover:text-[var(--lightest-slate)]' href="/">Mael</a>
      </h1>

      <div className='flex justify-between items-center'>
        <ul className='navbar-list hidden md:flex'>
          <li className='py-2 px-4'><StyledLink href="#about">About</StyledLink></li>
          <li className='py-2 px-4'><StyledLink href="#experience">Experience</StyledLink></li>
          <li className='py-2 px-4'><StyledLink href="#work">Work</StyledLink></li>
          <li className='py-2 px-4'><StyledLink href="#contact">Contact</StyledLink></li>
        </ul>

        <ButtonStyled className='cvbtn hidden md:block' href="/assets/pdf/Prince-Caballes-CV.pdf" target='_blank' rel='noreferrer'>
          Resume
        </ButtonStyled>

        <div onClick={handleNav} className='block md:hidden relative z-30 cursor-pointer'>
          {nav ? <AiOutlineClose size={20} style={{ color: 'var(--priColor)' }} /> : <AiOutlineMenu size={20} style={{ color: 'var(--priColor)' }} />}
        </div>

        <div className={nav ? 'fixed right-0 top-0 bg-black/60 w-full h-[100dvh] ease-in-out duration-500 z-20' : 'fixed left-[-100%]'}></div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[var(--light-navy)] ease-in-out duration-500 z-20' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-montserrat font-bold text-[var(--priColor)] m-4'>Mael</h1>

          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'><a className='hover:text-[var(--priColor)]' href="#about">About</a></li>
            <li className='p-4 border-b border-gray-600'><a className='hover:text-[var(--priColor)]' href="#experience">Experience</a></li>
            <li className='p-4 border-b border-gray-600'><a className='hover:text-[var(--priColor)]' href="#work">Work</a></li>
            <li className='p-4'><a className='hover:text-[var(--priColor)]' href="#contact">Contact</a></li>
          </ul>

          <a className="relative inline-block w-[40%]  px-4 py-3 border border-[var(--priColor)] rounded-md text-[var(--priColor)] ml-4 transition-[var(--translation)] hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[4px_4px_0_0_#00ba7c]" href="/assets/pdf/Prince-Caballes-CV.pdf" target='_blank' rel='noreferrer'>
            Resume
          </a>

        </div>

      </div>
    </header>
  )
}

export default Navbar