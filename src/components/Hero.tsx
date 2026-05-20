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
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-sm"
          >
            <Link
              to="/about"
              className="group block border border-hextech-green/20 rounded-[24px] p-8 flex flex-col gap-6 hover:border-hextech-green/50 hover:bg-hextech-green/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-hextech-green/30 flex items-center justify-center group-hover:border-hextech-green/60 transition-colors duration-300">
                <span className="text-hextech-green text-xl">g</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-hextech-green/60 uppercase tracking-widest font-sans">About me</span>
                <p className="text-aether-white font-light leading-relaxed text-sm">
                  Product designer with 4+ years of experience. Based in Brazil, working globally.
                </p>
              </div>

              <div className="flex items-center gap-2 text-hextech-green/60 text-sm group-hover:text-hextech-green group-hover:gap-3 transition-all duration-300">
                <span>Get to know me</span>
                <span>→</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
