import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  subtitle,
  period,
  description,
  tags,
  gradient,
  live_link,
  note,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{ max: 20, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col'
      >
        <div
          className={`relative w-full h-[150px] rounded-2xl bg-gradient-to-br ${gradient} flex flex-col justify-end p-4`}
        >
          <span className='absolute top-3 left-3 text-[12px] text-white/90 bg-black/30 rounded-full px-3 py-1'>
            {period}
          </span>
          <h3 className='text-white font-black text-[28px] leading-tight'>
            {name}
          </h3>
          <p className='text-white/90 text-[14px]'>{subtitle}</p>
        </div>

        <p className='mt-4 text-secondary text-[14px] leading-[22px] flex-1'>
          {description}
        </p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className='mt-5 flex items-center justify-between gap-3'>
          <a
            href={live_link}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#915EFF] hover:bg-[#7740E0] transition text-white text-[14px] font-semibold rounded-lg px-4 py-2'
          >
            View Live ↗
          </a>
          {note && <span className='text-secondary text-[12px]'>{note}</span>}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Production platforms I have designed and built, from government HR
          systems to multi-tenant SaaS. Every project below is live, so you can
          open it and see the work yourself.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
