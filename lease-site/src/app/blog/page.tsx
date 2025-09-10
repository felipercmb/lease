import Link from "next/link";
import { getPosts } from "@/lib/content";

export default function BlogListPage() {
  const posts = getPosts();
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="mb-6 text-3xl font-semibold text-[var(--lease-primary)]">Blog</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[var(--color-border)]">
            <h2 className="mb-1 text-lg font-semibold">
              <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
            </h2>
            <p className="line-clamp-3 text-sm text-[var(--lease-muted)]">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}




