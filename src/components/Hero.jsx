import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";

const Hero = () => {

  const [isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = () => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[]);
  
  const x = (<div className="absolute xs:bottom-10 w-full bottom-30 flex justify-center items-center">
  <a href="#about">
    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2" style={{
      transform: 'translateY(-140px)'
    }}>
      <motion.div
        animate={{
          y : [0,24,0],
        }}
        transition = {{
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className='w-3 h-3 rounded-full bg-secondary'
      />
    </div>
  </a>
</div>);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-secondary">Jatin.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full stack web applications using MERN with a wide range of designs, 3D interfaces and applications, and i am looking forward to work with great clients.
          </p>
        </div>
      </div>
      <br/>
      <br/>
      <ComputersCanvas isMobile={isMobile}/>
      {isMobile? x : ''}
    </section>
  );
};

export default Hero;
