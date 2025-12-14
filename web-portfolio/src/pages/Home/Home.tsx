import PersonalBio from "./PersonalBio"
import ProjectCard from "./ProjectCard"
import SectionHeading from "./SectionHeading"

import CelestialShadis from "../../assets/celestial-shaadis.png"
import AoCha from "../../assets/ao-cha.png"

export default function Home() {
  return (
    <>
      <PersonalBio />
      <SectionHeading title={"Work"} />
      <ProjectCard image={CelestialShadis} title={"Celestial Shaadis"} description={"Built a website for a local wedding planning service to promote their services, provide detailed information about their packages, introduce their team, and allow clients to book consultations easily."} link={"https://celestialshaadis.com"} />
      <ProjectCard image={AoCha} title={"Ao Cha"} description={"Built a website for a local matcha popup to promote their business, showcase their menu, and display their operating schedule and event dates."} link={"https://www.instagram.com/aocha.to"} />
    </>
  )
}
