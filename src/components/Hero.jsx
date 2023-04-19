import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import photo from "../assets/20230330075156704-PhotoRoom.png-PhotoRoom.png";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
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
           Я разрабатываю интернет магазины <br className='sm:block hidden' />
           и другие веб приложения.
          </p>
                 <div className=" h-[400px] md:h-[800px] w-full relative items-center justify-center ">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>

              <img src={photo} alt="" className="absolute h-[250px] md:h-[500px] top-10 md:top-24 right-10 md:right-32 items-center justify-center animate-wiggle"/>
       </div>
        </div>
      </div>

    

    
    </section>
  );
};

export default Hero;
