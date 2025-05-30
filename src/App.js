import React, { useEffect, useState, useCallback } from "react";
import { Navbar, Sidebar, Hero, About, Experience } from "./components";
import GlobalStyle from "./components/styles/globalStyles";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        window.addEventListener("mousemove", handleMouseMove);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleMouseMove]);

  return (
    <div className="relative text-[var(--slate)]">
      <GlobalStyle />

      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <Navbar />
      <Sidebar />
      <main className="max-w-[100rem] w-full mx-auto px-6 md-plus:px-28">
        <Hero />
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default App;
