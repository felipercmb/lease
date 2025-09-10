import type { Metadata } from "next";
import { getPosts } from "@/lib/content";
import { marked } from "marked";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPosts().find((p) => p.slug === params.slug);
  return { title: post?.title || "Blog" };
}

export default async function BlogPostPage({ params }: Params) {
  const post = getPosts().find((p) => p.slug === params.slug);
  if (!post) return null;
  const html = await marked(post.content);
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="mb-4 text-3xl font-semibold text-[var(--lease-primary)]">{post.title}</h1>
      <article className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}




