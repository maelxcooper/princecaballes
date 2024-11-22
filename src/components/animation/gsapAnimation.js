import gsap from 'gsap';

export const animateNavbar = () => {
  const timeline = gsap.timeline();


  timeline.fromTo(
    ".titleLogo",
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  )


  timeline.fromTo(
    ".navbar-list li",
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.4, stagger: 0.2, ease: "power2.out" }
  );


  timeline.fromTo(
    ".cvbtn",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
  );

};


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