import { client } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import Navbar from "@/components/ui/navbar";
import { notFound } from "next/navigation";

async function getPostContent(slug: string) {
  try {
    const { data } = await client.query({
      query: gql`
        query GetPostBySlug($id: ID!) {
          post(id: $id, idType: SLUG) {
            title
            content
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      `,
      variables: { id: slug },
    });
    return data?.post;
  } catch (e) {
    return null;
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostContent(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030303] text-white" dir="rtl">
      <Navbar />
      <article className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        {post.featuredImage?.node?.sourceUrl && (
          <img 
            src={post.featuredImage.node.sourceUrl} 
            className="w-full h-[400px] object-cover rounded-3xl mb-10 border border-white/10"
            alt={post.title}
          />
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        
        <div className="text-gray-500 mb-10 pb-6 border-b border-white/10">
          منتشر شده در تاریخ: {new Date(post.date).toLocaleDateString('fa-IR')}
        </div>

        <div 
          className="prose prose-invert prose-blue max-w-none 
          prose-headings:font-bold prose-p:leading-8 prose-p:text-gray-300 
          prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
