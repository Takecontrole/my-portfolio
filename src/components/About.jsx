import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Skill = ({name, x, y}) => {
  
  return (
    <motion.div className="absolute flex items-center justify-center rounded-full font-semibold bg-lightsec text-light text-xs lg:text-lg  px-2 lg:py-5 lg:px-8  shadow-white cursor-pointer "
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
    <div  className="w-full h-[400px] md:h-screen relative flex items-center justify-center rounded-full bg-web bg-cover bg-center mt-64">

<motion.div className="flex items-center justify-center rounded-full font-semibold bg-transparent text-xs lg:text-3xl text-light lg:p-8 shadow-dark cursor-pointer"
whileHover={{scale:1.05}}
initial={{x:0, y:0,opacity:0, scale:0}}
whileInView={{x:"+0vw", y:"-37vw", opacity:1, scale:1}}
transition={{duration: 1.5}}
>
Мои основные навыки собраны здесь
</motion.div>



<Skill name="web" x="0vw" y="0vw"/>
<Skill name="Typescript" x="+32vw" y="0vw"/>
<Skill name="Figma" x="-32vw" y="0vw"/>
<Skill name="CSS" x="+0vw" y="+12vw"/>
<Skill name="HTML" x="+13vw" y="+6vw"/>
<Skill name="JavaScript" x="-13vw" y="+6vw"/>
<Skill name="UI UX Дизайнер" x="+28vw" y="-10vw"/>
<Skill name="Styled components" x="+0vw" y="+25vw"/>
<Skill name="Material UI" x="+28vw" y="+10vw"/>
<Skill name="Bootstrap" x="-16vw" y="+17vw"/>
<Skill name="Tailwind" x="+16vw" y="+17vw"/>
<Skill name="React" x="-16vw" y="-17vw"/>
<Skill name="Next.js" x="+16vw" y="-17vw"/>
<Skill name="React Native" x="-28vw" y="+10vw"/>
<Skill name="Three.js" x="+13vw" y="-6vw"/>
<Skill name="Databases" x="0vw" y="-12vw"/>
<Skill name="Express" x="-13vw" y="-6vw"/>
<Skill name="Node.js" x="-28vw" y="-10vw"/>
<Skill name="Full Stack Разработчик" x="0vw" y="-25vw"/>
</div>
    </>
  );
};

export default SectionWrapper(About, "about");
