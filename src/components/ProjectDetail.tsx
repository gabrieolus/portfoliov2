import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const SLUG_MAP: Record<string, string> = {
  'blaze-campaign-builder': 'Campaign Builder for Blaze Ecom',
  'blaze-product-page-redesign': 'Blaze Product Page Redesign',
  'kore-builders': 'Kore.Builders',
  'kore-rebranding': 'Kore Rebranding',
  'kore-website': 'Kore - Website'
};

const REV_SLUG_MAP = Object.fromEntries(
  Object.entries(SLUG_MAP).map(([s, t]) => [t, s])
);

const PROJECT_DATA: Record<string, any> = {
  'Campaign Builder for Blaze Ecom': {
    title: 'Campaign Builder for Blaze Ecom',
    subtitle: 'Blaze Ecom',
    description: 'A zero-to-one campaign management platform designed for Blaze Ecom, covering information architecture, component architecture, user flows, and interaction specifications.',
    role: 'Product Designer (sole designer)',
    industry: 'E-commerce SaaS (cannabis retail)',
    duration: '2 months',
    details: [
      { label: 'Role', value: 'Product Designer (sole designer)' },
      { label: 'Team', value: '1 PM, engineering' },
      { label: 'Timeline', value: '2 months' },
      { label: 'Industry', value: 'E-commerce SaaS (cannabis retail)' },
      { label: 'My scope', value: 'Information architecture, component architecture, user flows, interaction specs, final UI and handoff' },
      { label: 'Not my scope', value: 'Discovery and research, led by the product team' },
    ],
    image: '/case-assets/KvSm89KT-cover-campaign-builder.png',
    stages: [
      {
        title: 'Overview',
        subtitle: 'PROJECT OVERVIEW',
        content: 'Blaze Ecom is an e-commerce admin platform for cannabis retailers. Store owners had no way to create and manage marketing campaigns — from welcome sequences to abandoned cart flows — inside their dashboard. The Campaign Builder was a new product area, designed from scratch.\n\nI was the only designer on the project, working directly with the PM. The product team ran discovery; I joined at the brief and owned everything from there: information architecture, flows, component architecture, interaction specs, final interface and handoff.',
        image: '/case-assets/26sHR9kL-Mac-Book-Pro-14Incv2.png'
      },
      {
        title: 'Context',
        subtitle: 'PRODUCT CONTEXT',
        content: "Before this tool, store owners had no campaign tool at all. The brief pointed to three needs:\n\n• Campaign creation had to be fast. Store owners run their shop day to day and can't spend long configuring campaigns.\n\n• Users needed to revisit and change earlier decisions without losing progress.\n\n• Recurring and one-time campaigns have very different configuration needs and couldn't be treated the same way.\n\nFrom the brief, I ran a competitive analysis of Klaviyo, Mailchimp and ActiveCampaign to map common patterns and find where a different approach made sense."
      },
      {
        title: 'The challenge',
        subtitle: 'PROBLEM STATEMENT',
        content: 'Design a campaign builder that lets store owners move fast without taking away flexibility: no forced order, no decisions required upfront, and no lost progress when going back.'
      },
      {
        title: 'The idea',
        subtitle: 'CONCEPTUAL APPROACH',
        content: 'Most campaign builders assume users need to be guided step by step. I questioned that assumption and designed the campaign as a set of independent modules, each configurable on its own and in any order. Users get structure without a rigid sequence.',
        image: 'https://res.cloudinary.com/dzjegtldc/image/upload/v1779236310/linearvsmodular_pflcnp.png',
        imageSize: 'small'
      },
      {
        title: 'Main focus',
        subtitle: 'CORE PRIORITIES',
        centerBox: true,
        content: '• Remove unnecessary steps\n• Make the flow adaptable instead of linear\n• Keep key decisions visible throughout the process',
        image: '/case-assets/NgcL4kxd-web-mockup-V1-frontv2123.jpg',
        imagesGrid: [
          '/case-assets/v8JPPttN-1.jpg',
          '/case-assets/HWqSS9tH-2.jpg',
          '/case-assets/8kMdCQh7-3.jpg'
        ]
      },
      {
        title: 'Outcome',
        subtitle: 'FINAL RESULTS',
        centerBox: true,
        content: (
          <span>
            The result is a modular campaign builder that splits creation into independent, reconfigurable sections, so store owners can build campaigns at their own pace without losing progress or context.
            {'\n\n'}
            I didn't have access to post-launch data. These are the metrics I aligned with the product's success criteria and would use to measure impact:
            {'\n\n'}
            • <span className="text-hextech-green font-bold">Task completion rate:</span> share of users who finish and publish a campaign.
            {'\n\n'}
            • <span className="text-hextech-green font-bold">Time to publish:</span> average time from starting a campaign to publishing it.
            {'\n\n'}
            • <span className="text-hextech-green font-bold">Support ticket volume:</span> contacts related to campaign management.
          </span>
        ),
        image: '/case-assets/KjGYFMPD-outcome.png'
      },
      {
        title: 'Learnings',
        subtitle: 'TAKEAWAYS',
        centerBox: true,
        content: "Working from a PM brief without direct access to research pushed me to ask better questions before opening Figma. I treated the brief as a starting point, not a spec: mapping assumptions, finding gaps and aligning on what we knew versus what we were betting on.\n\nIf I did it again, I'd push for at least one round of usability testing before locking the modular structure. The concept made sense on paper, but watching a real store owner build a campaign from scratch is where the most important insights show up.\n\nThe biggest takeaway: define success criteria at the start, not the end. Without a target, it's hard to know when the work is actually done."
      }
    ]
  },
  'Blaze Product Page Redesign': {
    title: 'Blaze Product Page Redesign',
    subtitle: 'Apex Pages',
    description: 'A product page rebuilt from a catalog into a decision-making tool, so shoppers can understand a product and buy the right amount without prior knowledge.',
    role: 'Product Designer (UI/UX)',
    industry: 'E-commerce (cannabis retail)',
    duration: '1 month',
    details: [
      { label: 'Role', value: 'Product Designer (UI/UX)' },
      { label: 'Timeline', value: '1 month' },
      { label: 'Industry', value: 'E-commerce (cannabis retail)' },
      { label: 'Success metric', value: 'Conversion on product pages' },
      { label: 'Methods', value: 'Heuristic analysis, competitive benchmarking, wireframes, iterative prototypes', wide: true },
    ],
    image: '/case-assets/gcgYb11L-mainpage.jpg',
    stages: [
      {
        title: 'Where the Experience Breaks',
        subtitle: 'USER FRICTION',
        content: "The product page worked more like a catalog than a decision-making tool. Shoppers were overwhelmed by technical terms, couldn't tell which products fit their experience level, and had no easy way to choose different weights or buy in bulk."
      },
      {
        title: 'Research and Insights',
        subtitle: 'PROBLEM & GOAL',
        topImagesGrid: [
          'https://res.cloudinary.com/dzjegtldc/image/upload/v1779299591/annotations_uccj4c.png',
          'https://res.cloudinary.com/dzjegtldc/image/upload/v1779299840/Competitive_Analysis_xdmxnt.png'
        ],
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
              { label: 'Cognitive Ease:', text: 'Helping users understand how a product will affect them without requiring prior cannabis knowledge.' },
              { label: 'Data Scannability:', text: 'Structuring data to be scannable for both novice and expert users.' },
              { label: 'Purchasing Rigidity:', text: 'Adding a dynamic weight selector to facilitate larger orders.' },
              { label: 'Sensory Clarity:', text: 'Surfacing flavor and terpene profiles in a scannable, human-readable format.' }
            ]
          }
        ]
      },
      {
        title: 'Wireframes',
        subtitle: 'IDEATION',
        content: 'I created low-fidelity wireframes to explore key flows and functionality. Early prototypes helped refine interactions, and as the design progressed, I increased fidelity to shape the final experience.',
        preImageGrid: [
          'https://res.cloudinary.com/dzjegtldc/image/upload/v1779301828/v1_wireframe_ldtzln.png',
          'https://res.cloudinary.com/dzjegtldc/image/upload/v1779301498/v2_wireframe_lenbdd.png'
        ],
        image: '/case-assets/xfCRfz4K-wireframe.png',
        imageSize: 'small'
      },
      {
        title: 'Before/After',
        subtitle: 'TRANSFORMATION',
        comparison: {
          before: {
            header: 'The original interface acted more as a catalog than a decision-making tool.',
            image: '/case-assets/mbM4dPw9-before.png',
            points: [
              { label: 'Information Silos:', text: 'Critical data like effects and flavor profiles were missing, forcing users to search elsewhere.' },
              { label: 'Static Purchasing:', text: 'The interface lacked flexibility for users wanting to buy in bulk or select different weights, leading to cart abandonment.' },
              { label: 'Educational Gap:', text: 'Users felt lost regarding the "experience" level of the product, as the UI offered no guidance on strain characteristics.' },
              { label: 'Visual Noise:', text: 'Cluttered layout with poor information hierarchy made it difficult to scan technical details.' }
            ]
          },
          after: {
            header: 'The redesigned interface empowers the user by transforming complex data into intuitive, actionable insights.',
            image: '/case-assets/p2nWgG2m-GIF1.gif',
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
        title: 'Key Decisions',
        subtitle: 'DESIGN RATIONALE',
        solutions: [
          {
            image: '/case-assets/SShnVFWq-designsolutions.png',
            points: [
              { label: 'Effect profile before technical data.', text: 'Most shoppers decide by how a product will make them feel, not by THC percentage. Effect icons (Calming, Balanced, Heady) come first; the technical data stays one glance away for experienced buyers.' },
              { label: 'Weight selector inside the purchase area.', text: 'Choosing between 1/8 oz and 1 oz was a separate, rigid step. Putting the selector next to the price removes a decision point right at the moment of purchase.' },
              { label: 'Flavors and terpenes in plain language.', text: "Shoppers couldn't picture the product. Top flavors and a terpene breakdown give sensory context without requiring prior knowledge." },
              { label: 'One layout for two audiences.', text: 'Hierarchy and spacing let a first-time shopper read the essentials while an expert scans THC/CBD values directly.' }
            ]
          },
          {
            image: '/case-assets/KG21QSn1-designsolutions2.png',
            fullWidth: true
          }
        ]
      },
      {
        title: 'Outcome',
        subtitle: 'RESULTS & MEASUREMENT',
        centerBox: true,
        content: "The redesign shipped with conversion as the primary success metric. Remote usability testing was conducted online through Google Meet after launch, but I had left the company before the results were available.\n\nTo measure its impact, I'd track add-to-cart rate from the product page, the share of orders using larger weights, and time on page before add-to-cart."
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
    image: '/case-assets/yYqPL7zD-2.gif',
    gallery: [
      '/case-assets/5JRZzvCx-v2.png',
      '/case-assets/nZ9NGz4M-v3.png'
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
    image: '/case-assets/rsvRT9JX-2.gif',
    gallery: [
      '/case-assets/3xjzjvXX-6.jpg',
      '/case-assets/ht8N8dL0-7.jpg',
      '/case-assets/zGw4wgCj-9.jpg',
      '/case-assets/tg4yY5Kk-11.gif',
      '/case-assets/432GtcZN-13.gif',
      '/case-assets/G2BCjphb-14.gif'
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
    image: '/case-assets/prNyxPbX-f4ac37211275387.png',
    gallery: [
      '/case-assets/432GtcZN-13.gif',
      '/case-assets/G2BCjphb-14.gif',
      '/case-assets/jjCx8Tsz-1.gif',
      '/case-assets/RhxvVnwn-10.gif',
      '/case-assets/s28VqLxF-11.jpg',
      '/case-assets/Kjhmvgt1-12.gif',
      '/case-assets/0N38F4Qd-2.jpg',
      '/case-assets/FRL94xkm-5.gif',
      '/case-assets/tgfXwcTz-6.jpg',
      '/case-assets/zfMJ6QBj-7.jpg',
      '/case-assets/8561SbfF-8.gif',
      '/case-assets/43MJq0dM-9.jpg'
    ],
    stages: [
      {
        title: 'Design System',
        subtitle: 'FLOW',
        content: 'Built on Atomic Design principles, Flow became the unified design system powering KoreConX. Leveraging the foundational architecture established by former Principal Designer Vinicius Almeida and José Façanha, my team scaled the system into a mature library of components, design tokens, and interaction behaviors that enabled consistency and efficiency across Product Design, Graphic Design, and Engineering.',
        video: 'https://res.cloudinary.com/dzjegtldc/video/upload/v1778512277/Free-Laptop-Mockup_2_z9z0vv.mp4',
        twoColsGrid: [
          'https://res.cloudinary.com/dzjegtldc/image/upload/v1778513322/2_dfpv8y.png',
          'https://res.cloudinary.com/dzjegtldc/image/upload/v1778518535/3_tidejg.png'
        ],
        afterGridImage: 'https://res.cloudinary.com/dzjegtldc/image/upload/v1778519294/4_sf2trr.png'
      }
    ]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const projectId = slug ? SLUG_MAP[slug] : null;
  const project = projectId ? PROJECT_DATA[projectId] : null;

  if (!project) return <div className="pt-40 text-center text-aether-white">Project not found</div>;

  const detailItems = project.details ?? [
    { label: 'Role', value: project.role },
    { label: 'Industry', value: project.industry },
    { label: 'Duration', value: project.duration },
  ];

  return (
    <div className="min-h-screen bg-forge-void text-aether-white pt-32">
      {/* Back Button */}
      <div className="mb-16">
        <Link 
          to="/"
          className="group flex flex-row items-center gap-3 text-sm font-display uppercase tracking-[4px] text-hextech-green hover:opacity-80 transition-opacity w-fit"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
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
          className="text-lg md:text-xl text-aether-white md:max-w-[90%] mx-auto font-light leading-relaxed"
        >
          {project.description}
        </motion.p>
      </section>

      {/* Info Grid */}
      <section className="mb-20">
        <div className="case-info-grid">
          {detailItems.map((item: { label: string; value: string }, i: number) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-surface p-6 lg:p-7 min-w-0"
            >
              <div className="text-[10px] uppercase tracking-[4px] text-hextech-green mb-4">
                {item.label}
              </div>
              <div className={`${project.details ? 'text-base md:text-lg leading-relaxed' : 'text-xl md:text-2xl'} font-display`}>
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
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-102"
          />
        </motion.div>
      </section>

      {/* Stages Section */}
      <section className="space-y-24 mb-32 text-aether-white">
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
                    loading="lazy"
                    decoding="async"
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
                <span className="text-[10px] font-mono text-hextech-green tracking-[4px]">{stageLabel}</span>
                <h2 className="text-4xl md:text-6xl font-display text-aether-white uppercase tracking-tighter max-w-7xl mx-auto">{displayTitle}</h2>
              </div>

              {stage.topImagesGrid && (
                <div className="flex flex-col gap-8 mt-8 mb-12 w-3/4 mx-auto">
                  {stage.topImagesGrid.map((imgUrl: string, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon shadow-xl shadow-black/30"
                    >
                      <img src={imgUrl} alt={`${stage.title} detail ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-auto" />
                    </motion.div>
                  ))}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-center">
                <div className={`md:col-span-12 space-y-6 text-lg font-light leading-relaxed text-aether-white whitespace-pre-line max-w-7xl mx-auto ${stage.contentBox ? 'text-left bg-worn-carbon/30 p-8 md:p-12 rounded-[4px] border border-hextech-green' : stage.centerBox ? 'text-center bg-worn-carbon/30 p-8 md:p-12 rounded-[4px] border border-hextech-green' : 'text-center'}`}>
                  {stage.content && <p>{stage.content}</p>}
                  
                  {stage.sections && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                      {stage.sections.map((section: any, idx: number) => (
                        <div key={idx} className="space-y-8 bg-worn-carbon/30 p-8 md:p-12 rounded-[4px] border border-hextech-green/10 h-full">
                          <h3 className="text-2xl font-display text-hextech-green uppercase tracking-widest">{section.title}</h3>
                          <div className="space-y-6">
                            {section.items.map((item: any, i: number) => (
                              <div key={i} className="space-y-1">
                                <div className="font-display text-aether-white text-lg leading-tight font-semibold">{item.label}</div>
                                <div className="text-aether-white text-base font-light leading-relaxed">{item.text}</div>
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
                            <h3 className="text-xl font-display text-aether-white uppercase tracking-widest">Before</h3>
                            <p className="text-base text-aether-white font-light leading-relaxed">
                              {stage.comparison.before.header}
                            </p>
                            <div className="space-y-4 pt-4">
                              {stage.comparison.before.points.map((item: any, i: number) => (
                                <div key={i} className="space-y-1">
                                  <div className="font-display text-aether-white text-sm font-semibold">{item.label}</div>
                                  <div className="text-aether-white text-[13px] font-light leading-relaxed">{item.text}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon mt-8 p-8">
                            <img src={stage.comparison.before.image} alt="Before" loading="lazy" decoding="async" className="w-full h-auto" />
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
                                  <div className="font-display text-hextech-green text-sm font-semibold">{item.label}</div>
                                  <div className="text-aether-white text-[13px] font-light leading-relaxed">{item.text}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon mt-8 p-8">
                            <img src={stage.comparison.after.image} alt="After" loading="lazy" decoding="async" className="w-full h-auto" />
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
                                  <div className="font-display text-hextech-green text-lg tracking-wide font-semibold">{item.label}</div>
                                  <div className="text-aether-white text-[15px] font-light leading-relaxed">{item.text}</div>
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
                            <img src={sol.image} alt="Design Solution" loading="lazy" decoding="async" className="w-full h-auto" />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {stage.preImageGrid && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full md:w-3/4 mx-auto">
                  {stage.preImageGrid.map((imgUrl: string, idx: number) => (
                    <motion.div 
                      key={`preimg-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon shadow-xl shadow-black/30"
                    >
                      <img src={imgUrl} alt={`${stage.title} detail ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-auto" />
                    </motion.div>
                  ))}
                </div>
              )}

              {stage.image && (
                <div className={`w-full mt-16 ${stage.imageSize === 'small' ? 'flex justify-center' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`rounded-[4px] overflow-hidden hextech-border bg-worn-carbon shadow-2xl shadow-black/50 ${stage.imageSize === 'small' ? 'md:w-3/4 w-full mx-auto' : 'w-full'}`}
                  >
                    <img src={stage.image} alt={stage.title} loading="lazy" decoding="async" className="w-full h-auto" />
                  </motion.div>
                </div>
              )}

              {stage.video && (
                <div className={`w-full mt-16 ${stage.videoSize === 'small' ? 'flex justify-center' : ''}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`rounded-[4px] overflow-hidden hextech-border bg-worn-carbon shadow-2xl shadow-black/50 ${stage.videoSize === 'small' ? 'md:w-3/4 w-full mx-auto' : 'w-full'}`}
                  >
                    <video src={stage.video} autoPlay loop muted playsInline preload="metadata" className="w-full h-auto" />
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
                      <img src={imgUrl} alt={`${stage.title} detail ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-auto" />
                    </motion.div>
                  ))}
                </div>
              )}

              {stage.twoColsGrid && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                  {stage.twoColsGrid.map((imgUrl: string, idx: number) => (
                    <motion.div 
                      key={`twocol-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon shadow-xl shadow-black/30"
                    >
                      <img src={imgUrl} alt={`${stage.title} detail ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-auto" />
                    </motion.div>
                  ))}
                </div>
              )}

              {stage.afterGridImage && (
                <div className="w-full mt-16">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon shadow-2xl shadow-black/50 w-full"
                  >
                    <img src={stage.afterGridImage} alt={stage.title} loading="lazy" decoding="async" className="w-full h-auto" />
                  </motion.div>
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
          <h2 className="text-3xl font-display mb-16 max-w-7xl mx-auto">Other <span className="text-hextech-green">projects</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
             {Object.values(PROJECT_DATA)
               .filter(p => p.title !== projectId)
               .slice(0, 2)
               .map((p, i) => (
                <Link 
                  key={i} 
                  to={`/cases/${REV_SLUG_MAP[p.title]}`}
                  className="group block h-full"
                >
                  <div className="aspect-video bg-worn-carbon rounded-[4px] hextech-border mb-6 overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-all group-hover:scale-105" />
                  </div>
                  <h3 className="text-xl font-display mb-2 group-hover:text-hextech-green transition-colors">{p.title}</h3>
                  <p className="text-aether-white font-light max-w-3xl">{p.description}</p>
                </Link>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
