import Header from "./components/Header"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Header />

      <Experience />

      <Projects />

      <Education />

      <Footer />
    </div>
  )
}

export default App
