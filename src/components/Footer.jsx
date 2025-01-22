import { motion } from "framer-motion";
import { footerlinks } from "../constant";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full h-[10rem] relative flex items-center lg:h-0 justify-center px-4 backdrop-blur-[2px]"
    >
      <ul className="flex items-center bottom-[5rem] right-[5rem] lg:inline-block lg:absolute flex-wrap justify-center gap-4 lg:gap-10 w-full lg:w-fit">
        {footerlinks.map((logo) => (
          <li
            key={logo.id}
            className="w-10 h-10  border lg:mt-4 border-white/40 p-2 rounded-full overflow-hidden hover:scale-110 hover:shadow-md transition-transform duration-200"
          >
            <a href={logo.link} target="_blank">
              <img
                src={logo.icon}
                alt={logo.name || "Footer link"}
                className="w-full h-full object-contain"
              />
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Footer;

