import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use"
import gsap from "gsap";

import { styles } from "../styles";

import { navLinks } from "../constant";
import { menu, close, github } from "../assets";


const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)


  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)

  const navContainerRef = useRef(null);


  const { y: currentScrollY } = useWindowScroll();


  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef.current.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav')
    }

    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])


  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2
    })
  }, [isNavVisible])


  return (
    <nav ref={navContainerRef} className={`${styles.paddingX}  flex w-full items-center py-3 transition-all duration-700  border-none fixed  top-4 rounded-2xl z-[99]`}>
      <div className="w-full flex justify-between items-center max-w-7xl  mx-auto rounded-2xl">
        <Link
          to="/"
          className="flex  items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0);
          }}
        >

          <p className="text-white font-varien  text-[20px] font-bold cursor-pointer flex">Stellar</p>
        </Link>
        <ul className="list-none items-center hidden sm:flex flex-row gap-16">

          {navLinks.map((links) => (
            <li
              key={links.id}
              className="  cursor-pointer"
              onClick={() => setActive(links.title)}
            >
              <a className="font-monaco text-[24px] relative transition-all ease-in-out duration-100 group active:text-sec" href={`#${links.id}`}>{links.title}
                <span
                  className="absolute -bottom-1 left-0  h-0.5 w-0 bg-sec transition-all duration-300 group-hover:w-full"
                ></span>
              </a>

            </li>
          ))

          }
          <li className="hover:-translate-y-1 ease-in-out duration-75"> <motion.div whileTap={{ scale: 0.85 }} onClick={() => window.open("https://github.com/satyamStellar", "_blank")}
            className="bg-transparent w-7 h-7 rounded-full flex justify-center items-center cursor-pointer  ">
            <img src={github} alt="github" className="size-full object-contain" />
          </motion.div></li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center " >
          <img src={toggle ? close : menu} alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => { setToggle(!toggle) }}
          />
          <div className={`${!toggle ? "hidden" : "flex"}  p-6 bg-[#06060c]/50 backdrop-blur-sm  absolute top-20 mx-4 right-0 my-2 min-w-[140px] z-[99] rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((links) => (
                <li
                  key={links.id}
                  className={` text-white cursor-pointer text-[14px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(links.title)
                  }}
                >
                  <a className="font-monaco text-[1.3rem]" href={`#${links.id}`}>{links.title}</a>
                </li>
              ))

              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
