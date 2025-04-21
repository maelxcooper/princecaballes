import React, { useEffect } from 'react'
import styled from 'styled-components';
import { sectionHeading, anchorEffect, styledImage } from '../styles/styles';
import { handleExternalLinks } from '../utils/extraLinks';
import mePic from '../images/me.jpg';


const StyledHeading = styled.h2`
    ${sectionHeading};
`;

const ImageStyling = styled.img `
    ${styledImage};
`;

const StyledAnchor = styled.a `
    ${anchorEffect};
`;

const About = () => {

    useEffect(() => {
        handleExternalLinks();
    }, []);


    return (
        <div id='about' className='max-w-[1200px] w-full mx-auto py-16 px-6 md:px-20  h-screen'>
                <StyledHeading className='md:text-3xl text-2xl font-bold font-montserrat text-[var(--light-slate)] mt-[10px] mb-[40px] mx-0'>About Me</StyledHeading>

            <div className='inner grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <p>Hello! My name is Prince, and I build and update websites that help businesses establish a strong online presence. My journey into web development began when I started converting layout designs from Figma into responsive web pages — turning static visuals into functional websites sparked my passion for front-end development.</p>

                    <p>Since then, I’ve worked on a variety of client websites across different industries — from healthcare and education to retail and professional services — mainly using  <StyledAnchor href='https://wordpress.org/'>WordPress</StyledAnchor>. My role has focused on updating inner pages, converting mockup layouts into clean, responsive designs, and maintaining consistency across devices, all while collaborating with developers and stakeholders to bring projects to life.</p>
                </div>


                <div className='imageWrapper inline-block w-[360px] max-w-full align-middle mx-auto'>
                    <ImageStyling src={mePic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;