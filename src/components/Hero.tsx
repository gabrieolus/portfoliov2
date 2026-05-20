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
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-full max-w-sm rounded-[24px]"
          >
            <Link to="/about" className="block relative w-full h-full rounded-[24px] overflow-hidden cursor-pointer">
              {/* Neutral background with green/white gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-hextech-green/20 to-white/20 blur-xl opacity-70 scale-95 transition-opacity hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-hextech-green/40 to-white/30 rounded-[24px] hextech-border w-full aspect-[4/5] flex items-end justify-center mb-4">
                <img 
                  src="https://res.cloudinary.com/dzjegtldc/image/upload/v1779308616/93e1f170-c305-4ebf-9f17-33f9b9afc9e0v2_1_m06yi6.png" 
                  alt="Gabriel Fiore" 
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
