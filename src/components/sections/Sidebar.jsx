import React, { useEffect } from 'react'
import { sidebarStyleEffect, ulStyleEffect } from '../styles/styles';
import styled from 'styled-components';
import { sidebarAnimate } from '../animation/gsapAnimation';
import Github from '../icons/Github';
import Instagram from '../icons/Instagram';
import Twitter from '../icons/Twitter';
import Linkedin from '../icons/Linkedin';



const StyledSidebar = styled.div`
    ${sidebarStyleEffect};
`

const UlStyled = styled.ul`
    ${ulStyleEffect};
`

const Sidebar = () => {

    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'));
        allLinks.forEach((link) => {
            if (link.host !== window.location.host) {
                link.setAttribute('rel', 'noopener noreferrer');
                link.setAttribute('target', '_blank');
            }
        });
    };


    useEffect(() => {
        sidebarAnimate();
        handleExternalLinks();
    }, [])

    return (
        <div className='relative'>
            <div className='socialsLink hidden md:block fixed w-10 left-[2.5rem] bottom-0 text-[var(--lightest-slate)]'>
                <UlStyled className='flex flex-col items-center m-0 p-0'>
                    <li><a className='p-2.5 hover:translate-y-[-3px] hover:text-[var(--priColor)]' href="https://github.com/maelxcooper"><Github /></a></li>
                    <li><a className='p-2.5 hover:translate-y-[-3px] hover:text-[var(--priColor)]' href="https://www.instagram.com/maelxcooper/"><Instagram /></a></li>
                    <li><a className='p-2.5 hover:translate-y-[-3px] hover:text-[var(--priColor)]' href="https://x.com/_maelcooper"><Twitter /></a></li>
                    <li className='mb-5'><a className='p-2.5 hover:translate-y-[-3px] hover:text-[var(--priColor)]' href="https://www.linkedin.com/in/prince-caballes/"><Linkedin /></a></li>
                </UlStyled>
            </div>


            <div className='hidden md:block fixed w-10 right-[1rem] bottom-0 z-10 text-[var(--lightest-slate)]'>
                <StyledSidebar className='email__styledLink relative flex flex-col items-center'>
                    <a href="mailto:caballesprince3211@gmail.com">caballesprince3211@gmail.com</a>
                </StyledSidebar>
            </div>
        </div>
    )
}

export default Sidebar