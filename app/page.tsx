import HeroSection from "@/components/ui/shape-landing-hero";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/features";
import FAQSection from "@/components/ui/faq";
import { client } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import Link from "next/link";

async function getWordPressPosts() {
  try {
    const { data } = await client.query({
      query: gql`
        query GetPosts {
          posts(first: 3) {
            nodes {
              id
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `,
      fetchPolicy: "no-cache",
    });
    return data?.posts?.nodes ?? [];
  } catch (error) { return []; }
}

export default async function Home() {
  const posts = await getWordPressPosts();

  return (
    <main className="min-h-screen">
      <HeroSection 
        badge="تکنولوژی هدلس وردپرس"
        title="آکادمی تخصصی تحلیل‌گر"
        description="آموزش مدرن‌ترین متدهای برنامه‌نویسی با تکیه بر پروژه‌های واقعی و معماری‌های نوین نرم‌افزاری."
      />

      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">چرا آکادمی تحلیل‌گر؟</h2>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold">آخرین مقالات</h2>
          <Link href="/blog" className="text-blue-500 hover:text-blue-400">مشاهده همه ←</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
              <article className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 h-full">
                <div className="relative h-48 w-full">
                  {post.featuredImage?.node?.sourceUrl && (
                    <img src={post.featuredImage.node.sourceUrl} className="w-full h-full object-cover" alt={post.title} />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400">{post.title}</h3>
                  <div className="text-gray-400 text-sm line-clamp-2" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <div className="py-20">
        <FAQSection />
      </div>
    </main>
  );
}
