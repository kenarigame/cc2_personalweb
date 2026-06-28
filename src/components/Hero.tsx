function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="max-w-5xl text-center px-6">
        <p className="text-cyan-400 font-medium">Full Stack Developer</p>

        <h1 className="text-6xl text-slate-400 font-bold mt-4">
          Hi, I'm Okto Yunanto
        </h1>

        <p className="text-slate-400 mt-6 text-lg">
          Building scalable web applications with Next.js, TypeScript, Node.js
          and modern technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            className="bg-cyan-500 hover:bg-blue-600 px-6 py-3 rounded-lg cursor-pointer"
            onClick={() =>
              window.open(
                "https://wa.me/6281234567890?text=Halo%20Okto,%20saya%20tertarik%20dengan%20jasa%20Anda.",
                "_blank",
              )
            }
          >
            Hire Me
          </button>

          {/* <button className="border border-slate-700 px-6 py-3 rounded-lg"> */}
          <button
            className="bg-cyan-500 hover:bg-blue-600 px-6 py-3 rounded-lg cursor-pointer"
            onClick={() => {
              document.getElementById("portfolio")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
