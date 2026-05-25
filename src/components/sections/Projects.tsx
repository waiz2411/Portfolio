'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';
import { ExternalLink, Code } from 'lucide-react';
import Image from 'next/image';

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work, ranging from complex CRM systems to immersive 3D web games.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="relative h-60 bg-muted overflow-hidden">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                {/* Fallback pattern for missing images */}
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/5 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl font-bold text-muted-foreground/30">{project.category}</span>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.sourceCode && (
                    <a href={project.sourceCode} target="_blank" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                      <Code className="w-4 h-4" /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
