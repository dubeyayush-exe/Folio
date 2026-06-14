"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "medical-image-analysis",
    title: "Medical Image Analysis",
    description: "ResNet-18 architecture in PyTorch for multi-modal medical image feature extraction, improving accuracy to 88.3%.",
    image: "/images/abc.jpg"
  },
  {
    id: "secure-authentication",
    title: "Secure Authentication",
    description: "Robust authentication microservice using Spring Boot & JWT, supporting over 3,000 concurrent users.",
    image: "/images/peakpx.jpg"
  },
  {
    id: "heart-failure-prediction",
    title: "Heart Failure Prediction",
    description: "Designed a multilayer ANN achieving 87% test accuracy, published under peer review at ICETET-SIP.",
    image: "/images/abcdf.jpg"
  }
];

function PixelImage({ src, alt }: { src: string; alt: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !img || !wrapper) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let hoverVal = 0;
    let animating = false;
    let targetHover = isHovered ? 1 : 0;
    let animationFrameId: number;

    const setupCanvas = () => {
      canvas.width = wrapper.clientWidth;
      canvas.height = wrapper.clientHeight;
    };

    if (img.complete) setupCanvas();
    else img.onload = setupCanvas;

    window.addEventListener("resize", setupCanvas);

    const renderPixelated = () => {
      if (hoverVal <= 0.01) {
        canvas.style.opacity = "0";
        img.style.opacity = "1";
        if (targetHover === 0) {
          animating = false;
          return;
        }
      } else {
        canvas.style.opacity = "1";
        img.style.opacity = Math.max(0, 1 - hoverVal * 2).toString();
      }

      const v = hoverVal * hoverVal;
      const pixelSize = Math.max(1, v * 40);

      const w = canvas.width;
      const h = canvas.height;
      const sw = Math.max(1, Math.floor(w / pixelSize));
      const sh = Math.max(1, Math.floor(h / pixelSize));

      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, sw, sh);
      ctx.drawImage(canvas, 0, 0, sw, sh, 0, 0, w, h);

      if (animating) {
        hoverVal += (targetHover - hoverVal) * 0.15;
        animationFrameId = requestAnimationFrame(renderPixelated);
      }
    };

    if (!animating && hoverVal !== targetHover) {
      animating = true;
      renderPixelated();
    }

    return () => {
      window.removeEventListener("resize", setupCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div 
      ref={wrapperRef}
      className="relative w-full aspect-video bg-black overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        ref={imgRef} 
        src={src} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" 
      />
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ imageRendering: "pixelated" }} 
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-jet-black via-jet-black-light to-jet-black z-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-tight">Signature <span className="text-deep-gold">Projects</span></h2>
          <p className="mt-6 text-silver max-w-3xl mx-auto font-light text-lg">Innovative architecture design, meticulous optimization, and a relentless pursuit of excellence.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link 
                href={`/projects/${project.id}`} 
                className="block glass-panel rounded-2xl overflow-hidden cursor-hover-target group border border-white/5 hover:border-deep-gold/30 transition-colors duration-500"
              >
                <PixelImage src={project.image} alt={project.title} />
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-deep-gold transition-colors duration-300">{project.title}</h3>
                  <p className="mt-3 text-silver font-light leading-relaxed">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
