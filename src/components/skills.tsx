const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "Git",
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-slate-400">Skills</h2>

        <div className="grid md:grid-cols-5 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-400 p-5 rounded-xl text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
