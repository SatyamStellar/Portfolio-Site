import { BrowserRouter } from "react-router-dom";

import { Contact, Navbar, Hero, About, Tech, Works, Experience, Footer, StarsCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>

      <div className="relative z-0 bg-[#06060c] ">

        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        {/*<Feedbacks />*/}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
