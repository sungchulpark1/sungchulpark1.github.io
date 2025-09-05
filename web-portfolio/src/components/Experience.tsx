import { motion } from "motion/react";
import Company from "./Company";

function Experience() {
  return (
    <motion.div
      className="w-3/4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 40 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0, 0, 0.4, 1] }}
    >
      <div className="w-full flex flex-col justify-center">
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Experience
        </h2>
        <Company
          title="Full Stack Developer"
          dates="Apr 2022 - Nov 2023"
          company="Custom Tattoo Design"
          location="Burlington, Ontario"
          responsibilities={[
            "Led database migrations on AWS RDS, improving backend security and stability while performing code reviews to ensure deployment quality",
            "Built and tested backend systems for workflows using Ruby on Rails, Redis, Sidekiq, and Shopify API, implementing automated tests to validate functionality",
            "Automated user account and order workflows using test scripts, verifying authentication, registration, and process reliability",
            "Managed CI/CD pipelines on Heroku and GitLab, integrating automated testing and Docker containerization to improve release quality"
          ]}
        />
        <Company
          title="Full Stack Developer"
          dates="Jun 2021 - Dec 2021"
          company="Speer Technologies"
          location="Toronto, Ontario"
          responsibilities={[
            "Developed a template-driven content system for legacy applications, enabling testable workflows and improving operational efficiency",
            "Optimized backend APIs and debugged performance issues, enhancing system stability and reliability",
            "Collaborated with team members to identify potential failure points, contributing to regression test development and automated test coverage",
            "Documented process improvements and QA workflows, improving cross-team testing practices"
          ]}
        />
        <Company
          title="Junior System Analyst"
          dates="Sep 2020 - Apr 2021"
          company="Ontario Ministry of Children, Community and Social Services (Co-op)"
          location="Toronto, Ontario"
          responsibilities={[
            "Established CI/CD standards and created technical documentation, improving release management and collaboration across teams",
            "Designed and executed end-to-end and regression test cases to validate code quality and reduce defects",
            "Refactored SQL queries within automated testing frameworks, improving test execution speed and reliability",
            "Coordinated with developers and QA teams to debug, analyze, and troubleshoot issues, enhancing defect resolution efficiency"
          ]}
        />
      </div>
    </motion.div>
  )
}

export default Experience
