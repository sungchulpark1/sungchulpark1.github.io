import { motion, type Variants } from "motion/react";
import School from "./School";

function Education() {
  return (
   <motion.div
      className="w-3/4"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
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

const variants: Variants = {
  offscreen: {
    y: 100
  },
  onscreen: {
    y: 50,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}
