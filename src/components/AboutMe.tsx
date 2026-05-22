import { motion } from 'motion/react';
import { Diamond, Mail, ArrowLeft } from 'lucide-react';
import { BehanceIcon, LinkedInIcon } from './BrandIcons';
import { Link } from 'react-router-dom';

export default function AboutMe() {
  return (
    <section id="about" className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="group flex flex-row items-center gap-3 text-sm font-display uppercase tracking-[4px] text-hextech-green hover:opacity-80 transition-opacity w-fit">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back
          </Link>
        </div>
        <motion.div

          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-5xl font-display mb-8">About <span className="text-hextech-green">Me</span></h2>
            <div className="space-y-6 text-lg text-aether-white font-light leading-relaxed">
              <p>
                I'm a Product Designer (UI/UX) focused on turning complexity into simplicity. My mission is to create interfaces that not only work, but strengthen the relationship between users and the business.
              </p>
              <p>
                I started in graphic design, but the digital world is where I truly found my place. Since 2021, I've been working on SaaS products in fintech and e-commerce, leading initiatives that range from defining flows and user journeys to delivering consistent, well-documented interfaces.
              </p>
              <p>
                I care deeply about the details that make collaboration smooth, especially when it comes to handoff. To me, a design is only as good as the team's ability to build it accurately, so I put a lot of effort into documentation and clear communication with engineering.
              </p>
              <p>
                Lately, I've been integrating AI into my design process to support decision-making, speed up exploration, and bring better solutions to the table faster.
              </p>
              <p className="font-bold">
                I'm the kind of designer who's not satisfied until everything feels intentional. Not just visually, but structurally.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center items-center">
            <motion.div 
              animate={{ y: [-15, 5, -15] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full max-w-sm cursor-pointer group"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-hextech-green/30 blur-[80px] rounded-full opacity-60 transition-opacity group-hover:opacity-100" />
              <img 
                src="https://res.cloudinary.com/dzjegtldc/image/upload/v1779416579/about-image_vzf3hv.png" 
                alt="About Gabriel Fiore" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-[24px]" 
              />
            </motion.div>
            
            <div className="flex gap-4 mt-8 relative z-10">
              {[
                { icon: <LinkedInIcon width={17} height={17} />, href: "https://www.linkedin.com/in/gabrieolus/" },
                { icon: <Mail width={17} height={17} />, href: "mailto:gafiore11@gmail.com" },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-[4px] hextech-border flex items-center justify-center hover:bg-white/5 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           className="mt-16"
        >
          <div className="border-t border-hextech-green/20 mb-8" />
          
          <h2 className="text-3xl md:text-4xl font-display mb-12">Experience</h2>
          
          <div className="space-y-12">
            {/* BLAZE */}
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">UI/UX Designer</h3>
                <p className="text-aether-white text-[15px]">BLAZE® · Full-time</p>
                <p className="text-aether-white/50 text-sm mt-0.5">Sep 2024 - Apr 2026 · 1 yr 8 mos</p>
                <p className="text-aether-white/50 text-sm mt-0.5 mb-3">Lisbon, Portugal · Remote</p>
                
                <div className="space-y-2 text-aether-white/90 text-[15px] leading-relaxed">
                  <p>• Spearheaded the creation and scaling of comprehensive Design Systems for e-commerce platforms, establishing a Single Source of Truth to ensure visual consistency and accelerate engineering delivery times.</p>
                  <p>• Developed high-fidelity, interactive prototypes in Figma, creating a seamless handoff process that significantly reduced technical ambiguities and rework for development teams.</p>
                  <p>• Optimized complex user journeys and checkout flows through rigorous heuristic analysis, effectively reducing cognitive load and elevating the overall user experience.</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-black/10" />

            {/* KoreConX */}
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">UX/UI Designer</h3>
                <p className="text-aether-white text-[15px]">KoreConX All-In-One Platform</p>
                <p className="text-aether-white/50 text-sm mt-0.5">Oct 2021 - Aug 2024 · 2 yrs 11 mos</p>
                <p className="text-aether-white/50 text-sm mt-0.5 mb-3">Toronto, Canada · Remote</p>
                
                <div className="space-y-2 text-aether-white/90 text-[15px] leading-relaxed">
                  <p>• Redesigned critical dashboards and user flows for the core SaaS platform, focusing on simplifying information architecture to reduce cognitive load and create a more intuitive, efficient user experience.</p>
                  <p>• Spearheaded the design-to-engineering handoff process, implementing best practices that improved operational efficiency and ensured high-quality, consistent product implementation.</p>
                  <p>• Conducted competitive benchmarking to define product standards and guide strategic interface improvements.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10" />

            {/* Content House */}
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">Art Director</h3>
                <p className="text-aether-white text-[15px]">Content House</p>
                <p className="text-aether-white/50 text-sm mt-0.5 mb-3">Mar 2021 - Sep 2021</p>
                
                <div className="space-y-2 text-aether-white/90 text-[15px] leading-relaxed">
                  <p>• Developed strategic visual guidelines that strengthened campaign identity and increased brand consistency.</p>
                  <p>• Led the team's digital transition, expanding capabilities into interface and user experience projects.</p>
                  <p>• Established visual guidelines for digital campaigns aligned with strategic objectives, ensuring brand consistency.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10" />

            {/* Agência KR */}
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">Art Director</h3>
                <p className="text-aether-white text-[15px]">Agência KR</p>
                <p className="text-aether-white/50 text-sm mt-0.5 mb-3">Mar 2020 - Mar 2021</p>
                
                <div className="space-y-2 text-aether-white/90 text-[15px] leading-relaxed">
                  <p>• Conceptualized digital and institutional creative campaigns, reinforcing brand presence across multiple channels.</p>
                  <p>• Developed strategic visual identities aligned with brand positioning, enhancing brand recognition and visual consistency.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           className="mt-16"
        >
          <div className="border-t border-hextech-green/20 mb-8" />
          
          <h2 className="text-3xl md:text-4xl font-display mb-12">Education</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">Centro Universitário Padre Anchieta</h3>
                <p className="text-aether-white text-[15px]">Bachelorʼs Degree in Advertising – Graduated 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
