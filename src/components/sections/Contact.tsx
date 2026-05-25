'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-primary">Connect</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for a highly skilled developer for your next big project? Let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:waiztahseen@gmail.com" target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">Email</h4>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">waiztahseen@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/923473201427" target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">WhatsApp</h4>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">+923473201427</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6 bg-card p-8 rounded-2xl border border-border">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
