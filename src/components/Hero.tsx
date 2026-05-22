import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[50px] font-display leading-[55px] tracking-tight mb-12 max-w-3xl mt-8 md:mt-0"
          >
            I'm <span className="text-hextech-green">Gabriel Fiore</span>, a Product Designer crafting <span className="text-hextech-green">intuitive and impactful digital experiences.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-aether-white mb-12 font-sans font-light leading-relaxed max-w-3xl"
          >
            Designing products that are simple to use, meaningful to people, and effective for business.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-hextech-green text-forge-void font-bold rounded-full font-display uppercase tracking-[4px] text-xs hover:ring-2 hover:ring-hextech-green hover:ring-offset-2 hover:ring-offset-forge-void transition-all duration-300"
            >
              About Me
            </Link>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
          <motion.div
            animate={{ y: [-15, 5, -15] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-full max-w-lg mt-8 lg:mt-0"
          >
            <Link to="/about" className="block relative w-full h-full cursor-pointer group flex items-center justify-center">
              {/* Circular blob for glow effect so it isn't a box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-hextech-green/30 blur-[100px] rounded-full opacity-60 transition-opacity group-hover:opacity-100" />
              
              <div className="relative z-10 w-full flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dzjegtldc/image/upload/v1779415201/heroimage_yh4k9p.png" 
                  alt="Gabriel Fiore" 
                  className="w-full max-w-[425px] md:max-w-[552px] h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
