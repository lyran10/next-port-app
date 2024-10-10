'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json"
import crypto from "../images/crypto.jpeg"
import dma from "../images/dma.PNG"
import rewards from "../images/rewards.PNG"
import { popup } from "./ui/sticky-scroll-reveal";

const projects = [
  {
    id : "crypto",
    title : "Crypto currency Tracker",
    desc : "Enables users to access cryptocurrency information, also can store in a watchlist to keep a track of it.",
    image : crypto,
    website : "https://crypto-app-inf1.onrender.com/",
    github : "https://github.com/lyran10/frontend-crypto"
  },
  {
    id : "dma",
    title : "dma (user - dma, pass - dma@567)",
    desc : "Urban waste collection dashboard. All the information of daily dry and liquid waste collection.",
    image : dma,
    website : "http://124.153.94.110:5051/",
    github : "https://github.com/AppynittyCommunication/DMA_Dashboard_React"
  },
  {
    id : "rewards",
    title : "Rewards",
    desc : "User gets all the information of the rewards and offers that he has earned. Can also redeem, add, edit offers",
    image : rewards,
    website : "https://rewards.ictsbm.com/",
    github : "https://github.com/AppynittyCommunication/ICTSBM_Reward_CMS"
  },
]

function Projects() {
  const [isVisible, setIsVisible] = useState(true);
  const divRef = useRef(null);
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

  return (
    <div  id="projects" className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative flex justify-center items-center"> 
        <div className="hidden lg:block absolute h-full w-[1px] bg-slate-400
        before:absolute before:content-'' before:w-5 before:h-5 before:rounded-full before:bg-slate-200 before:-translate-x-[10px] before:-translate-y-[10px] after:absolute after:content-'' after:w-5 after:h-5 after:rounded-full after:bg-slate-200 after:-translate-x-[10px] after:translate-y-[10px] after:bottom-0 after:z-[10000]"></div>
        {/* <div className="hidden lg:block absolute h-full w-[1px] bg-slate-400 left-0
        before:absolute before:content-'' before:w-5 before:h-5 before:rounded-full before:bg-slate-200 before:-translate-x-[10px] before:-translate-y-[10px] after:absolute after:content-'' after:w-5 after:h-5 after:rounded-full after:bg-slate-200 after:-translate-x-[10px] after:translate-y-[10px] after:bottom-0 after:z-[10000]"></div> */}
        <div>
        <p className={`${popup(isVisible)} pt-10 text-3xl leading-8 font-extrabold text-start tracking-tight text-white sm:text-4xl`}>Projects</p>
        <div className={`flex gap-2 flex-wrap justify-center md:justify-center lg:justify-between xl:justify-between 2xl:justify-between items-center ${popup(isVisible)}`}>
        {projects.map(({title, image, id, desc, website, github}) => (
                <CardContainer key={id} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {desc}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <div className="flex gap-2">
                      <a href={website}>
                      <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Website
                    </CardItem>
                      </a>
                   
                    <a href={github}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Github
                    </CardItem>
                    </a>

                    </div>
                 
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        
        </div>
        </div>
      
         
        </div>  
    </div>
  )
}

export default Projects