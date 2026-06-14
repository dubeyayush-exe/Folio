"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    role: "Research and Development Intern",
    company: "Defense Research and Development Organization",
    date: "June 2025 - Present",
    image: "/images/NLOS.jpg",
    points: [
      "Built a 3D GRU encoder-decoder pipeline for NLOS imaging, improving scene reconstruction accuracy by 42.7%.",
      "Optimized model runtime to <120ms per scene via TensorRT quantization and CUDA batching, achieving 24 FPS throughput."
    ]
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "Patanjali Ayurveda",
    date: "June 2024 - August 2024",
    image: "/images/abcd.jpg",
    points: [
      "Achieved 12.4% improvement in facial recognition accuracy by deploying a ResNet-18 CNN for biometric twin differentiation.",
      "Reduced sales forecast error by 15.6% by engineering a time-series SARIMAX model on 48+ months of historical data."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-jet-black-light relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-tight">Professional <span className="text-deep-gold">Experience</span></h2>
          <p className="mt-6 text-silver max-w-3xl mx-auto font-light text-lg">A journey through cutting-edge AI/ML applications, delivering measurable impact across diverse domains.</p>
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className={`relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden glass-panel cursor-hover-target group ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <Image 
                  src={exp.image} 
                  alt={exp.company}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
              </div>
              
              <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <h3 className="font-serif text-3xl font-semibold text-white">{exp.company}</h3>
                <p className="text-deep-gold mt-2 text-sm uppercase tracking-widest">{exp.role} | {exp.date}</p>
                <div className="mt-8 text-silver space-y-4 font-light leading-relaxed">
                  {exp.points.map((point, i) => {
                    // Highlight percentages or stats
                    const highlightedPoint = point.replace(/(\d+\.?\d*%|<120ms|3D GRU encoder-decoder pipeline|24 FPS throughput|ResNet-18 CNN|SARIMAX model)/g, '<span class="text-white font-medium">$1</span>');
                    return (
                      <p key={i} dangerouslySetInnerHTML={{ __html: highlightedPoint }} />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
