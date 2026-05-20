import { motion } from 'motion/react';

export default function AboutMe() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-8 space-y-6">
            <h2 className="text-3xl md:text-5xl font-display mb-8">About <span className="text-hextech-green">Me</span></h2>
            <p className="text-lg md:text-xl text-aether-white font-light leading-relaxed">
I'm a Product Designer (UI/UX) passionate about turning complex problems into clean, intuitive experiences. I believe great design lives at the intersection of user needs, business goals, and technical feasibility.
My background started in graphic design, but SaaS products are where I found my calling. Since 2021, I've been working across fintech and e-commerce, shaping end-to-end experiences from early flows and wireframes to polished, production-ready interfaces.
I care deeply about the details that make collaboration smooth, especially when it comes to handoff. To me, a design is only as good as the team's ability to build it accurately, so I put a lot of effort into documentation and clear communication with engineering.
Lately, I've been integrating AI into my design process to support decision-making, speed up exploration, and bring better solutions to the table faster.
I'm the kind of designer who's not satisfied until everything feels intentional. Not just visually, but structurally. </p>
            <p className="text-lg md:text-xl text-aether-white font-light leading-relaxed">
              Based on the belief that good design solves real problems, I focus heavily on clarity, usability, and scannability — without compromising aesthetic quality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
