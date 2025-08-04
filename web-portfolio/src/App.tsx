import { motion } from "motion/react"
// import { useRef } from "react"
// import { FaChevronCircleDown } from "react-icons/fa"

function App() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className="w-full text-center"
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
      </motion.div>

      <motion.div
        className="w-full mb-8 text-center"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0, 0, 0.4, 1] }}
      >
        <p className="mb-4">
          Hello! I'm a Full Stack Developer based in Mississauga, Ontario, Canada.
        </p>

        <p className="mb-4">
          I specialize in building web applications using React, Node.js, and various other technologies.
        </p>

        <p>
          I used React, Vite, TypeScript, and Tailwind CSS to build this portfolio website.
        </p>

        {/* <div>
          <FaChevronCircleDown size={32} />
        </div> */}
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0, 0, 0.4, 1] }}
      >
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Experience
        </h2>

        <div className="mb-8">
          <div className="w-full flex justify-between">
            <div className="font-bold">Full Stack Developer</div>
            <div className="text-right">Apr 2022 - Nov 2023</div>
          </div>

          <div className="w-full flex justify-between">
            <div>Custom Tattoo Design</div>
            <div className="text-right">Burlington, Ontario</div>
          </div>

          <div className="w-full">
            <ul className="list-disc list-inside mt-2">
              <li>Led PostgreSQL database migrations for AWS RDS databases, to enhance security and revamp backend architecture</li>
              <li>Led project to build and integrate a referral program system into legacy systems to improve customer retention</li>
              <li>Led project to develop and maintain backend applications and improve CI/CD for backend architecture</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <div className="w-full flex justify-between">
            <div className="font-bold">Full Stack Developer</div>
            <div className="text-right">Jun 2021 - Dec 2021</div>
          </div>

          <div className="w-full flex justify-between">
            <div>Speer Technologies</div>
            <div className="text-right">Toronto, Ontario</div>
          </div>

          <div className="w-full">
            <ul className="list-disc list-inside mt-2">
              <li>Developed template system for dynamic content creation in legacy systems, enhancing work efficiency</li>
              <li>Optimized backend code for legacy systems, reducing API calls and improving search efficiency</li>
              <li>Diagnosed and resolved slow performance issues for legacy systems through code analysis and refactoring code</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <div className="w-full flex justify-between">
            <div className="font-bold">Junior System Analyst</div>
            <div className="text-right">Sep 2020 - Apr 2021</div>
          </div>

          <div className="w-full flex justify-between gap-8">
            <div>Ontario Ministry of Children, Community and Social Services (Co-op)</div>
            <div className="text-right">Toronto, Ontario</div>
          </div>

          <div className="w-full">
            <ul className="list-disc list-inside mt-2">
              <li>Developed template system for dynamic content creation in legacy systems, enhancing work efficiency</li>
              <li>Optimized backend code for legacy systems, reducing API calls and improving search efficiency</li>
              <li>Diagnosed and resolved slow performance issues for legacy systems through code analysis and refactoring code</li>
            </ul>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default App
