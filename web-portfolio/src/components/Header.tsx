import { motion } from "motion/react"
import avatar from "./../assets/avatar.png"

function Header() {
  return (
    <div className="min-h-[calc(100vh-theme(spacing.8)*2)] flex flex-col justify-center items-center">
      <motion.div
      className="flex flex-col justify-center items-center w-full text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0, 0, 0.4, 1] }}
      >
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Sungchul Park
      </h1>
      <h2 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
        Full Stack Developer
      </h2>
      <div className="mt-6 mb-2">
        <a href="https://www.linkedin.com/in/sungchulpark1/">
          <img src={avatar} alt="Sungchul Park" className="w-32 h-32 rounded-full" />
        </a>
      </div>
      </motion.div>
      <motion.div
      className="flex flex-col justify-center items-center w-4/5 mb-8 text-center"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0, 0, 0.4, 1] }}
      >
      <p className="mb-2">
        Hello! I'm a Full Stack Developer based in Mississauga, Ontario, Canada.
      </p>
      <p>
        I specialize in building web applications using React, Node.js, and various other technologies.
      </p>
      </motion.div>
    </div>

  )
}

export default Header