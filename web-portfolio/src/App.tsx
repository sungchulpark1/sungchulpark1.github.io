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

        <p>
          I specialize in building web applications using React, Node.js, and various other technologies.
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
              <li>Led database migrations on AWS RDS, improving backend security and stability while performing code reviews to ensure deployment quality</li>
              <li>Built and tested backend systems for workflows using Ruby on Rails, Redis, Sidekiq, and Shopify API, implementing automated tests to validate functionality</li>
              <li>Automated user account and order workflows using test scripts, verifying authentication, registration, and process reliability</li>
              <li>Managed CI/CD pipelines on Heroku and GitLab, integrating automated testing and Docker containerization to improve release quality</li>
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
              <li>Developed a template-driven content system for legacy applications, enabling testable workflows and improving operational efficiency</li>
              <li>Optimized backend APIs and debugged performance issues, enhancing system stability and reliability</li>
              <li>Collaborated with team members to identify potential failure points, contributing to regression test development and automated test coverage</li>
              <li>Documented process improvements and QA workflows, improving cross-team testing practices</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <div className="w-full flex justify-between gap-2">
            <div className="font-bold">Junior System Analyst</div>
            <div className="text-right">Sep 2020 - Apr 2021</div>
          </div>

          <div className="w-full flex justify-between gap-8">
            <div>Ontario Ministry of Children, Community and Social Services (Co-op)</div>
            <div className="text-right">Toronto, Ontario</div>
          </div>

          <div className="w-full">
            <ul className="list-disc list-inside mt-2">
              <li>Established CI/CD standards and created technical documentation, improving release management and collaboration across teams</li>
              <li>Designed and executed end-to-end and regression test cases to validate code quality and reduce defects</li>
              <li>Refactored SQL queries within automated testing frameworks, improving test execution speed and reliability</li>
              <li>Coordinated with developers and QA teams to debug, analyze, and troubleshoot issues, enhancing defect resolution efficiency</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0, 0, 0.4, 1] }}
      >
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Projects
        </h2>

        <div className="mb-8">
          <div className="w-full flex justify-between">
            <div className="font-bold">Full Stack Developer</div>
            <div className="text-right">Sep 2025 - Present</div>
          </div>

          <div className="w-full flex justify-between">
            <div>Celestial Shaadis</div>
            <div className="text-right"><a href="https://celestialshaadis.com">View Project</a></div>
          </div>

          <div className="w-full">
            <ul className="list-disc list-inside mt-2">
              <li>Developed a responsive front-end wedding website using React, ensuring cross-browser compatibility and smooth user
              interactions</li>
              <li>Implemented EmailJS for contact form functionality, validating message delivery and error handling to ensure
              reliability</li>
              <li>Deployed and managed the site with a Cloudflare Worker, testing performance, uptime, and security optimizations</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0, 0, 0.4, 1] }}
      >
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Education
        </h2>

        <div className="mb-8">
          <div className="w-full flex justify-between">
            <div className="font-bold">Seneca Polytechnic</div>
            <div className="text-right">Sep 2019 - Aug 2021</div>
          </div>

          <div className="w-full flex justify-between">
            <div>Ontario College Diploma in Computer Programming</div>
            <div className="text-right">Toronto, Ontario</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="w-full mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 0.5, delay: 0.9, ease: [0, 0, 0.4, 1] }}
      >
        <hr className="mt-4 mb-4 border-gray-00 dark:border-gray-700" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          This website was built with React, Vite, TypeScript, and Tailwind CSS.
        </p>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          Feel free to email me at <a href="mailto:spark0843@gmail.com" className="text-blue-500 hover:underline dark:text-blue-400">spark0843@gmail.com</a> for any business inquiries.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 Sungchul Park. All rights reserved.
        </p>
      </motion.div>
    </div>
  )
}

export default App
