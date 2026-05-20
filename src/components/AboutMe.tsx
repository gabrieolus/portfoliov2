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
              I am Gabriel Fiore, a Product Designer dedicated to crafting digital experiences that are simple, meaningful, and effective. My background relies on translating user needs into clean, functional solutions that align with business goals. 
            </p>
            <p className="text-lg md:text-xl text-aether-white font-light leading-relaxed">
              Based on the belief that good design solves real problems, I focus heavily on clarity, usability, and scannability — without compromising aesthetic quality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
