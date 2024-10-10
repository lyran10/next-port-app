"use client";
import React, { useRef, useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./background-gradient";
import Image from 'next/image';
import pic from "../../images/IMG-20161227-WA0002.jpg"

export const popup =  (visible : boolean) => {
return `delay-300 duration-500   ${visible ? "translate-y-0 transition delay-opacity opacity-[1]" : "translate-y-10 opacity-[0]"}`
}

export const StickyScroll = ({
  content
}: {
  content: {
    title: string;
    description: string;
    skills : {id : string, skill : string, icon : JSX.Element, delay : string}[]
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // console.log("intersect")
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the div is visible
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);


  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div 
      id="about"
      animate={{
        // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      // h-[30rem] overflow-y-auto
      className="flex justify-center items-center relative space-x-10 rounded-md h-[90vh]"
      ref={ref}
    >
      <div className="absolute w-full h-[1px] bottom-0 bg-slate-400"></div>
      <div ref={divRef} className="div h-full relative flex items-center justify-center px-4 w-full md:w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
        <div className="hidden lg:block absolute h-full w-[1px] bg-slate-400 right-0
        before:absolute before:content-'' before:w-5 before:h-5 before:rounded-full before:bg-slate-200 before:-translate-x-[10px] before:-translate-y-[10px] after:absolute after:content-'' after:w-5 after:h-5 after:rounded-full after:bg-slate-200 after:-translate-x-[10px] after:translate-y-[10px] after:bottom-0 after:z-[10000]"></div>
        <div className="w-full flex items-center h-full justify-center">
          {content.map((item, index) => (
            <div key={item.title + index} className="w-full">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                <span className={`${popup(isVisible)}`}>{item.title}</span>
              </motion.h2>
              <div className="flex gap-3 mt-10 flex-wrap">
              {
                item.skills.map(({id, icon, skill, delay}) => {
                  return (
                    <div className={`${popup(isVisible)}`}>
                   <BackgroundGradient>
                    <div key={id} className={`flex gap-1 text-slate-300 px-4 justify-center items-center`}>
                      {icon}
                      <span>{skill}</span>
                    </div>
                    </BackgroundGradient>
                    </div>
 
                  )
                })
              }
              </div>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 mt-10 w-full"
              >
                <span className={`delay-300 ${popup(isVisible)}`}>{item.description}</span>
              </motion.p>
            
            </div>
          ))}
          <div className="h-40" />
          {/* <img src={pic} alt="" /> */}
        </div>
        {
          
        }
      </div>
      {/* <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        // hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden
        className="hidden lg:block h-full w-80 rounded-md bg-white sticky top-10 overflow-hidden"
      >
      </motion.div> */}
      <div className={`${popup(isVisible)} justify-center items-center duration-500 delay-500 hidden lg:flex h-full w-[500px] rounded-md sticky top-10 overflow-hidden`}>
      <Image height={500} width={500} src={pic} alt="My Image" />
      </div >
    
    </motion.div>
  );
};
