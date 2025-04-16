import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { services } from '../constant';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { styles } from '../styles';
import "../style.css"

import { Blob4, Blob5, Blob6 } from './decoration/Blob1';

const ServiceCard = ({ index, title, icon, description }) => {
  const bgGradients = [
    'from-purple-900/40 to-indigo-900/40',
    'from-cyan-900/40 to-blue-900/40',
    'from-emerald-900/40 to-teal-900/40',
  ];

  const Blobs = [
    <Blob4 key="blob4" className="absolute -top-1/4 left-1/2 -translate-x-1/2 opacity-50 scale-70" />,
    <Blob5 key="blob5" className="absolute -top-[10%] -left-[15%] opacity-50 scale-70" />,
    <Blob6 key="blob6" className="absolute -bottom-[10%] -right-[15%] opacity-50 scale-70" />,
  ];

  return (
    <motion.div
      whileHover={{ y: -6, rotate: index % 2 === 0 ? 0.3 : -0.3 }}
      className={`relative overflow-hidden ${index === 0 ? 'lg:col-span-2' : ''}`}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <Tilt
        options={{
          max: 8,
          scale: 1.02,
          speed: 1000,
          glare: true,
          'max-glare': 0.15,
          transition: true,
          perspective: 1000,
        }}
        className="rounded-2xl"
      >
        <motion.div
          variants={fadeIn('right', 'spring', index * 0.12, 0.6)}
          className={`border border-sec/30 group rounded-2xl shadow-md transition-all duration-500 ease-out hover:shadow-lg bg-gradient-to-br ${bgGradients[index % bgGradients.length]} backdrop-blur-sm`}
        >
          <div className="relative bg-tertiary/25 p-5 min-h-[220px] flex flex-col items-center justify-between overflow-hidden rounded-2xl">
            <div className="animate-blob-smooth">
              {Blobs[index % Blobs.length]}
            </div>

            <div className="relative z-10">
              <Lottie
                animationData={icon}
                style={{
                  width: index === 0 ? 140 : 90,
                  height: index === 0 ? 180 : 90,
                }}
                loop
                className="transition-transform duration-500 ease-out group-hover:scale-105"
                aria-label={`${title} animation`}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid slice',
                  progressiveLoad: true,
                }}
              />
            </div>

            <div className="text-center z-10 space-y-1">
              <h3 className="text-white group-hover:text-sec text-lg font-bold transition-all duration-500 ease-out">
                {title}
              </h3>
              <p className="text-gray-300 text-[10px] font-sfMono leading-tight max-w-[160px] mx-auto truncate">
                {description}
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none" />
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.div
      variants={staggerContainer(0.05, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="lg:flex items-center lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 relative "
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/8 via-sec/4 to-transparent blur-3xl -z-10" />
      <div className="absolute top-0 left-0 w-40 h-40 bg-sec/10 rounded-full filter blur-2xl animate-blob-smooth opacity-30" />
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-accent/10 rounded-full filter blur-2xl animate-blob-smooth animation-delay-2000 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/8 rounded-full filter blur-3xl animate-blob-smooth animation-delay-4000 opacity-25" />

      <motion.div
        variants={fadeIn('right', 'tween', 0.1, 0.8)}
        className="lg:w-[45%] relative z-10"
      >
        <motion.div variants={textVariant(0.1)}>
          <p className={`${styles.sectionSubText} text-sec font-bold tracking-wider mb-2`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} bg-clip-text text-transparent bg-gradient-to-r from-white to-sec mb-4`}>
            Who <span>I Am</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeIn('', '', 0.2, 0.8)} className="space-y-4">
          <p className="text-gray-200 font-sfMono text-[16px] leading-[24px] mb-3">
            A tech enthusiast with a passion for IT, I excel at problem-solving and learning fast. I'm driven by curiosity, always tackling challenges to create innovative solutions.
          </p>

          <div className="space-y-3">
            {[
              {
                text: '3+ years of hands-on experience in web development',
                delay: 0,
              },
              {
                text: 'Specialized in modern JavaScript frameworks and UI/UX design',
                delay: 500,
              },
              {
                text: 'Passionate about creating engaging digital experiences',
                delay: 1000,
              },
            ].map((item, i) => {
              const [firstWord, ...restWords] = item.text.split(' ');
              return (
                <motion.div
                  key={i}
                  variants={fadeIn('up', 'tween', 0.3 + i * 0.08, 0.6)}
                  className="flex items-start mt-2"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-3 h-3 rounded-full bg-sec animate-pulse-smooth"
                      style={{ animationDelay: `${item.delay}ms` }}
                    />
                  </div>
                  <p className="ml-3 text-gray-300 font-sfMono text-[14px] leading-relaxed">
                    <span className="text-sec font-medium">{firstWord}</span>{' '}
                    {restWords.join(' ')}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.1, 0.8)}
        className="lg:w-[55%] mt-10 lg:mt-0 relative z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 0.8)}
          className="mt-6 bg-gray-900/50 backdrop-blur-md rounded-xl p-4 border border-gray-800/50 "
        >
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { value: '100+', label: 'PROJECTS' },
              { value: '3+', label: 'YEARS EXPERIENCE' },
              { value: '∞', label: 'CREATIVE IDEAS' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group"
              >
                <div className="text-xl font-bold animate-pulse  text-purple-500 mb-0.5 group-hover:scale-105 transition-transform duration-500 ease-out">
                  {stat.value}
                </div>
                <div className="text-[10px] font-sfMono text-gray-200 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(About, 'about');

