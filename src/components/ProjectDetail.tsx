import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

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
    image: 'https://i.postimg.cc/KvSm89KT/cover-campaign-builder.png',
    stages: [
      {
        title: 'Overview',
        subtitle: 'PROJECT OVERVIEW',
        content: 'This project focuses on the campaign management section of a cannabis e-commerce admin dashboard. The goal was to help store owners easily create and monitor marketing campaigns in one place.\n\nThe interface allows users to view campaign performance through key metrics like revenue, orders, click rate, and delivery status. It also supports both recurring and one-time campaigns, making it easy to manage promotions and marketing efforts directly from the dashboard.',
        image: 'https://i.postimg.cc/26sHR9kL/Mac-Book-Pro-14Incv2.png'
      },
      {
        title: 'The challenge',
        subtitle: 'PROBLEM STATEMENT',
        content: 'Campaign builders tend to overload users with steps and decisions. The challenge was simplifying the process without removing control.'
      },
      {
        title: 'The idea',
        subtitle: 'CONCEPTUAL APPROACH',
        content: 'Instead of treating campaigns as a sequence of steps, I approached them as a modular system where users can build, adjust, and iterate more freely.',
        image: 'https://i.postimg.cc/KjQgr4H2/userflow.png',
        imageSize: 'small'
      },
      {
        title: 'Main focus',
        subtitle: 'CORE PRIORITIES',
        content: '• Reducing unnecessary steps\n• Making the flow adaptable instead of linear\n• Keeping key decisions visible throughout the process',
        image: 'https://i.postimg.cc/NgcL4kxd/web-mockup-V1-frontv2123.jpg?dl=1',
        imagesGrid: [
          'https://i.postimg.cc/v8JPPttN/1.jpg',
          'https://i.postimg.cc/HWqSS9tH/2.jpg',
          'https://i.postimg.cc/8kMdCQh7/3.jpg'
        ]
      },
      {
        title: 'Outcome',
        subtitle: 'FINAL RESULTS',
        content: 'The result is a flexible campaign builder designed to balance structure and freedom — allowing users to move faster without losing control.',
        image: 'https://i.postimg.cc/KjGYFMPD/outcome.png'
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
    image: 'https://i.postimg.cc/gcgYb11L/mainpage.jpg',
    stages: [
      {
        title: 'Where the Experience Breaks',
        subtitle: 'USER FRICTION',
        content: 'The existing product page for our cannabis e-commerce platform lacked the clarity needed for an informed purchase. Users were overwhelmed by technical jargon, struggled to identify products suited to their experience level, and faced friction when attempting to purchase in bulk.\n\nThe redesign aims to better communicate this value by simplifying how information is presented and guiding users more effectively through the product experience.'
      },
      {
        title: 'Research and Insights',
        subtitle: 'PROBLEM & GOAL',
        sections: [
          {
            title: 'Problem:',
            items: [
              { label: 'Information Overload:', text: 'Technical data (THC/CBD/Terpenes) was difficult to scan.' },
              { label: 'Lack of Effect Context:', text: 'Users did not understand how a product would physically or mentally impact them.' },
              { label: 'Purchasing Rigidity:', text: 'No clear, intuitive way to select different weights or bulk quantities.' },
              { label: 'Sensory Ambiguity:', text: 'Lack of clarity on flavors and aromatic profiles.' }
            ]
          },
          {
            title: 'Goal:',
            items: [
              { label: 'Cognitive Ease:', text: 'Implementing iconography to explain complex effects.' },
              { label: 'Data Scannability:', text: 'Structuring data to be scannable for both novice and expert users.' },
              { label: 'Purchasing Rigidity:', text: 'Adding a dynamic weight selector to facilitate larger orders.' }
            ]
          }
        ]
      },
      {
        title: 'Wireframe',
        subtitle: 'IDEATION',
        content: 'I created low-fidelity wireframes to explore key flows and functionality. Early prototypes helped refine interactions, and as the design progressed, I increased fidelity to shape the final experience.',
        image: 'https://i.postimg.cc/xfCRfz4K/wireframe.png?dl=1',
        imageSize: 'small'
      },
      {
        title: 'Before/After',
        subtitle: 'TRANSFORMATION',
        comparison: {
          before: {
            header: 'The original interface acted more as a catalog than a decision-making tool.',
            image: 'https://i.postimg.cc/mbM4dPw9/before.png?dl=1',
            points: [
              { label: 'Information Silos:', text: 'Critical data like effects and flavor profiles were missing, forcing users to search elsewhere.' },
              { label: 'Static Purchasing:', text: 'The interface lacked flexibility for users wanting to buy in bulk or select different weights, leading to cart abandonment.' },
              { label: 'Educational Gap:', text: 'Users felt lost regarding the "experience" level of the product, as the UI offered no guidance on strain characteristics.' },
              { label: 'Visual Noise:', text: 'Cluttered layout with poor information hierarchy made it difficult to scan technical details.' }
            ]
          },
          after: {
            header: 'The redesigned interface empowers the user by transforming complex data into intuitive, actionable insights.',
            image: 'https://i.postimg.cc/p2nWgG2m/GIF1.gif?dl=1',
            points: [
              { label: 'Contextual Guidance:', text: 'Integrated Effect Profile icons (Calming, Balanced, Heady) allow users to instantly align the product with their desired experience.' },
              { label: 'Dynamic Flexibility:', text: 'A new Available Weights selector streamlines the purchase flow, enabling easy selection from 1/8 oz to 1 oz without friction.' },
              { label: 'Sensory Transparency:', text: 'Added Top Flavours and a detailed Terpene Breakdown to humanize the product and build consumer trust.' },
              { label: 'Hierarchical Clarity:', text: 'Optimized whitespace and typography create a clean, scannable layout, allowing users to find technical data (THC/CBD) or product descriptions at a glance.' }
            ]
          }
        }
      },
      {
        title: 'Design Solutions',
        subtitle: 'SYSTEM ARCHITECTURE',
        solutions: [
          {
            image: 'https://i.postimg.cc/SShnVFWq/designsolutions.png?dl=1',
            points: [
              { label: 'Contextual Guidance:', text: 'Integrated Effect Profile icons (Calming, Balanced, Heady) allow users to instantly align the product with their desired experience.' },
              { label: 'Dynamic Flexibility:', text: 'A new Available Weights selector streamlines the purchase flow, enabling easy selection from 1/8 oz to 1 oz without friction.' },
              { label: 'Sensory Transparency:', text: 'Added Top Flavours and a detailed Terpene Breakdown to humanize the product and build consumer trust.' },
              { label: 'Hierarchical Clarity:', text: 'Optimized whitespace and typography create a clean, scannable layout, allowing users to find technical data (THC/CBD) or product descriptions at a glance.' }
            ]
          },
          {
            image: 'https://i.postimg.cc/KG21QSn1/designsolutions2.png?dl=1',
            fullWidth: true
          }
        ]
      }
    ]
  },
  'Kore.Builders': {
    title: 'Kore.Builders',
    subtitle: 'Platform',
    description: 'A specialized platform for the private capital market, designed to empower developers and founders with the infrastructure needed to build and launch financial products.',
    role: 'UI/UX Designer',
    industry: 'Fintech / Infrastructure',
    duration: '1 month',
    image: 'https://i.postimg.cc/yYqPL7zD/2.gif',
    gallery: [
      'https://i.postimg.cc/5JRZzvCx/v2.png',
      'https://i.postimg.cc/nZ9NGz4M/v3.png'
    ],
    stages: []
  },
  'Kore Rebranding': {
    title: 'Kore Rebranding',
    subtitle: 'Fintech Identity',
    description: 'This project showcases the rebranding and logo redesign for Kore, a Canadian fintech offering an all-in-one platform for the private capital market.',
    role: 'UI/UX Designer / Visual Designer',
    industry: 'Fintech',
    duration: '6 months',
    image: 'https://i.postimg.cc/rsvRT9JX/2.gif',
    gallery: [
      'https://i.postimg.cc/3xjzjvXX/6.jpg',
      'https://i.postimg.cc/ht8N8dL0/7.jpg',
      'https://i.postimg.cc/zGw4wgCj/9.jpg',
      'https://i.postimg.cc/tg4yY5Kk/11.gif',
      'https://i.postimg.cc/432GtcZN/13.gif',
      'https://i.postimg.cc/G2BCjphb/14.gif'
    ],
    stages: [
      {
        title: 'Stage 3. Final Identity',
        subtitle: 'BRAND DELIVERY',
        content: 'Delivered a comprehensive brand package including a new logo, color palette, typography, and visual assets for digital and physical touchpoints.'
      }
    ]
  },
  'Kore - Website': {
    title: 'Kore - Website',
    subtitle: 'Web Presence',
    description: 'In this project, we showcase a selection of UI/UX design, illustrations, and motion graphics created for the Kore websites ecosystem. Kore is a Canadian company that provides an All-In-One platform dedicated to the private capital market. Our goal was to maintain a cohesive visual identity across all projects, adapting it strategically for each of Kore’s distinct fronts. As a bonus, we also present some elements designed for a previous company initiative page.',
    role: 'UI/UX Designer',
    industry: 'Fintech',
    duration: '3 months',
    image: 'https://i.postimg.cc/prNyxPbX/f4ac37211275387.png',
    gallery: [
      'https://i.postimg.cc/432GtcZN/13.gif',
      'https://i.postimg.cc/G2BCjphb/14.gif',
      'https://i.postimg.cc/jjCx8Tsz/1.gif',
      'https://i.postimg.cc/RhxvVnwn/10.gif',
      'https://i.postimg.cc/s28VqLxF/11.jpg',
      'https://i.postimg.cc/Kjhmvgt1/12.gif',
      'https://i.postimg.cc/0N38F4Qd/2.jpg',
      'https://i.postimg.cc/FRL94xkm/5.gif',
      'https://i.postimg.cc/tgfXwcTz/6.jpg',
      'https://i.postimg.cc/zfMJ6QBj/7.jpg',
      'https://i.postimg.cc/8561SbfF/8.gif',
      'https://i.postimg.cc/43MJq0dM/9.jpg'
    ],
    stages: []
  }
};

