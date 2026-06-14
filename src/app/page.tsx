import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-jet-black text-center text-silver/60 text-sm">
        <p>&copy; {new Date().getFullYear()} Ayush Dubey. All rights reserved.</p>
        <p className="mt-2">Engineered with Next.js, Framer Motion & Lenis.</p>
      </footer>
    </main>
  );
}
