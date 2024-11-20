import gsap from 'gsap';

export const animateNavbar = () => {
  const timeline = gsap.timeline(); // Create a timeline

  // Animate the navbar and h1 together
  timeline.fromTo(
    ".titleLogo", 
    { opacity: 0, y: -100 }, 
    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
  )


  timeline.fromTo(
    ".navbar-list li", 
    { opacity: 0, y: -30 }, 
    { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
  );


  timeline.fromTo(
    ".cvbtn", 
    { opacity: 0, scale: 0.5 }, 
    { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }  
  );
  
};
