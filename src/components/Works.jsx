import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  title,
  description,
  description1,
  description2,
  description3,
  tags,
  image,
  source_code_link,
  source_code_link_github,
}) => {
  return (
    <motion.div onClick={() => window.open(source_code_link, "_blank")} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-lightsec p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div  className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={(event) => event.stopPropagation()}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img onClick={() =>  window.open(source_code_link_github, "_blank")}
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {//<p className='mt-2 text-secondary text-[16px]'>{title}</p>
          }
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <p className='mt-2 text-secondary text-[14px]'>{description1}</p>
          <p className='mt-2 text-secondary text-[14px]'>{description2}</p>
          <p className='mt-2 text-secondary text-[14px]'>{description3}</p>
        </div>

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
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Мои работы</p>
        <h2 className={`${styles.sectionHeadText}`}>Проекты.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
       Следующие пет-проекты демонстрируют мои навыки и опыт через реальные примеры моих работ. Каждый проект кратко описан, нажав на них вы увидите их живые демонстрации, а в правом углу есть ссылка на github репозиторий этого проекта. Они отражают моё умение решать сложные задачи и работать с разными технологиями.
        </motion.p>
      </div>

      <div className='flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "projects");
