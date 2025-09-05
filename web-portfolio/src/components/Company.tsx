import type { Variants } from "motion";
import { motion } from "motion/react";

interface CompanyProps {
  title: string;
  dates: string;
  company: string;
  location: string;
  responsibilities: string[];
}

function Company({
  title,
  dates,
  company,
  location,
  responsibilities
}: CompanyProps) {
  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      <div className="w-full mb-8">
        <div className="w-full flex justify-between">
          <div className="font-bold">{title}</div>
          <div className="text-right">{dates}</div>
        </div>

        <div className="w-full flex justify-between">
          <div>{company}</div>
          <div className="text-right">{location}</div>
        </div>

        <div className="w-full">
          <ul className="list-disc list-inside mt-2">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Company

const variants: Variants = {
  offscreen: {
    y: 100
  },
  onscreen: {
    y: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
}