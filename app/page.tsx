import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import About from "@/components/about";
import Achievements from "@/components/achievements";
import Publications from "@/components/publications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <div className="container notes-grid">
          <Achievements />
          <Publications />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
