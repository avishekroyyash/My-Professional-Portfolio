
import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navber";
import ProjectsPage from "@/Component/projects";
import Footer from "@/Component/footer";
import AboutPage from "@/Component/AboutMe";
import SkillsPage from "@/Component/skills";
import ExperiencePage from "@/Component/Experience";
import ServicesPage from "@/Component/Service";
import EducationPage from "@/Component/Education";
import AchievementsPage from "@/Component/Achivement";
import ContactPage from "@/Component/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <AboutPage />
        </section>

        <section id="skills">
          <SkillsPage />
        </section>

        <section id="projects">
          <ProjectsPage />
        </section>

        <section id="experience">
          <ExperiencePage />
        </section>

        <section id="services">
          <ServicesPage />
        </section>

        <section id="education">
          <EducationPage />
        </section>

        <section id="achievements">
          <AchievementsPage />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </main>

      <Footer />
    </>
  );
}

