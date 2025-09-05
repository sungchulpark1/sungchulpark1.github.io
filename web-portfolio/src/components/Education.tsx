import { motion } from "motion/react";
import School from "./School";

function Education() {
  return (
   <motion.div
      className="w-3/4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 40 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0, 0, 0.4, 1] }}
    >
      <div className="w-full flex flex-col justify-center">
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          Education
        </h2>
        <School degree="Ontario College Diploma in Computer Programming"
          dates="Sept 2020 - Apr 2022"
          school="Seneca Polytechnic"
          location="Toronto, ON"
        />
      </div>
    </motion.div>
  );
}

export default Education
