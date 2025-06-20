import { HashRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Education, SocialLinks, ShowKeyboardsCTA, Keyboards, Setup, Extracurriculars, HackathonWinner } from "./components";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import AboutMeBot from "./components/AboutMeBot";
import ViewCVButton from "./components/ViewCVButton";
import ListenMusicButton from "./components/ListenMusicButton";
import Welcome from "./components/Welcome";
import StardustCursor from "./components/StardustCursor";
import SecretSnake from "./components/SecretSnake";

const MainContent = () => {
  const location = useLocation();
  const socialRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.fromKeyboardsCTA) {
      // Scroll to SocialLinks section after a short delay to ensure render
      setTimeout(() => {
        const el = document.getElementById("social");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [location.state]);

  return (
    <>
      <StardustCursor />
      <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-10">
          <StarsCanvas />
        </div>
        <div className='relative z-10'>
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Experience />
      <Extracurriculars />
      <Education />
      <Works />
      <Tech />
      <HackathonWinner />
      <Hobbies />
      <Setup />
      <ShowKeyboardsCTA />
      <div id="social">
        <SocialLinks />
      </div>
      <div className='relative z-0'>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

const FloatingButtons = () => {
  const location = useLocation();
  // Only show on /home and /keyboards
  if (location.pathname !== "/home" && location.pathname !== "/keyboards") return null;
  return <>
    <AboutMeBot />
    <ListenMusicButton />
    <ViewCVButton />
  </>;
};

const EasterEggListener = () => {
  const navigate = useNavigate();
  const buffer = useRef("");
  useEffect(() => {
    const handler = (e) => {
      buffer.current += e.key.toLowerCase();
      if (buffer.current.length > 5) buffer.current = buffer.current.slice(-5);
      if (buffer.current.endsWith("snake")) {
        navigate("/secret");
        buffer.current = "";
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        exit={{ y: -30 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        style={{ minHeight: "100vh" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<MainContent />} />
          <Route path="/keyboards" element={<><Navbar /><Keyboards /><Footer /></>} />
          <Route path="/secret" element={<SecretSnake />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <HashRouter>
      <EasterEggListener />
      <div className='relative z-0 bg-primary'>
        <AnimatedRoutes />
        <FloatingButtons />
      </div>
    </HashRouter>
  );
}

export default App;
