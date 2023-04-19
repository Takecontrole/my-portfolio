import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Skill = ({name, x, y}) => {
  
  return (
    <motion.div className="absolute flex items-center justify-center rounded-full font-semibold bg-lightsec text-light md:py-5 px-8  shadow-white cursor-pointer "
whileHover={{scale:1.05}}
initial={{x:0, y:0}}
whileInView={{x:x, y:y}}
transition={{duration: 1.5}}
>
{name}
</motion.div>
    )
}



const About = () => {
  return (
    <>
    <div  className="w-full h-screen relative flex items-center justify-center rounded-full bg-hero-pattern mt-64">

<motion.div className="flex items-center justify-center rounded-full font-semibold bg-lightsec text-light p-8 shadow-dark cursor-pointer"
whileHover={{scale:1.05}}
>
Web
</motion.div>
<Skill name="CSS" x="+0vw" y="+9vw"/>
<Skill name="HTML" x="+11vw" y="+3vw"/>
<Skill name="JavaScript" x="-10vw" y="+3vw"/>
<Skill name="UI UX Дизайнер" x="+25vw" y="-6vw"/>
<Skill name="Styled components" x="+0vw" y="+25vw"/>
<Skill name="Material UI" x="+25vw" y="+6vw"/>
<Skill name="Bootstrap" x="-16vw" y="+17vw"/>
<Skill name="Tailwind" x="+16vw" y="+17vw"/>
<Skill name="React" x="-16vw" y="-17vw"/>
<Skill name="Next.js" x="+16vw" y="-17vw"/>
<Skill name="React Native" x="-25vw" y="+6vw"/>
<Skill name="Three.js" x="+11vw" y="-3vw"/>
<Skill name="Databases" x="0vw" y="-10vw"/>
<Skill name="Express" x="-10vw" y="-3vw"/>
<Skill name="Node.js" x="-25vw" y="-6vw"/>
<Skill name="Full Stack Разработчик" x="0vw" y="-25vw"/>
</div>
    </>
  );
};

export default SectionWrapper(About, "about");
