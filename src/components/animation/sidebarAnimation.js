import gsap from 'gsap';

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
