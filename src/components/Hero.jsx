import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles } from "./decoration/Hero";
import { TypeAnimation } from 'react-type-animation';
import { Blob1, Blob2 } from "./decoration/Blob1";

import { styles } from "../styles";
import { MainRobotCanvas } from "./canvas";



const Hero = () => {

  const techSkills = ['JavaScript', 'React', 'Tailwind', 'Node'];

  const parallaxRef = useRef(null)
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden" ref={parallaxRef}>
      <Blob1 className="top-[10%] left-[10%] 2xl:left-[15%] opacity-80" />

      <Blob2 className="bottom-[10%] right-[10%] 2xl:right-[20%] opacity-50" />
      <div className={`${styles.paddingX} absolute inset-0 xl:items-center items-start xl:top-0 top-[120px] max-w-7xl mx-auto flex flex-row  gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-sec" />
          <div className="w-1 sm:h-80 h-40 black-gradient-back" />
        </div>
        <div className="md:w-[70%]  xl:-translate-y-[3rem] z-[50]">
          <h1 className={`font-varien font-bold lg:text-[50px] sm:text-[30px] xs:text-[20px] text-[20px] mt-2 tracking-wide text-white`}>Satyam <span className="font-bold font-varien text-sec">Stellar</span></h1>
          <p className={`md:w-[70%] w-[90%] font-liberationMono text-white/60 uppercase lg:text-[16px] sm:text-[14px]  text-[10px] md:ml-4 mt-2 `}>
            A dynamic tech enthusiast passionate about IT, quick to learn, and driven by curiosity to solve challenges and innovate.
          </p>
          <div className="flex flex-row gap-1 md:gap-2 mt-4 md:ml-4">
            {techSkills.map((skill, index) => (
              <div key={index}
                className="bg-violet-500 text-[16px] bg-opacity-10 px-4 md:py-1  rounded-[2.3rem] shadow-purple-500 shadow-sm  font-monaco md:text-2xl hover:scale-105 transition-all duration-75 ease-in-out"
              >{skill}</div>
            ))}
          </div>
          <div className="flex flex-row gap-1 md:gap-2 mt-4 md:ml-4 md:mt-8" >
            <button className="uppercase text-white/80 hover:text-white text-md md:text-3xl font-mono bg-purple-700/60 shadow-md shadow-purple-600/80 p-4 py-2 rounded-full text-center outline-none hover:scale-105 transition-all duration-105 ease-in-out">
              Resume/Cv
            </button>
          </div>
        </div>
      </div>
      <div className="relative size-full">

        <ScrollParallax isAbsolutelyPositioned >
          <div className={`absolute top-[40%] right-0 lg:top-[29rem] shadow-black shadow-md lg:right-[29rem] 2xl:top-[39rem] 2xl:right-[48rem] pr-5 backdrop-blur-sm bg-purple-300 bg-opacity-5 p-3 lg:rounded-2xl rounded-l-2xl lg:rounded-tr-none`}>
            <TypeAnimation className="font-monaco text-lg md:text-xl 2xl:text-2xl"
              sequence={[

                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I build websites that drive results.',
                1000,
                'Custom websites for your business growth.',
                1000,
                'Modern, responsive, and impactful designs.',
                1000
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={55}
              repeat={Infinity}
            />
          </div>
        </ScrollParallax>

        <ScrollParallax isAbsolutelyPositioned>
          <div className={`absolute lg:hidden top-[80%] left-0  pl-5 shadow-black shadow-md p-3 lg:rounded-2xl rounded-r-2xl backdrop-blur-sm bg-purple-300 bg-opacity-5`}>
            <TypeAnimation className="font-monaco text-lg md:text-2xl 2xl:text-3xl"
              sequence={[

                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'We produce food for Hamsters',
                1000,
                'You suck at programming',
                1000,
                'But you can improve yourself',
                1000
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={55}
              repeat={Infinity}
            />
          </div>
        </ScrollParallax>
        <div className="size-full lg:pl-[20rem] xl:pl-0">
          <MainRobotCanvas />
        </div>

      </div>
      <BackgroundCircles />
    </section >
  )
}

export default Hero
