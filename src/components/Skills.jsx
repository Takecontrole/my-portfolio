import React, {useRef} from "react";
import {motion, useScroll} from "framer-motion";

const Skill = ({name, x, y}) => {
  
  return (
    <motion.div className="absolute flex items-center justify-center rounded-full font-semibold bg-dark text-light p-y-3 px-6 shadow-dark cursor-pointer "
whileHover={{scale:1.05}}
initial={{x:0, y:0}}
whileInView={{x:x, y:y}}
transition={{duration: 1.5}}
>
{name}
</motion.div>
    )
}

const Skills = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
    )
  return (
    <>
    
<div ref={ref} className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight mt-64">
<motion.div 
style={{scaleY: scrollYProgress }}
className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"/>
<motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
whileHover={{scale:1.05}}
>
Web
</motion.div>
<Skill name="CSS" x="+0vw" y="+9vw"/>
<Skill name="HTML" x="+11vw" y="+3vw"/>
<Skill name="JavaScript" x="-10vw" y="+3vw"/>
<Skill name="UI UX Дизайнер" x="+13vw" y="-6vw"/>
<Skill name="Styled components" x="+0vw" y="+20vw"/>
<Skill name="Material UI" x="+13vw" y="+6vw"/>
<Skill name="Bootstrap" x="-11vw" y="+12vw"/>
<Skill name="Tailwind" x="+11vw" y="+12vw"/>
<Skill name="React" x="-11vw" y="-12vw"/>
<Skill name="Next.js" x="+11vw" y="-12vw"/>
<Skill name="React Native" x="-13vw" y="+6vw"/>
<Skill name="Three.js" x="+11vw" y="-3vw"/>
<Skill name="Databases" x="0vw" y="-10vw"/>
<Skill name="Express" x="-11vw" y="-3vw"/>
<Skill name="Node.js" x="-14vw" y="-6vw"/>
<Skill name="Full Stack Разработчик" x="0vw" y="-20vw"/>
</div>

   </>
   )
}
export default SectionWrapper(Skills, "Skills");
