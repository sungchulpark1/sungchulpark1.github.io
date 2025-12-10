import Navigation from "./components/Navigation"
import PersonalBio from "./components/PersonalBio"
import SectionHeading from "./components/SectionHeading"
import ProjectCard from "./components/ProjectCard"

import CelestialShadis from "./assets/celestial-shaadis.png"
import AoCha from "./assets/ao-cha.png"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Navigation />
      <PersonalBio />
      <SectionHeading title={"Work"} />
      <ProjectCard image={CelestialShadis} title={"Celestial Shaadis"} description={"Built a website for a local wedding planning service to promote their services, provide detailed information about their packages, introduce their team, and allow clients to book consultations easily."} link={"https://celestialshaadis.com"} />
      <ProjectCard image={AoCha} title={"Ao Cha"} description={"Built a website for a local matcha popup to promote their business, showcase their menu, and display their operating schedule and event dates."} link={"https://www.instagram.com/aocha.to"} />
      <Footer />
    </>
  )
}
