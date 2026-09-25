import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navber";
import AboutMe from "./Page/about/page";
import SkillsPage from "./Page/skills/page";
import ProjectsPage from "@/Component/projects";
import ExperiencePage from "./Page/experience/page";
import ServicesPage from "./Page/services/page";
import EducationPage from "./Page/education/page";
import AchievementsPage from "./Page/achivements/page";
import ContactPage from "./Page/contact/page";
import Footer from "@/Component/footer";





export default function Home() {
  return (
    <>

  <Navbar></Navbar>
  <Hero></Hero>
  <AboutMe></AboutMe>
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
