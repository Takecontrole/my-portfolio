import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import photo from "../assets/20230330075156704-PhotoRoom.png-PhotoRoom.png";
import video from "../assets/vecteezy-blue-fractal-ball-446-unscreen.gif";
import { styles } from "../styles";


const Hero = () => {
  return (
    <div className={` w-full h-screen mx-auto`}>
    <section className={`relative `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Привет, я <span className='text-[#915EFF]'>Валентин</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           Приятно познакомиться!  <br className='sm:block hidden' />
           Я занимаюсь разработкой <br className='sm:block hidden' />
           веб приложений.
          </p>
        </div>
      </div>


    

    
    </section>
                     <div className="relative w-full items-center justify-center ">
                     <div className="relative h-[150px] ">
                     </div>
                     
<img src={video} className="relative h-[200px] md:h-[400px] scale-125 top-56 right-10 md:top-[280px] md:left-0 xl:left-[250px] xl:top-[200px] 2xl:left-[400px] 2xl:top-[300px] items-center justify-center  " />

              <img src={photo} alt="" className="relative h-[150px] md:h-[300px] top-8 left-16 md:left-[200px] md:top-[-100px] xl:left-[450px] xl:top-[-180px]  2xl:left-[600px] 2xl:top-[-80px] items-center justify-center animate-wiggle"/>
       </div>
       </div>
  );
};

export default Hero;
