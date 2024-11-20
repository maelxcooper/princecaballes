import React, {useState, useEffect } from 'react';
import { hoverUnderlineEffect, buttonHoverEffect } from './styles/styles';
import styled from 'styled-components';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { animateNavbar } from './animation/gsapAnimation';


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
    <header className='navbar px-6 md:px-12 py-0 flex justify-between items-center h-24 text-white'>
        <h1 className='titleLogo w-full text-4xl font-montserrat font-bold text-[#00ba7c]'>
          <a href="/">Mael</a>
        </h1>

        <div className='flex justify-between items-center gap-4'>
            <ul className='navbar-list hidden md:flex'>
                <li className='p-4'><StyledLink href="#home">Home</StyledLink></li>
                <li className='p-4'><StyledLink href="#about">About</StyledLink></li>
                <li className='p-4'><StyledLink href="#projects">Projects</StyledLink></li>
                <li className='p-4'><StyledLink href="#contact">Contact</StyledLink></li>
            </ul>

            <ButtonStyled className='cvbtn hidden md:block' href="#cv">
              Resume
              </ButtonStyled>
            
              <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                  {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu  size={20}/>}
              </div>

              <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-montserrat font-bold text-[var(--priColor)] m-4'>Mael</h1>

                  <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'><a href="#home">Home</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#about">About</a></li>
                    <li className='p-4 border-b border-gray-600'><a href="#projects">Projects</a></li>
                    <li className='p-4'><a href="#contact">Contact</a></li>
                  </ul>

                  <a className="relative inline-block w-[40%]  px-4 py-3 border border-[var(--priColor)] rounded-md text-[var(--priColor)] ml-4 transition-[var(--translation)] hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[4px_4px_0_0_#00ba7c]" href="#cv">
                          Resume
                  </a>

              </div>
              
        </div>
    </header>
  )
}

export default Navbar