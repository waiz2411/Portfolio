'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary">Experience</span></h2>
          <p className="text-lg text-muted-foreground">
            A timeline of my professional journey and freelance career.
          </p>
        </motion.div>

        <div className="relative border-l border-border pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
          
          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background -left-[39px] md:left-auto ${idx % 2 === 0 ? 'md:-right-[8px]' : 'md:-left-[8px]'}`}></div>
              
              <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                <h4 className="text-md font-medium text-muted-foreground mb-4">{exp.company}</h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
