import Navigation from "./components/Navigation"
import PersonalBio from "./components/PersonalBio"
import SectionHeading from "./components/SectionHeading"
import ProjectCard from "./components/ProjectCard"

import CelestialShadis from "./assets/celestial-shaadis.png"

export default function App() {
  return (
    <>
      <Navigation />
      <PersonalBio />
      <SectionHeading title={"Work"} />
      <ProjectCard image={CelestialShadis} title={"Celestial Shaadis"} description={"Built a website for a local wedding planning service to promote their services, provide detailed information about their packages, introduce their team, and allow clients to book consultations easily."} />
    </>
  )
}
