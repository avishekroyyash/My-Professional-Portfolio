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

  <Navbar></Navbar>
  <Hero></Hero>
  <AboutPage></AboutPage>
  <SkillsPage></SkillsPage>
  <ProjectsPage></ProjectsPage>
  <ExperiencePage></ExperiencePage>
  <ServicesPage></ServicesPage>
  <EducationPage></EducationPage>
  <AchievementsPage></AchievementsPage>
  <ContactPage></ContactPage>
  <Footer></Footer>
    </>
  );
}
