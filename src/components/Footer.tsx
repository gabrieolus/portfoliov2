import { BehanceIcon, LinkedInIcon } from './BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-green-500 w-full">
      <div className="w-full px-6 text-center">
        <div className="flex justify-center mb-10">
          <div className="flex gap-4">
            {[
              <a href="https://www.linkedin.com/in/gabrieolus/" target="_blank" rel="noopener noreferrer"><LinkedInIcon width={17} height={17} /></a>,
              <a href="https://behance.net/gabrieolus" target="_blank" rel="noopener noreferrer"><BehanceIcon width={20} height={20} /></a>,
            ].map((icon, i) => (
              <div key={i} className="w-11 h-11 rounded-[4px] hextech-border flex items-center justify-center hover:bg-white/5 transition-all">
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="text-[9px] text-aether-white/20 uppercase tracking-[4px] font-bold">
          Copyright {currentYear} by Gabriel Fiore • Product Designer
        </div>
      </div>
    </footer>
  );
}
