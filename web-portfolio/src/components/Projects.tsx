import { motion } from "motion/react";
import Project from "./Project";

function Projects() {
  return (
    <motion.div
      className="w-3/4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 40 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0, 0, 0.4, 1] }}
    >
      <div className="w-full flex flex-col justify-center">
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Projects
        </h2>
        <Project
          title="Full Stack Developer"
          dates="Sep 2025 - Present"
          projectTitle="Celestial Shaadis"
          projectLink="https://celestialshaadis.com"
          responsibilities={[
            "Developed a responsive front-end wedding website using React, ensuring cross-browser compatibility and smooth user interactions",
            "Implemented EmailJS for contact form functionality, validating message delivery and error handling to ensure reliability",
            "eployed and managed the site with a Cloudflare Worker, testing performance, uptime, and security optimizations"
          ]}
        />
      </div>
    </motion.div>
  )
}

export default Projects
