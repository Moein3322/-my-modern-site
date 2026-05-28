export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import { client } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
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
`;

export default async function BlogPage() {
  try {
    const { data } = await client.query({
      query: GET_POSTS,
      context: {
        fetchOptions: {
          next: { revalidate: 0 },
        },
      },
    });

    const posts = data?.posts?.nodes || [];

    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">وبلاگ</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              {post.featuredImage?.node?.sourceUrl && (
                <img 
                  src={post.featuredImage.node.sourceUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <div 
                  className="text-gray-600 text-sm mb-4"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }} 
                />
                <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium">
                  ادامه مطلب ←
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p>در حال حاضر امکان دریافت پست‌ها وجود ندارد. لطفاً بعداً تلاش کنید.</p>
      </div>
    );
  }
}
