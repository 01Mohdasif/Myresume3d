import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { awards, education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Awards = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition & Education</p>
        <h2 className={styles.sectionHeadText}>Awards.</h2>
      </motion.div>

      <div className='mt-12 flex flex-wrap items-stretch gap-7'>
        {awards.map((award, index) => (
          <motion.div
            key={award.title}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className='green-pink-gradient p-[1px] rounded-[20px] sm:w-[520px] w-full'
          >
            <div className='bg-tertiary rounded-[20px] p-8 h-full'>
              <p className='text-secondary text-[14px]'>{award.date}</p>
              <h3 className='text-white font-bold text-[24px] mt-1'>
                🏆 {award.title}
              </h3>
              <p className='text-[#915EFF] font-semibold mt-1'>{award.org}</p>
              <p className='text-secondary text-[15px] leading-[24px] mt-3'>
                {award.description}
              </p>
            </div>
          </motion.div>
        ))}

        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            variants={fadeIn("up", "spring", (index + 1) * 0.3, 0.75)}
            className='green-pink-gradient p-[1px] rounded-[20px] sm:w-[360px] w-full'
          >
            <div className='bg-tertiary rounded-[20px] p-8 h-full'>
              <p className='text-secondary text-[14px]'>{edu.period}</p>
              <h3 className='text-white font-bold text-[24px] mt-1'>
                🎓 {edu.school}
              </h3>
              <p className='text-[#915EFF] font-semibold mt-1'>{edu.degree}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Awards, "awards");
