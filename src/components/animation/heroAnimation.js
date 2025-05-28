import gsap from 'gsap';





// Hero Section
export const animateHeroText = () => {
  gsap.fromTo(
    ".introName",
    { y: '-100%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 2,
    }
  );

  gsap.fromTo(
    ".devName",
    { y: '-100%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 2.5,
    }
  );

  gsap.fromTo(
    '.posTitle',
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 3,
    }
  );
}