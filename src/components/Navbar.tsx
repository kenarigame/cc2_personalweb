function Navbar() {
  return (
    <nav className="text-slate-400 fixed w-full backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between">
        <h1
          className="font-bold text-xl cursor-pointer hover:text-cyan-500 transition-colors duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          okto.yunanto
        </h1>

        <div className="flex gap-6 cursor-pointer ">
          <a
            href="#about"
            className="hover:text-cyan-500 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-cyan-500 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#services"
            className="hover:text-cyan-500 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="hover:text-cyan-500 transition-colors duration-300"
          >
            Portfolio
          </a>
          <a
            href="#blog"
            className="hover:text-cyan-500 transition-colors duration-300"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
