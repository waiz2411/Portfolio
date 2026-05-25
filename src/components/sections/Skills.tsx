'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';

export function Skills() {
  const categories = Object.keys(portfolioData.skills) as (keyof typeof portfolioData.skills)[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech <span className="text-primary">Arsenal</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of the tools, languages, and frameworks I use to build scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-semibold mb-6 capitalize flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                {category}
              </h3>
              
              <ul className="space-y-3">
                {portfolioData.skills[category].map((skill) => (
                  <motion.li 
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
