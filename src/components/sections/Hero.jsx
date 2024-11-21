import React from 'react';
import { ReactTyped } from "react-typed";





const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-[18px] text-[var(--priColor)] font-normal p-2'>Hello, My name is</p>
                <h1 className='md:text-5xl sm:text-4xl text-[28px] text-[var(--lightest-slate)] font-bold font-montserrat md:py-1'>Prince Caballes.</h1>
                <div className='flex justify-center items-center flex-wrap md:py-4'>
                    <p className='md:text-[2.5rem] sm:text-4xl  text-[28px] text-[var(--lightest-slate)]  font-montserrat font-bold'> I'm a</p>
                    <ReactTyped className='md:text-[3.125rem] sm:text-4xl text-[28px] text-[var(--priColor)] font-montserrat font-bold italic pl-2' strings={['Developer','Seo','VA']} typeSpeed={140} backSpeed={140} loop/>
                </div>
            </div>
        </div>
    )
}


export default Hero;