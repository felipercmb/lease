import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
};

const ROOT = process.cwd();

export function getPosts(): Post[] {
  const dir = path.join(ROOT, "content", "blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: (data.slug as string) || file.replace(/\.(md|mdx)$/i, ""),
        title: (data.title as string) || "Sem título",
        excerpt: (data.excerpt as string) || "",
        content,
      };
    });
}




