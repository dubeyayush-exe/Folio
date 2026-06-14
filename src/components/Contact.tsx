"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.5 5.5 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.5 1.6-5-2.5-7-3"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 bg-jet-black-light border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Let's <span className="text-deep-gold italic">Connect</span>
          </h2>
          <p className="text-xl text-silver font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you have an exciting project, a role to discuss, or just want to chat about the latest in AI and ML, my inbox is always open.
          </p>

          <motion.a 
            href="mailto:sample@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-deep-gold text-jet-black font-medium uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 rounded-full cursor-hover-target mb-16"
          >
            <Mail className="mr-3" size={20} />
            Say Hello
          </motion.a>

          <div className="flex justify-center space-x-8">
            <SocialLink href="https://github.com/dubeyayush-exe" icon={<GithubIcon size={24} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/dubeyayush-exe" icon={<LinkedinIcon size={24} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com/sample" icon={<EmailIcon size={24} />} label="Twitter" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, color: "#C5A059" }} // deep-gold color
      className="text-silver hover:text-deep-gold transition-colors duration-300 p-2 cursor-hover-target"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
