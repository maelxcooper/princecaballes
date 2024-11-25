import React, { useEffect } from 'react'
import { sidebarStyleEffect } from '../styles/styles';
import styled from 'styled-components';
import { sidebarAnimate } from '../animation/gsapAnimation';



const StyledSidebar = styled.div`
    ${sidebarStyleEffect};
`

const Sidebar = () => {


    useEffect(() => {
        sidebarAnimate();
    },[])

    return (
        <div className='hidden md:block fixed w-10 right-[1.5rem] bottom-0 z-10 text-[var(--lightest-slate)]'>
            <StyledSidebar className='email__styledLink relative flex flex-col items-center'>
                <a href="mailto:caballesprince3211@gmail.com">caballesprince3211@gmail.com</a>
            </StyledSidebar>
        </div >
    )
}

export default Sidebar