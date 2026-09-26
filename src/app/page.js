import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navber";
import ProjectsPage from "@/Component/projects";
import ExperiencePage from "./Page/experience/page";
import ServicesPage from "./Page/services/page";
import EducationPage from "./Page/education/page";
import AchievementsPage from "./Page/achivements/page";
import ContactPage from "./Page/contact/page";
import Footer from "@/Component/footer";
import AboutPage from "@/Component/AboutMe";
import SkillsPage from "@/Component/skills";





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
