"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image?: string;
}

export default function PostCard({ title, excerpt, slug, date, image }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link href={`/posts/${slug}`}>
        <div className="glass overflow-hidden rounded-2xl h-full transition-all duration-300 hover:bg-white/5 hover:border-white/20 group flex flex-col">
          {/* تصویر شاخص */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || "https://tahlilgaracademy.com/wp-content/uploads/2023/01/default-placeholder.png"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <span className="text-xs text-slate-500 mb-2">{date}</span>
            <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-blue-400 transition-colors">
              {title}
            </h2>
            <div 
              className="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: excerpt }} 
            />
            <div className="mt-auto flex items-center text-blue-500 text-xs font-bold uppercase">
              مطالعه مقاله
              <span className="mr-2 transition-transform group-hover:translate-x-[-4px]">←</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
