import React from 'react'
import { sidebarStyleEffect } from '../styles/styles';
import styled from 'styled-components';

const StyledSidebar = styled.a`
    ${sidebarStyleEffect};
`

const Sidebar = () => {


    return (
        <div className='fixed w-10 right-[1.5rem] bottom-0 z-10 text-[var(--lightest-slate)]'>
            <div className='email__styledLink' >
                <StyledSidebar href="mailto:caballesprince3211@gmail.com">caballesprince3211@gmail.com</StyledSidebar>
            </div>
        </div >
    )
}

export default Sidebar