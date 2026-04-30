import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
  onProjectClick: (id: string) => void;
}

const PROJECT_DATA: Record<string, any> = {
  'Campaign Builder for Blaze Ecom': {
    title: 'Campaign Builder for Blaze Ecom',
    subtitle: 'Blaze Ecom',
    description: 'This project focuses on the campaign management section of a cannabis e-commerce dashboard. It helps store owners create and track marketing campaigns in one place.',
    role: 'UX/UI Designer',
    industry: 'E-commerce',
    duration: '2 months',
    image: '/regenerated_image_1777404142590.png',
    stages: [
      {
        title: 'Stage 1. Product Understanding',
        content: 'Started by analyzing the campaign management experience within the platform. The goal was to simplify how users create, manage, and track marketing campaigns in one place. Identified key friction points around navigation, campaign setup, and performance visibility.',
        image: 'https://i.postimg.cc/N56gftgh/czxzvcx.png'
      },
      {
        title: 'Stage 2. Design Strategy',
        content: 'Defined a simpler and more structured flow for campaign creation and management. Focused on: Clear hierarchy of information, easier access to key metrics, supporting both one-time and recurring campaigns. The goal was to reduce complexity while improving usability and clarity.'
      },
      {
        title: 'Stage 3. Interface & Experience Design',
        content: 'Designed a centralized view where users can track performance through metrics like revenue, orders, click rate, and delivery status. Simplified the process of setting up campaigns, making it faster and more intuitive. Created a clean and functional interface that highlights important data and improves overall readability.'
      },
      {
        title: 'Stage 4. Outcome',
        content: '"The final experience makes campaign management feel simpler, faster, and more transparent. Store owners can now create, monitor, and optimize their campaigns with confidence all from one place."',
        italic: true
      }
    ]
  },
  'Blaze Product Page Redesign': {
    title: 'Blaze Product Page Redesign',
    subtitle: 'Apex Pages',
    description: 'The product page created confusion, making it difficult for users to quickly understand the offerings. A new structure made it easy to find products.',
    role: 'UX/UI Designer',
    industry: 'E-commerce',
    duration: '1 month',
    image: '/regenerated_image_1777404144725.png',
    gallery: [
      '/regenerated_image_1777545166797.png',
      '/regenerated_image_1777545168272.png',
      '/regenerated_image_1777545172023.png',
      '/regenerated_image_1777545172983.png'
    ],
    stages: [
      {
        title: 'Stage 1. Problem Identification',
        content: 'Users reported difficulty in finding key product specifications and pricing options. The layout was cluttered and lacked clear call-to-actions.'
      },
      {
        title: 'Stage 2. Information Architecture',
        content: 'Restructured the product information hierarchy to prioritize high-value data. Grouped related features and simplified the selection process for variable products.'
      },
      {
        title: 'Stage 3. Visual Overhaul',
        content: 'Implemented a clean, grid-based layout that maintains consistency with the brand identity while improving readability across devices.'
      }
    ]
  },
  'Kore Rebranding': {
    title: 'Kore Rebranding',
    subtitle: 'Fintech Identity',
    description: 'This project showcases the rebranding and logo redesign for Kore, a Canadian fintech offering an all-in-one platform for the private capital market.',
    role: 'Visual Designer',
    industry: 'Fintech',
    duration: '3 months',
    image: '/regenerated_image_1777404148000.png',
    gallery: [
      '/kore_rebranding.png',
      '/regenerated_image_1777404148000.png',
      '/regenerated_image_1777404141454.png',
      '/regenerated_image_1777411522456.png',
      '/regenerated_image_1777545166797.png',
      '/regenerated_image_1777545172023.png'
    ],
    stages: [
      {
        title: 'Stage 1. Brand Audit',
        content: 'Conducted a deep dive into Kore\'s core values and market positioning. Identified the need for a more professional yet approachable visual language.'
      },
      {
        title: 'Stage 2. Concept Development',
        content: 'Explored multiple directions for the logo, focusing on themes of connectivity, stability, and growth in the private capital market.'
      },
      {
        title: 'Stage 3. Final Identity',
        content: 'Delivered a comprehensive brand package including a new logo, color palette, typography, and visual assets for digital and physical touchpoints.'
      }
    ]
  },
  'Kore - Website': {
    title: 'Kore - Website',
    subtitle: 'Web Presence',
    description: 'A comprehensive design and illustration project for Kore\'s digital presence, including motion graphics and website layout.',
    role: 'Web Designer & Illustrator',
    industry: 'Fintech',
    duration: '3 months',
    image: '/regenerated_image_1777404141454.png',
    stages: [
      {
        title: 'Stage 1. Content Strategy',
        content: 'Mapped out the user journey to ensure clear communication of Kore\'s complex service offerings to potential investors and clients.'
      },
      {
        title: 'Stage 2. Visual Language',
        content: 'Integrated custom illustrations and subtle motion graphics to bring the brand to life and guide users through the financial narratives.'
      },
      {
        title: 'Stage 3. Responsive Web Design',
        content: 'Developed a fully responsive website that maintains its visual integrity and performance across all screen sizes.'
      }
    ]
  }
};

