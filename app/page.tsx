import WorkspaceLayout from "@/layouts/WorkspaceLayout";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import OpenSource from "@/sections/OpenSource";
import Skills from "@/sections/Skills";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";

export default function Page() {
  return (
    <WorkspaceLayout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Skills />
      <ContactForm />
      <Footer />
    </WorkspaceLayout>
  );
}
