import { useRef } from "react";
import { Blob1, Blob2 } from "./decoration/Blob1";
import Spline from '@splinetool/react-spline';
import { styles } from "../styles";



const Hero = () => {

  const techSkills = ['JavaScript', 'React', 'Tailwind', 'Node'];

  return (
    <section id="contact" className="relative w-full h-screen mx-auto overflow-hidden" >
      <Blob1 className="top-[10%] left-[10%] 2xl:left-[15%] opacity-80" />

      <Blob2 className="bottom-[10%] right-[10%] 2xl:right-[20%] opacity-50" />
      <div className={`${styles.paddingX} absolute inset-0 xl:items-center items-start xl:top-0 top-[120px] max-w-7xl mx-auto flex flex-row  gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-sec" />
          <div className="w-1  sm:h-80 h-44 black-gradient-back" />
        </div>
        <div className="md:w-[70%]  xl:-translate-y-[3rem] z-[20]">
          <h1 className={`font-varien font-bold lg:text-[50px] sm:text-[30px] xs:text-[20px] text-[20px] mt-2 tracking-wide text-white`}>Satyam <span className="font-bold font-varien text-sec">Stellar</span></h1>
          <p className={`md:w-[70%] w-[90%] font-liberationmono text-white/60 uppercase lg:text-[16px] sm:text-[14px]  text-[10px] md:ml-4 mt-2 `}>
            Creative Web Engineer passionate about building sleek, modern web apps with React, Tailwind, and Node. Always exploring new technologies to create impactful, user-focused experiences.
          </p>
          <div className="flex flex-row gap-1 md:gap-2 mt-4 md:ml-4">
            {techSkills.map((skill, index) => (
              <div key={index}
                className="bg-violet-500/20 text-[16px]  px-4 md:py-1  rounded-[2.3rem] shadow-purple-500 shadow-sm  font-monaco md:text-2xl hover:scale-105 transition-all duration-75 ease-in-out"
              >{skill}</div>
            ))}
          </div>
          <div className="flex flex-row gap-1 md:gap-2 mt-4 md:ml-4 md:mt-8" >
            <button
              onClick={() => window.open('https://drive.google.com/file/d/1_8oXGnMd6rErnk7-sCAA6ssdGI5zNPAp/view?usp=sharing')}
              className="uppercase text-white/80 hover:text-white text-md md:text-3xl font-mono bg-purple-700/30 shadow-md shadow-purple-600/50 p-4 py-2 rounded-full text-center outline-none hover:scale-105 transition-all duration-105 ease-in-out">
              Resume/Cv
            </button>
          </div>
        </div>
      </div>
      <div className="z-[999] absolute w-full h-[700px] md:w-1/2 top-[35%] scale-60 md:scale-100 right-0 ">
        <Spline scene="https://prod.spline.design/TwNlhuZztWYFwVHG/scene.splinecode" />

      </div>
    </section >
  )
}

export default Hero
