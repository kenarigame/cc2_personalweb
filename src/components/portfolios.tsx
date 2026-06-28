const projects = [
  {
    title: "ERP System",
    tech: "Next.js, Node.js, PostgreSQL",
  },
  {
    title: "E-Commerce",
    tech: "React, Laravel, MySQL",
  },
  {
    title: "Dashboard Analytics",
    tech: "Next.js, Prisma",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-slate-400">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 rounded-xl overflow-hidden"
            >
              <div className="h-52 bg-slate-800" />

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-slate-400 mt-2">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
