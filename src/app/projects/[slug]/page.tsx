import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content/projects");
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ""),
    }));
}

function getProjectContent(slug: string) {
  const contentDir = path.join(process.cwd(), "src/content/projects");
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}

const components = {
  h1: (props: any) => <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl md:text-3xl font-serif font-semibold text-deep-gold mt-10 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium text-white mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="text-silver font-light leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-silver space-y-2 mb-6" {...props} />,
  li: (props: any) => <li className="font-light" {...props} />,
  a: (props: any) => <a className="text-deep-gold hover:underline" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-deep-gold pl-4 italic text-silver/80 my-6" {...props} />,
  pre: (props: any) => <pre className="bg-[#0a0a0a] border border-white/10 p-4 rounded-xl overflow-x-auto my-6 text-sm" {...props} />,
  code: (props: any) => <code className="bg-[#0a0a0a] text-indigo-300 px-1 py-0.5 rounded text-sm" {...props} />,
  img: (props: any) => <img className="rounded-xl border border-white/10 my-8 w-full object-cover max-h-[500px]" {...props} />,
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const content = getProjectContent(resolvedParams.slug);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl font-serif">Project Not Found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-jet-black py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-accent/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-silver hover:text-deep-gold transition-colors mb-12 group cursor-hover-target"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        
        <article className="glass-panel p-8 md:p-12 rounded-3xl">
          <MDXRemote source={content} components={components} />
        </article>
      </div>
    </main>
  );
}
