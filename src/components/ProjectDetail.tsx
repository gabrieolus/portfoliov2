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
    description: 'This project focuses on the campaign management section of a cannabis e-commerce dashboard. It helps store owners create and track marketing campaigns in one place.',
    role: 'UX/UI Designer',
    industry: 'E-commerce',
    duration: '2 months',
    image: 'https://i.postimg.cc/KvSm89KT/cover-campaign-builder.png',
    stages: [
      {
        title: 'Overview',
        subtitle: 'PROJECT OVERVIEW',
        content: 'This project focuses on the campaign management section of Blaze ECOM, a cannabis e-commerce admin platform. Store owners needed a way to create, manage, and monitor marketing campaigns — from welcome sequences to abandoned cart flows — directly from their dashboard.\n\nMy role covered the full design process: from interpreting the product brief and mapping user flows, to building the final interface and preparing assets for handoff. The research and problem discovery phases were led by the product team; I was brought in from the briefing stage, responsible for translating those insights into a functional and intuitive experience.',
        image: 'https://i.postimg.cc/26sHR9kL/Mac-Book-Pro-14Incv2.png'
      },
      {
        title: 'Context & Research',
        subtitle: 'DISCOVERY',
        content: "The product team conducted discovery before I joined the project. Based on the brief I received, the main findings were:\n\n• Store owners were spending excessive time creating campaigns due to a rigid, step-by-step flow that required all decisions upfront.\n\n• A significant portion of users abandoned the campaign builder before publishing, often because they couldn't easily revisit earlier choices.\n\n• The existing interface treated all campaign types the same way, even though recurring and one-time campaigns have very different configuration needs.\n\nMy starting point was this briefing. From there, I ran a competitive analysis of tools like Klaviyo, Mailchimp, and ActiveCampaign to understand common patterns and identify where I could take a different approach."
      },
      {
        title: 'The challenge',
        subtitle: 'PROBLEM STATEMENT',
        content: 'The core challenge was reducing friction in the campaign creation process without taking away flexibility. Store owners needed to move fast but the existing flow forced every decision upfront, in a fixed order, with no easy way to go back. The goal was to redesign this experience so users could build campaigns progressively, at their own pace.'
      },
      {
        title: 'The idea',
        subtitle: 'CONCEPTUAL APPROACH',
        content: 'The idea came from questioning the default assumption of campaign builders: that users need to be guided step by step. Instead, I explored what it would look like to treat a campaign as a set of independent modules, each configurable on its own, in any order, giving users structure without forcing a rigid sequence.',
        image: 'https://res.cloudinary.com/dzjegtldc/image/upload/v1779236310/linearvsmodular_pflcnp.png',
        imageSize: 'small'
      },
      {
        title: 'Main focus',
        subtitle: 'CORE PRIORITIES',
        centerBox: true,
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
        centerBox: true,
        content: (
          <span>
            The final solution is a modular campaign builder that separates the creation flow into independent, reconfigurable sections, allowing store owners to build campaigns at their own pace without losing progress or context.
            {'\n\n'}
            As a designer who joined after the research phase, I didn't have direct access to post-launch performance data. However, the success criteria aligned with the product team from the start were clear, and if I were to define how I'd measure this solution's impact, I would track three things:
            {'\n\n'}
            • <span className="text-hextech-green font-bold">Task Completion Rate</span>: Monitoring the percentage of users who complete the campaign creation flow to see if we successfully decreased drop-off before publishing.
            {'\n\n'}
            • <span className="text-hextech-green font-bold">Time to Publish</span>: Tracking the average time from campaign creation to first publish to ensure we reduced the time users spent configuring a campaign.
            {'\n\n'}
            • <span className="text-hextech-green font-bold">Support Ticket Volume</span>: Measuring the reduction in support contacts related to campaign management to confirm the interface is more intuitive and less frustrating.
            {'\n\n'}
            These were the exact problems the brief pointed to, and they are the right indicators to know whether the design actually solved them.
          </span>
        ),
        image: 'https://i.postimg.cc/KjGYFMPD/outcome.png'
      },
      {
        title: 'Learnings',
        subtitle: 'TAKEAWAYS',
        centerBox: true,
        content: "Working from a PM brief, without direct access to user research, pushed me to ask better questions before opening Figma. I learned to treat the briefing as a starting point, not a spec: map the assumptions, identify the gaps, and align on what we actually knew versus what we were betting on.\n\nIf I were to revisit this project, I would have pushed for at least one round of usability testing on the campaign creation flow before locking the modular structure. The concept made sense in theory, but I never got the chance to watch a real store owner navigate it from scratch, which is always where the most important insights show up.\n\nThe biggest takeaway: define success criteria at the start of the process, not the end. Designing without a clear metric is designing without a target. And without a target, it's hard to know when the work is actually done."
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
              <div className="text-[10px] uppercase tracking-[4px] text-hextech-green mb-4">
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
                      <img src={imgUrl} alt={`${stage.title} detail ${idx + 1}`} className="w-full h-auto" />
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
                                  <div className="font-display text-hextech-green text-sm font-semibold">{item.label}</div>
                                  <div className="text-aether-white text-[13px] font-light leading-relaxed">{item.text}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-[4px] overflow-hidden hextech-border bg-worn-carbon mt-8 p-8">
                            <img src={stage.comparison.after.image} alt="After" className="w-full h-auto" />
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
                            <img src={sol.image} alt="Design Solution" className="w-full h-auto" />
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
                      <img src={imgUrl} alt={`${stage.title} detail ${idx + 1}`} className="w-full h-auto" />
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
                    <img src={stage.image} alt={stage.title} className="w-full h-auto" />
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
                    <video src={stage.video} autoPlay loop muted playsInline className="w-full h-auto" />
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
                      <img src={imgUrl} alt={`${stage.title} detail ${idx + 1}`} className="w-full h-auto" />
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
                    <img src={stage.afterGridImage} alt={stage.title} className="w-full h-auto" />
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
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all group-hover:scale-105" />
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