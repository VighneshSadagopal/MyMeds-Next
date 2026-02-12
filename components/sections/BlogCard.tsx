import { Blogs } from "@/types/content";

interface BlogCardProps {
  blog: Blogs;
}

export default function BlogCard({ blog }: BlogCardProps) {
  console.log(blog);

  // Safely access the blog image URL
  const blogImage =
    blog.field_blogimage?.field_media_image?.uri?.url
      ? `${process.env.DRUPAL_BASE_URL}${blog.field_blogimage.field_media_image.uri.url}`
      : "/default-image.jpg"; // Fallback image URL

  return (
    <div className="group flex flex-col gap-4 rounded-3xl border border-[#e7edf3] bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden rounded-2xl">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url("${blogImage}")` }}
          aria-label={blog.imageAlt || blog.title}
          role="img"
        />
      </div>

      {/* Content */}
      <div className="px-2 pb-2">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-[#2b8cee]/10 px-3 py-1 text-xs font-bold text-[#2b8cee]">
            {blog.field_blog_types?.name || "Uncategorized"}
          </span>
          <span className="text-xs text-[#4c739a]">
            {blog.field_estimated_read_time || "N/A"}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-[#0d141b] transition-colors group-hover:text-[#2b8cee] dark:text-slate-50">
          {blog.title || "Untitled"}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-[#4c739a] dark:text-slate-400">
          {blog.body?.summary || "No summary available."}
        </p>

        <a
          href={blog.href || "#"}
          className="flex items-center gap-1 text-sm font-bold text-[#2b8cee]"
        >
          Read More
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>
    </div>
  );
}