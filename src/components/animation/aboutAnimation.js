import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const aboutAnimate = () => {
  gsap.fromTo(
    '#about',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.aboutMe',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

