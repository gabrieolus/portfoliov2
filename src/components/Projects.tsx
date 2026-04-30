import { motion } from 'motion/react';

const projects = [
  {
    title: 'Campaign Builder for Blaze Ecom',
    description: 'This project focuses on the campaign management section of a cannabis e-commerce dashboard. It helps store owners create and track marketing campaigns in one place.',
    image: 'https://i.postimg.cc/KvSm89KT/cover-campaign-builder.png',
    category: 'Product Design'
  },
  {
    title: 'Blaze Product Page Redesign',
    description: 'The product page created confusion, making it difficult for users to quickly understand the offerings. A new structure made it easy to find products.',
    image: 'https://i.postimg.cc/13PSSfgt/mainpageblaze.png',
    category: 'UI/UX Design'
  },
  {
    title: 'Kore Rebranding',
    description: 'This project showcases the rebranding and logo redesign for Kore, a Canadian fintech offering an all-in-one platform for the private capital market.',
    image: 'https://i.postimg.cc/g2bj1zyT/1.jpg',
    category: 'Branding'
  },
  {
    title: 'Kore - Website',
    description: 'A comprehensive design and illustration project for Kore\'s digital presence, including motion graphics and website layout.',
    image: 'https://i.postimg.cc/prNyxPbX/f4ac37211275387.png', 
    category: 'Web Design'
  }
];

interface ProjectsProps {
  onProjectClick: (id: string) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  return (
    <section id="projects" className="px-6 pt-8 pb-32 max-w-7xl mx-auto">
      <div className="mb-24">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display mb-10"
        >
          Selected <span className="text-hextech-green">Projects</span>
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-aether-white/40 text-lg md:text-xl max-w-xl font-light"
        >
          Explore my selected projects, showcasing my dedication to innovative and heartfelt design.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
            onClick={() => onProjectClick(project.title)}
          >
            <div className="aspect-[4/3] rounded-[4px] overflow-hidden mb-8 bg-worn-carbon hextech-border">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
            <div className="space-y-6">
              <div className="uppercase tracking-[4px] text-[10px] font-bold text-hextech-green/60">
                {project.category}
              </div>
              <h3 className="text-xl md:text-2xl font-display font-normal group-hover:text-hextech-green transition-colors">
                {project.title}
              </h3>
              <p className="text-aether-white/50 text-base leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
