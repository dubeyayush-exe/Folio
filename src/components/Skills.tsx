"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Computer Vision (CNNs, ResNet)", "NLP & LLMs", "Time Series (SARIMAX)"],
  },
  {
    title: "Data Engineering & Tools",
    skills: ["Pandas", "NumPy", "OpenCV", "SQL", "Git", "Docker"],
  },
  {
    title: "Deployment & Optimization",
    skills: ["TensorRT", "CUDA", "FastAPI", "Spring Boot", "REST APIs", "ONNX"],
  },
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "JavaScript/TypeScript", "SQL", "Bash"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10 bg-jet-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-tight">
            Technical <span className="text-deep-gold">Arsenal</span>
          </h2>
          <p className="mt-6 text-silver max-w-3xl mx-auto font-light text-lg">
            A comprehensive toolkit for architecting, optimizing, and deploying intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-deep-gold/30 transition-colors duration-500"
            >
              <h3 className="text-xl font-serif font-semibold text-white mb-6 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-silver font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-deep-gold mr-3 opacity-70"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
