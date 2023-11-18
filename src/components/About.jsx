import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services}  from '../constants'
import { SectionWrapper } from "../hoc";
import {fadeIn,textVariant} from '../utils/motion'
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant}>
      <p className={styles.sectionSubText}>Introduction</p>
      <p className={styles.sectionHeadText}>Overview.</p>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    I am a proficient Full Stack Developer with a passion for creating dynamic and user-centric web applications. With over 3.8 years of experience in the field, I excel in both front-end and back-end development, making me a versatile asset to any development team. My journey in web development has equipped me with a deep understanding of the technologies and tools necessary to craft exceptional digital experiences.<br /><br/>

On the front-end, I specialize in crafting polished and responsive user interfaces using HTML, CSS, React Js, Vue Js, and JavaScript. This ensures that end-users have an engaging and intuitive experience. My expertise extends to the back-end, where I work with server-side programming languages such as Node Js to develop robust back-end solutions, manage databases, and implement efficient server logic.<br /><br/>

I take pride in my ability to handle the entire development process, from concept to deployment. Collaborating seamlessly with cross-functional teams, I've successfully delivered projects that meet and exceed objectives. My commitment to staying current with industry best practices and emerging technologies allows me to consistently optimize web applications for performance and scalability.<br /><br/>

In search of new challenges, I am ready to leverage my skills to drive innovation and excellence in web development.





    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((servive,index)=>(
        <ServiceCard key={servive.title} index={index} {...servive} /> 
      ))}
    </div>
    </>
    )
}

export default SectionWrapper(About,'about')