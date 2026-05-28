"use client"
import { useState } from "react";
import PostCard from "@/components/PostCard";
import { Search } from "lucide-react";

interface PostGridProps {
  initialPosts: any[];
}

export default function PostGrid({ initialPosts }: PostGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // فیلتر کردن مقالات بر اساس عنوان یا خلاصه متنی
  const filteredPosts = initialPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* نوار جستجوی شیک و مدرن */}
      <div className="max-w-md mx-auto mb-16 relative">
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="جستجوی مقالات آموزشی..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full glass py-4 pr-12 pl-6 rounded-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
        />
      </div>

      {/* نمایش مقالات فیلتر شده */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: any) => (
            <PostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              image={post.featuredImage?.node?.sourceUrl}
              date={new Date(post.date).toLocaleDateString("fa-IR")}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">مقاله‌ای با این مشخصات پیدا نشد! 🔍</p>
        </div>
      )}
    </div>
  );
}
