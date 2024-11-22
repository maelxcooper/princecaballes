import React from 'react';
import { ReactTyped } from "react-typed";



const Hero = () => {
    return (
        <div id='Home' className='h-screen'>
            <div className='max-w-[1000px] mt-[-96px] h-[84vh] w-full mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-[18px] text-[var(--priColor)] font-normal p-2'>Hello, My name is</p>
                <h1 className='md:text-5xl sm:text-4xl text-3xl stroke-text font-bold font-montserrat md:py-1'>Prince Caballes.</h1>
                <div className='flex justify-center items-center flex-wrap md:py-4'>
                    <p className='md:text-3xl-cm sm:text-4xl  text-3xl stroke-text font-montserrat font-bold'> I'm a</p>
                    <ReactTyped className='md:text-3xl-cm sm:text-4xl text-3xl text-[var(--priColor)] font-montserrat font-bold italic pl-2' strings={['Front End Developer', 'Seo', 'VA']} typeSpeed={140} backSpeed={140} loop />
                </div>
            </div>
        </div>
    )
}


export default Hero;