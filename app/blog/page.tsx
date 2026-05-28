import { client } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";

async function getBlogPosts() {
  const { data } = await client.query({
    query: gql`
      query GetBlogPosts {
        posts(first: 10) {
          nodes {
            id
            title
            slug
            excerpt
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });
  return data?.posts?.nodes ?? [];
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-[#030303] text-white" dir="rtl">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          مقالات آموزشی
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
              <article className="h-full rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <div className="relative h-52 w-full overflow-hidden">
                  {post.featuredImage?.node?.sourceUrl ? (
                    <img
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.featuredImage.node.altText || post.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/10 flex items-center justify-center text-gray-500">
                      بدون تصویر
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <div 
                    className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <div className="text-xs text-gray-500 font-mono">
                    {new Date(post.date).toLocaleDateString('fa-IR')}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
