import { getPostBySlug } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // در نسخه جدید نکست، باید پارامز را اِویت کنیم
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative bg-[#020617] text-white min-h-screen pb-24">
      <Navbar />
      
      <div className="relative h-[60vh] w-full overflow-hidden">
        {post.featuredImage?.node?.sourceUrl ? (
          <>
            <img 
              src={post.featuredImage.node.sourceUrl} 
              className="w-full h-full object-cover opacity-40"
              alt={post.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cyan-900/20 to-violet-900/20" />
        )}
        
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl w-full text-center">
            <Reveal>
              <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 mb-8 hover:gap-3 transition-all">
                <ArrowRight size={20} /> بازگشت به خانه
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-6 text-slate-300">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  <Calendar size={18} className="text-cyan-400" />
                  {new Date(post.date).toLocaleDateString('fa-IR')}
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  <User size={18} className="text-violet-400" />
                  {post.author?.node?.name || 'تحلیل‌گر'}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
        <Reveal delay={0.3}>
          <div className="glass-dark rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-2xl">
            <article 
              className="prose prose-invert prose-cyan max-w-none 
              prose-headings:font-bold prose-headings:text-white
              prose-p:text-slate-300 prose-p:leading-8 prose-p:text-lg
              prose-img:rounded-3xl
              prose-strong:text-cyan-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
