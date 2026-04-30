import { motion } from 'motion/react';

interface NavbarProps {
  onHomeClick: () => void;
}

export default function Navbar({ onHomeClick }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-forge-void/80 backdrop-blur-md border-b border-hextech-green/10"
    >
      <button 
        onClick={onHomeClick}
        className="hover:opacity-80 transition-opacity flex items-center"
      >
        <div 
          className="w-8 h-8 bg-hextech-green"
          style={{
            maskImage: 'url(https://i.postimg.cc/DWm552Z8/gfiorelogov2.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: 'url(https://i.postimg.cc/DWm552Z8/gfiorelogov2.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
          }}
          aria-label="Gabriel Fiore"
        />
      </button>
      <div className="flex gap-10">
        {[
          { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gabrieolus/' },
          { name: 'Behance', href: 'https://behance.net/gabrieolus' },
        ].map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-aether-white/60 hover:text-hextech-green transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
