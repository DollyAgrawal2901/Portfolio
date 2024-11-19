import Education from "./Education";
import Navbar from "./Navbar";
import WhatIDO from "./WhatIDO";
import { useState, useEffect } from "react";
import Arrowup from "./assets/arrowup.svg"


function App() {
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); // Show button when scrolled 300px down
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <>
     <Navbar />
     <WhatIDO />
     <Education />

     {/* Scroll-to-Top Button */}
     {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full"
        >
          <img src={Arrowup} alt="ArrowUp" />
        </button>
      )}
    </>
   );
}

export default App
