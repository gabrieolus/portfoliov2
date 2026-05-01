import { motion } from 'motion/react';
import { BehanceIcon, LinkedInIcon } from './BrandIcons';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="flex items-center gap-6 mb-10"
          >
            <img 
              src="https://i.postimg.cc/4xZJVtKD/headshotgabriel.png" 
              alt="Gabriel Fiore" 
              className="w-24 h-24 rounded-full object-cover border-2 border-hextech-green/30 shadow-[0_0_20px_rgba(30,255,188,0.1)]"
            />
          </motion.div>

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
            className="text-lg md:text-xl text-aether-white/60 mb-12 font-sans font-light leading-relaxed max-w-3xl"
          >
            Designing products that are simple to use, meaningful to people, and effective for business.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            {[
              { icon: <LinkedInIcon width={17} height={17} />, href: "https://www.linkedin.com/in/gabrieolus/" },
              { icon: <BehanceIcon width={20} height={20} />, href: "https://behance.net/gabrieolus" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 hextech-border rounded-[4px] flex items-center justify-center hover:bg-white/5 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
