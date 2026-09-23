import { motion } from 'motion/react';
import { Mail, ArrowLeft, MapPin, Phone } from 'lucide-react';
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
                I'm a Product Designer focused on the part of product work that usually stalls: turning business decisions into specs engineering can build without guessing.
              </p>
              <p>
                I started in graphic design and moved into product in 2021. Since then I've worked remotely with teams in Canada and Europe, on fintech and e-commerce SaaS: building and scaling design systems, designing transactional flows in regulated contexts, and documenting interaction, states and edge cases for handoff.
              </p>
              <p>
                My research work is fully remote: moderated interviews over video call and unmoderated usability tests. I also use AI in my process to explore options faster and support decisions.
              </p>
              <p className="font-bold">
                I'm not satisfied until everything feels intentional. Not just visually, but structurally.
              </p>
              <p>
                Based in Sorocaba, Brazil (UTC-3). Open to remote roles, contractor or full-time.
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
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-[24px]" 
              />
            </motion.div>
            
            <div className="flex gap-4 mt-8 relative z-10">
              {[
                { icon: <LinkedInIcon width={17} height={17} />, href: "https://www.linkedin.com/in/gabrieolus/" },
                { icon: <Mail width={17} height={17} />, href: "mailto:gfioreoliveira@gmail.com" },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-[4px] hextech-border flex items-center justify-center hover:bg-white/5 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-6 w-full max-w-sm space-y-3 text-sm text-aether-white/70">
              <a href="tel:+5511991661151" className="flex items-center justify-center gap-2 hover:text-hextech-green transition-colors">
                <Phone size={15} /> +55 (11) 99166-1151
              </a>
              <p className="flex items-center justify-center gap-2">
                <MapPin size={15} /> Sorocaba, Brazil (UTC-3)
              </p>
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
            {/* Independent */}
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">Product Designer (Independent)</h3>
                <p className="text-aether-white text-[15px]">Bravanz and independent projects · Remote</p>
                <p className="text-aether-white/50 text-sm mt-0.5 mb-3">May 2026 - Present</p>

                <div className="space-y-2 text-aether-white/90 text-[15px] leading-relaxed">
                  <p>• Bravanz: UI and branding for client projects at a design agency serving companies in Japan. Designed solo the design system, UI, and flows for a law firm's client platform where clients follow the status of their legal cases.</p>
                  <p>• Designed a multi-language website (Japanese, Portuguese and Turkish) for a beauty salon in Japan, covering the service catalog, online booking and post-service feedback.</p>
                  <p>• Drake Trade: designed and launched a real-money trading marketplace for in-game items and currencies, built with AI-assisted development tools and deployed on Vercel.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10" />

            {/* BLAZE */}
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">Product Designer (UI/UX Designer)</h3>
                <p className="text-aether-white text-[15px]">Blaze Ecom · Remote (Europe)</p>
                <p className="text-aether-white/50 text-sm mt-0.5 mb-3">August 2024 - April 2026</p>
                
                <div className="space-y-2 text-aether-white/90 text-[15px] leading-relaxed">
                  <p>• Designed the Campaign Builder from zero to one as the sole designer, working directly with a PM: information architecture, component architecture, user flows and interaction specs.</p>
                  <p>• Built and scaled a design system of 200+ documented components, consumed by 8 engineers and 4 product teams, establishing a single source of truth for UI.</p>
                  <p>• Redesigned high-traffic product pages with conversion as the primary success metric, prioritizing changes through heuristic analysis and competitive benchmarking.</p>
                  <p>• Ran A/B tests on conversion pages and usability testing on transactional flows ahead of implementation.</p>
                  <p>• Documented interaction behavior, states and edge cases for handoff, cutting rework between design and engineering.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10" />

            {/* KoreConX */}
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">Product Designer (UI/UX Designer)</h3>
                <p className="text-aether-white text-[15px]">KoreConX All-In-One Platform · Remote (Canada)</p>
                <p className="text-aether-white/50 text-sm mt-0.5 mb-3">October 2021 - August 2024</p>
                
                <div className="space-y-2 text-aether-white/90 text-[15px] leading-relaxed">
                  <p>• Built and maintained the design system spanning four products (KoreConX, KoreTransfer, KoreID and Kore.Builders), unifying components and documentation standards across teams.</p>
                  <p>• Designed KYC and investor onboarding flows in a regulated financial context. Document-upload drop-off fell by 22%, measured via analytics with the marketing team.</p>
                  <p>• Created a handoff methodology using numbered annotations by category (interaction, business rule, data and content, states, accessibility), adopted for the most complex screens, such as the investor dashboard.</p>
                  <p>• Led product design initiatives, partnering directly with engineering and stakeholders.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10" />

            {/* Content House */}
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">Art Director</h3>
                <p className="text-aether-white text-[15px]">Content House · São Paulo, Remote</p>
                <p className="text-aether-white/50 text-sm mt-0.5 mb-3">March 2021 - September 2021</p>
                
                <div className="space-y-2 text-aether-white/90 text-[15px] leading-relaxed">
                  <p>• Led visual direction for digital campaigns and the team's move into interface and user experience work.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-black/10" />

            {/* Agência KR */}
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold text-aether-white mb-1">Art Director</h3>
                <p className="text-aether-white text-[15px]">Agência KR · Jundiaí, São Paulo, Brazil · Remote</p>
                <p className="text-aether-white/50 text-sm mt-0.5 mb-3">March 2020 - March 2021</p>

                <div className="space-y-2 text-aether-white/90 text-[15px] leading-relaxed">
                  <p>• Created digital and institutional campaigns and visual identities aligned with brand positioning.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="border-t border-hextech-green/20 mb-8" />
          <h2 className="text-3xl md:text-4xl font-display mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 text-aether-white/90 text-[15px]">
            {[
              'UI Design', 'Prototyping', 'Remote User Interviews', 'Figma',
              'UX Design', 'Design Systems', 'Usability Testing', 'Adobe Photoshop',
              'Interaction Design', 'Design Tokens', 'A/B Testing', 'Adobe Illustrator',
              'Information Architecture', 'Developer Handoff', 'Heuristic Analysis', 'AI-assisted Design Workflow',
              'User Flows', 'Accessibility (WCAG)', 'Agile Methodologies', 'Responsive and Adaptive Design',
            ].map((skill) => <p key={skill}>• {skill}</p>)}
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
                <h3 className="text-[22px] font-bold text-aether-white mb-1">Bachelor's Degree in Advertising</h3>
                <p className="text-aether-white text-[15px]">Centro Universitário Padre Anchieta · 2020 - 2024</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="border-t border-hextech-green/20 mb-8" />
          <h2 className="text-3xl md:text-4xl font-display mb-8">Languages</h2>
          <p className="text-aether-white text-[15px]">Portuguese (native) · English (fluent, C1)</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/Gabriel_Fiore_Product_Designer_CV.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-3 bg-hextech-green text-forge-void font-bold rounded-full font-display uppercase tracking-[4px] text-xs hover:ring-2 hover:ring-hextech-green hover:ring-offset-2 hover:ring-offset-forge-void transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href="mailto:gfioreoliveira@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 border border-hextech-green text-hextech-green font-bold rounded-full font-display uppercase tracking-[4px] text-xs hover:bg-hextech-green hover:text-forge-void transition-all duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