export default function ProjectDetail({ projectId, onBack, onProjectClick }: ProjectDetailProps) {
  const project = PROJECT_DATA[projectId] || PROJECT_DATA['Campaign Builder for Blaze Ecom'];

  return (
    <div className="min-h-screen bg-forge-void text-aether-white pt-32">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-sm font-display uppercase tracking-[4px] text-hextech-green hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </button>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-display mb-12 max-w-4xl"
        >
          {project.title.split(project.subtitle).map((part: string, i: number) => (
            <span key={i}>
              {part}
              {i === 0 && project.title.includes(project.subtitle) && <span className="text-hextech-green">{project.subtitle}</span>}
            </span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-aether-white/60 max-w-3xl font-light leading-relaxed"
        >
          {project.description}
        </motion.p>
      </section>

      {/* Info Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Role', value: project.role },
            { label: 'Industry', value: project.industry },
            { label: 'Duration', value: project.duration },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-surface p-8"
            >
              <div className="text-[10px] uppercase tracking-[4px] text-hextech-green mb-4 opacity-60">
                {item.label}
              </div>
              <div className="text-xl md:text-2xl font-display">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="aspect-video w-full rounded-[4px] overflow-hidden bg-worn-carbon hextech-border group"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </section>

      {/* Stages Section */}
      <section className="max-w-3xl mx-auto px-6 space-y-32 mb-48 text-aether-white/80">
        {/* Gallery Section */}
        {project.gallery && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-32">
            {project.gallery.map((img: string, index: number) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-[4px] overflow-hidden bg-worn-carbon hextech-border"
              >
                <img 
                  src={img} 
                  alt={`${project.title} Gallery ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}

        {project.stages.map((stage: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-display text-hextech-green">{stage.title}</h2>
            <div className={`space-y-6 text-lg font-light leading-relaxed ${stage.italic ? 'italic' : ''}`}>
              <p>{stage.content}</p>
            </div>
            {stage.image && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon mt-12"
              >
                <img src={stage.image} alt={stage.title} className="w-full h-auto" />
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Static Visual Context Placeholders (same layout as original) */}
        {projectId === 'Campaign Builder for Blaze Ecom' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="aspect-[4/3] rounded-[4px] bg-worn-carbon hextech-border p-4">
               <div className="w-full h-full bg-matrix-green/10 flex items-center justify-center text-[10px] tracking-[4px] uppercase text-hextech-green/40">Visual Context 01</div>
            </div>
            <div className="aspect-[4/3] rounded-[4px] bg-worn-carbon hextech-border p-4">
               <div className="w-full h-full bg-matrix-green/10 flex items-center justify-center text-[10px] tracking-[4px] uppercase text-hextech-green/40">Visual Context 02</div>
            </div>
          </div>
        )}
      </section>

      {/* Other Projects Section */}
      <section className="bg-worn-carbon/30 border-y hextech-border py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display mb-16">Other <span className="text-hextech-green">projects</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {Object.values(PROJECT_DATA)
               .filter(p => p.title !== projectId)
               .slice(0, 2)
               .map((p, i) => (
                <div 
                  key={i} 
                  className="group cursor-pointer"
                  onClick={() => onProjectClick(p.title)}
                >
                  <div className="aspect-video bg-worn-carbon rounded-[4px] hextech-border mb-6 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-60 transition-all group-hover:opacity-100 group-hover:scale-105" />
                  </div>
                  <h3 className="text-xl font-display mb-2 group-hover:text-hextech-green transition-colors">{p.title}</h3>
                  <p className="text-aether-white/40 font-light">{p.description.substring(0, 80)}...</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}