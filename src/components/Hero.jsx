import { motion } from "framer-motion";
import { styles } from "../styles";
import { profile } from "../constants";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mohd Asif</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer &amp; Team Lead with 5+ years building <br className='sm:block hidden' />
            enterprise SaaS, ERP, healthcare and government platforms.
          </p>
          <p className='mt-3 text-secondary sm:text-[18px] text-[14px] max-w-2xl'>
            React · Next.js · TypeScript · Electron · Redux · FastAPI
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            {["Team Lead", "5 live platforms", "Multi-tenant SaaS", "Gov-grade RBAC", "Offline-first apps"].map(
              (chip) => (
                <span
                  key={chip}
                  className='text-[13px] text-white-100 border border-[#915EFF]/50 bg-[#915EFF]/10 rounded-full px-4 py-1'
                >
                  {chip}
                </span>
              )
            )}
          </div>

          {/* Social Icons & Download CV */}
          <div className="flex flex-wrap items-center gap-5 mt-6">
            <a
              href='#projects'
              className='px-5 py-2 text-white bg-[#915EFF] hover:bg-[#7740E0] transition rounded-lg font-semibold'
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='px-5 py-2 text-white border border-[#915EFF] hover:bg-[#915EFF]/20 transition rounded-lg font-semibold'
            >
              Hire Me
            </a>
            {/* GitHub */}
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-label="GitHub" className="text-white text-[30px] hover:text-[#915EFF] transition duration-300" />
            </a>

            {/* LinkedIn */}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin aria-label="LinkedIn" className="text-white text-[30px] hover:text-[#915EFF] transition duration-300" />
            </a>

            {/* Download CV Button */}
            <a href={`${import.meta.env.BASE_URL}MohdAsifResume.pdf`} download>
              <button className="px-4 py-2 text-white border border-white/30 hover:border-[#915EFF] transition rounded-lg">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
