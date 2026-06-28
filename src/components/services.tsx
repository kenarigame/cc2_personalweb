const services = [
  {
    title: "Web Development",
    desc: "Custom web application development.",
  },
  {
    title: "UI/UX Design",
    desc: "Modern and responsive interfaces.",
  },
  {
    title: "API Development",
    desc: "REST API and backend architecture.",
  },
  {
    title: "Cloud Deployment",
    desc: "AWS, VPS and Docker deployment.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-slate-400">Services</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>

              <p className="text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
