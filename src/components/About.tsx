"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Behind the <br/> <span className="text-deep-gold italic">Algorithms</span>
            </h2>
            <div className="space-y-6 text-lg text-silver font-light leading-relaxed">
              <p>
                I am a passionate AI/ML Engineer with a relentless drive for building systems that bridge the gap between complex algorithms and real-world applications.
              </p>
              <p>
                My journey spans cutting-edge research in Defense environments—developing 3D non-line-of-sight imaging architectures—to designing scalable, predictive models for the FMCG industry.
              </p>
              <p>
                Whether it's optimizing TensorRT pipelines for edge devices or designing neural networks for medical imaging, I thrive on pushing the boundaries of what's computationally possible.
              </p>
            </div>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-10 px-8 py-4 border border-deep-gold/50 text-deep-gold uppercase tracking-widest text-sm hover:bg-deep-gold hover:text-jet-black transition-colors duration-300 rounded-full cursor-hover-target"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 md:w-96 md:h-[28rem] rounded-2xl glass-panel p-3 cursor-hover-target group">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image 
                  src="/images/Snapchat.jpg" 
                  alt="Ayush Dubey" 
                  fill
                  className="object-cover filter grayscale sepia-[0.3] hue-rotate-[220deg] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-indigo-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                
                {/* Glitch Overlay Text */}
                <div className="absolute -bottom-6 -right-4 md:-right-8 text-7xl md:text-9xl font-black text-white/5 font-serif select-none pointer-events-none group-hover:text-deep-gold/10 transition-colors duration-500">
                  AYUSH
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
