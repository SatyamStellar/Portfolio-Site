import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Contact,
  Navbar,
  Hero,
  About,
  Tech,
  Works,
  Experience,
  Footer,
  PageLoader
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#06060c]">
        <PageLoader isLoading={isLoading} />

        <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300 "}>
          <div className="">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Experience />
          <Works />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
