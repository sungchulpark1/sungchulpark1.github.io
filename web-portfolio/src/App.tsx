import Navigation from "./components/Navigation"
import PersonalBio from "./components/PersonalBio"
import SectionHeading from "./components/SectionHeading"

export default function App() {
  return (
    <>
      <Navigation />
      <PersonalBio />
      <SectionHeading title={"Work"} />
    </>
  )
}
