import { motion } from 'motion/react';
import { BehanceIcon, LinkedInIcon } from './BrandIcons';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[50px] font-display leading-[55px] tracking-tight mb-12 max-w-3xl"
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

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-5 lg:col-start-8 hidden lg:flex flex-col items-center gap-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="https://res.cloudinary.com/dzjegtldc/image/upload/v1779308616/93e1f170-c305-4ebf-9f17-33f9b9afc9e0v2_1_m06yi6.png"
              alt="Gabriel Fiore"
              className="w-64 h-80 object-cover object-top rounded-[120px] border-2 border-hextech-green/30"
            />
          </motion.div>

          <div className="flex items-center gap-2 bg-white/5 border border-hextech-green/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-hextech-green animate-pulse" />
            <span className="text-sm text-aether-white font-light">Available for work</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
