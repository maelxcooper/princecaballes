import React, { useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { animateHeroText } from '../animation';





const Hero = () => {

    useEffect(() => {
        animateHeroText();
    }, []);

    return (
        <div id='Hero' className='h-[110vh]'>
            <div className='max-w-[100rem]  mt-[-96px] px-6  md:px-28  h-screen w-full mx-auto text-center flex flex-col justify-center'>
                <p className='introName md:text-[18px] text-[var(--priColor)] font-normal p-2'>Hello, My name is</p>
                <h1 className='devName md:text-5xl sm:text-4xl text-2xl stroke-text font-bold font-montserrat md:py-1'>Prince Caballes.</h1>
                <div className='posTitle flex justify-center items-center flex-wrap md:py-4'>
                    <p className='md:text-3xl-cm sm:text-4xl  text-2xl stroke-text font-montserrat font-bold'> I'm a</p>
                    <ReactTyped className='md:text-3xl-cm sm:text-4xl text-2xl text-[var(--priColor)]  font-montserrat font-bold italic pl-2 -mt-[0.875rem]'
                        strings={['Front End Developer', 'Digital Specialist', 'Virtual Assistant']}
                        typeSpeed={140}
                        backSpeed={90}
                        loop />
                </div>
            </div>
        </div>
    )
}


export default Hero;