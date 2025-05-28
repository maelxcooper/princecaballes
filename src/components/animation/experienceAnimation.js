import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const expAnimate = () => {
  gsap.fromTo(
    '#experience',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};