export default function ProjectDetail({ projectId, onBack, onProjectClick }: ProjectDetailProps) {
  const project = PROJECT_DATA[projectId] || PROJECT_DATA['Campaign Builder for Blaze Ecom'];

  return (
    <div className="min-h-screen bg-forge-void text-aether-white pt-32">
      {/* Back Button */}
      <div className="mb-16">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-sm font-display uppercase tracking-[4px] text-hextech-green hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </button>
      </div>

      {/* Header */}
      <section className="mb-20 text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-7xl font-display mb-8 md:max-w-[90%] mx-auto"
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
          className="text-lg md:text-xl text-aether-white/60 md:max-w-[90%] mx-auto font-light leading-relaxed"
        >
          {project.description}
        </motion.p>
      </section>

      {/* Info Grid */}
      <section className="mb-20">
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
      <section className="mb-20">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="w-full rounded-[4px] overflow-hidden bg-worn-carbon hextech-border group"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto transition-transform duration-700 group-hover:scale-102"
          />
        </motion.div>
      </section>

      {/* Stages Section */}
      <section className="space-y-24 mb-32 text-aether-white/80">
        {/* Gallery Section */}
        {project.gallery && (
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 my-20">
            {project.gallery.map((img: string, index: number) => {
              // Custom pattern for Kore - Website: 2 per row, then 3 per row
              // Row 1 (index 0,1): 2 items -> col-span-3
              // Row 2 (index 2,3,4): 3 items -> col-span-2
              // Row 3 (index 5,6): 2 items -> col-span-3
              // Row 4 (index 7,8,9): 3 items -> col-span-2
              // Row 5 (index 10,11): 2 items -> col-span-3
              
              let colSpan = "md:col-span-2"; // default for 3 items
              
              if (projectId === 'Kore.Builders') {
                colSpan = "md:col-span-6"; // 1 item row
              } else if (projectId === 'Kore - Website') {
                const patternIndex = index % 5;
                if (patternIndex < 2) {
                  colSpan = "md:col-span-3"; // 2 items row
                } else {
                  colSpan = "md:col-span-2"; // 3 items row
                }
              } else if (project.gallery.length % 3 !== 0 && project.gallery.length % 2 === 0) {
                // FALLBACK: If not 3-divisible but 2-divisible, use 2 columns
                colSpan = "md:col-span-3";
              }

              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`rounded-[4px] overflow-hidden bg-worn-carbon hextech-border ${colSpan}`}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} Gallery ${index + 1}`} 
                    className="w-full h-auto"
                  />
                </motion.div>
              );
            })}
          </div>
        )}

        {project.stages.map((stage: any, i: number) => {
          const stageLabel = i === 0 ? 'OVERVIEW' : i.toString().padStart(2, '0');
          // Try to extract title if it starts with "Stage X. "
          const displayTitle = stage.title.replace(/^Stage \d+\. /, '').toUpperCase();

          return (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4 text-center">
                <span className="text-[10px] font-mono text-hextech-green/40 tracking-[4px]">{stageLabel}</span>
                <h2 className="text-4xl md:text-6xl font-display text-aether-white uppercase tracking-tighter max-w-5xl mx-auto">{displayTitle}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-center">
                <div className={`md:col-span-12 space-y-6 text-lg font-light leading-relaxed text-aether-white/80 whitespace-pre-line max-w-5xl mx-auto ${i === 4 ? 'text-center bg-worn-carbon/30 p-4 rounded-[4px] border border-hextech-green/20' : ''}`}>
                  {stage.content && <p>{stage.content}</p>}
                  
                  {stage.sections && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                      {stage.sections.map((section: any, idx: number) => (
                        <div key={idx} className="space-y-8 bg-worn-carbon/30 p-8 md:p-12 rounded-[4px] border border-hextech-green/10 h-full">
                          <h3 className="text-2xl font-display text-hextech-green uppercase tracking-widest">{section.title}</h3>
                          <div className="space-y-6">
                            {section.items.map((item: any, i: number) => (
                              <div key={i} className="space-y-1">
                                <div className="font-display text-aether-white text-lg leading-tight">{item.label}</div>
                                <div className="text-aether-white/50 text-base font-light leading-relaxed">{item.text}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {stage.comparison && (
                   <div className="grid grid-cols-1 gap-12 mt-12 max-w-4xl mx-auto text-left">
                      {/* Before */}
                      <div className="space-y-8">
                        <div className="bg-worn-carbon/30 p-6 md:p-8 rounded-[4px] border border-hextech-green/10 space-y-6 h-full flex flex-col">
                          <div className="space-y-4 flex-grow">
                            <h3 className="text-xl font-display text-aether-white/60 uppercase tracking-widest">Before</h3>
                            <p className="text-base text-aether-white/90 font-light leading-relaxed">
                              {stage.comparison.before.header}
                            </p>
                            <div className="space-y-4 pt-4">
                              {stage.comparison.before.points.map((item: any, i: number) => (
                                <div key={i} className="space-y-1">
                                  <div className="font-display text-aether-white/80 text-sm">{item.label}</div>
                                  <div className="text-aether-white/40 text-[13px] font-light leading-relaxed">{item.text}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon mt-8 p-8">
                            <img src={stage.comparison.before.image} alt="Before" className="w-full h-auto" />
                          </div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="space-y-8">
                        <div className="bg-worn-carbon/30 p-6 md:p-8 rounded-[4px] border border-hextech-green/10 space-y-6 h-full flex flex-col">
                          <div className="space-y-4 flex-grow">
                            <h3 className="text-xl font-display text-hextech-green uppercase tracking-widest">After</h3>
                            <p className="text-base text-aether-white font-light leading-relaxed">
                              {stage.comparison.after.header}
                            </p>
                            <div className="space-y-4 pt-4">
                              {stage.comparison.after.points.map((item: any, i: number) => (
                                <div key={i} className="space-y-1">
                                  <div className="font-display text-hextech-green/80 text-sm">{item.label}</div>
                                  <div className="text-aether-white/60 text-[13px] font-light leading-relaxed">{item.text}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon mt-8 p-8">
  {stage.comparison.after.video ? (
    <video
      src={stage.comparison.after.video}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto"
    />
  ) : (
    <img src={stage.comparison.after.image} alt="After" className="w-full h-auto" />
  )}
</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {stage.solutions && (
                    <div className="space-y-24 mt-12">
                      {stage.solutions.map((sol: any, idx: number) => (
                        <div key={idx} className={`grid grid-cols-1 ${sol.fullWidth ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-12 items-start`}>
                          {!sol.fullWidth && sol.points && (
                            <div className="space-y-8">
                              {sol.points.map((item: any, i: number) => (
                                <div key={i} className="space-y-2">
                                  <div className="font-display text-hextech-green text-lg tracking-wide">{item.label}</div>
                                  <div className="text-aether-white/60 text-[15px] font-light leading-relaxed">{item.text}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`rounded-[4px] overflow-hidden bg-worn-carbon shadow-2xl ${sol.fullWidth ? 'w-full' : ''}`}
                          >
                            <img src={sol.image} alt="Design Solution" className="w-full h-auto" />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {stage.image && (
                <div className={`w-full mt-16 ${stage.imageSize === 'small' ? 'flex justify-center' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`rounded-[4px] overflow-hidden hextech-border bg-worn-carbon shadow-2xl shadow-black/50 ${stage.imageSize === 'small' ? 'md:w-3/4 w-full mx-auto' : 'w-full'}`}
                  >
                    <img src={stage.image} alt={stage.title} className="w-full h-auto" />
                  </motion.div>
                </div>
              )}

              {stage.imagesGrid && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                  {stage.imagesGrid.map((imgUrl: string, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon shadow-xl shadow-black/30"
                    >
                      <img src={imgUrl} alt={`${stage.title} detail ${idx + 1}`} className="w-full h-auto" />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}

      </section>

      {/* Divider */}
      <div className="w-1/3 mx-auto h-[1px] bg-hextech-green/40 mt-32" />

      {/* Other Projects Section */}
      <section className="pb-32 pt-16">
        <div className="text-center">
          <h2 className="text-3xl font-display mb-16 max-w-5xl mx-auto">Other <span className="text-hextech-green">projects</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
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
                  <p className="text-aether-white/40 font-light max-w-3xl">{p.description}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
