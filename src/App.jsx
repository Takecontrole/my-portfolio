import React, {useEffect, useRef} from "react";
import {useInView, useMotionValue, useSpring  } from "framer-motion"

import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, SecondWorks, ThirdWorks, StarsCanvas } from "./components";
const AnimatedNumbers = ({value}) => {
  const ref=useRef(null);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref,{once: true});
  
  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])
  
  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value ){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])
  return <span ref={ref}></span>
}
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
    <Tech />
      
        
        <Experience />
       
       <div className="mx-10 md:mx-24 lg:mx-36 col md:flex justify-between"> 
<div className="flex flex-col my-10 items-center justify-center "> 
<span className=" text-7xl font-bold  "><AnimatedNumbers value={3}/>
</span>
<h2 className="text-xl font-medium capitalize text-dark/75">года опыта</h2>
</div>
<div className="flex flex-col my-10 items-center justify-center "> 
<span className=" text-7xl font-bold  ">
<AnimatedNumbers value={2}/>
</span>
<h2 className="text-xl font-medium capitalize text-dark/75">опыта с react</h2>
</div>
</div>
       
        <About />
        <Works />
        
       <SecondWorks/>
       <ThirdWorks/>
      
    
    
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
