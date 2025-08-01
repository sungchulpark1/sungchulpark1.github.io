import { motion } from "motion/react"

import './App.css'

function App() {
  return (
    <>
      <motion.div
        className="logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0, 0, 0.4, 1] }}
      >
        <h1>Sungchul Park</h1>
        <h2>Full Stack Developer</h2>
      </motion.div>
    </>
  )
}

export default App
