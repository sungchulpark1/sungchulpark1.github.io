import { motion } from "motion/react"
import { FaChevronCircleDown } from "react-icons/fa"

import './App.css'

function App() {
  return (
    <>
      <motion.div
        // className="logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0, 0, 0.4, 1] }}
      >
        <h1>Sungchul Park</h1>
        <h2>Full Stack Developer</h2>
      </motion.div>

      <motion.div
        // className="description"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0, 0, 0.4, 1] }}
      >
        <p>
          Hello! I'm a Full Stack Developer based in Mississauga, Ontario, Canada.
        </p>

        <p>
          I specialize in building web applications using React, Node.js, and various other technologies.
        </p>

        <div className="scroll-down">
          <FaChevronCircleDown size={32} />
        </div>
      </motion.div>
    </>
  )
}

export default App
