'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';

export function About() {
  return (
    <section id="about" className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                My journey into web development started early. By utilizing modern 
                frameworks alongside advanced AI tools, I've managed to accelerate my learning 
                and development workflow exponentially.
              </p>
              <p>
                I don't just use AI to write code; I use it to architect better solutions, 
                debug complex issues faster, and deliver premium, scalable products. 
                I have single-handedly built extensive platforms like the {portfolioData.projects[0].title}.
              </p>
              <p>
                My philosophy is simple: combine the raw speed of AI with deep human expertise 
                to create world-class digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-foreground mb-2">{portfolioData.personal.projectsCompleted}+</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects Built</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-foreground mb-2">{portfolioData.personal.experience}</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Experience</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl border border-border bg-muted overflow-hidden relative group">
              {/* Fallback pattern since we don't have an image */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 text-9xl font-bold select-none">
                {portfolioData.personal.name.charAt(0) || "W"}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
