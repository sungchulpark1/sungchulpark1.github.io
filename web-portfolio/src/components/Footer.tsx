import { motion } from "motion/react"

function Footer() {
  return (
    <motion.div
      className="w-3/4 mt-4 mb-8 text-center"
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
  )
}

export default Footer
