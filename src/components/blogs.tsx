const posts = [
  {
    title: "Getting Started with Next.js",
    date: "June 2026",
  },
  {
    title: "TypeScript Best Practices",
    date: "May 2026",
  },
  {
    title: "Building Scalable APIs",
    date: "April 2026",
  },
];

function Blog() {
  return (
    <section id="blog" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-slate-400">Blog</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.title} className="bg-slate-800 p-6 rounded-xl">
              <span className="text-cyan-400">{post.date}</span>

              <h3 className="text-xl font-semibold mt-3">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
