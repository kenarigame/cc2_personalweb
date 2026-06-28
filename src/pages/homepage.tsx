import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/about";
import Skills from "../components/skills";
import Services from "../components/services";
import Portfolio from "../components/portfolios";
import Blog from "../components/blogs";
import Footer from "../components/footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
}

export default Homepage;
