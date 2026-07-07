import WorkspaceLayout from "@/layouts/WorkspaceLayout";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Footer from "@/Components/Footer";

export default function Page() {
  return (
    <WorkspaceLayout>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </WorkspaceLayout>
  );
}
