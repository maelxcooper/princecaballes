import gsap from 'gsap';

// Header Section
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
    ".cvBtnWrapper",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
  );

};

export const animateNavbarScroll = () => {
  const navbar = document.querySelector('.navbar');
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      gsap.to(navbar, { y: '-100%', duration: 0.1, ease: 'power2.out' });

    } else if (currentScrollY < lastScrollY) {
      gsap.to(navbar, { y: '0%', duration: 0.1, ease: 'power2.out' });
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll)
  };

};






//Sidebar Section

export const sidebarAnimate = () => {

  const timeline = gsap.timeline();

  timeline.fromTo(
    '.socialsLink',
    { y: '100%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 3.5,
    }

  );

  timeline.fromTo(
    '.email__styledLink',
    { y: '100%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    }

  );
}



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