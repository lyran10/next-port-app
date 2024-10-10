
"use client";
import React from "react";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'About Me',
      description:
        'I’m a dedicated Full Stack Developer with a strong focus on building dynamic web applications, currently specializing in React. With a passion for coding, I thrive on solving complex challenges and continuously improving my skills. Outside of work, I’m equally passionate about football, which fuels my competitive spirit and teamwork mindset.',
        skills : [
          {
            id : "javascript",
            skill : "Javascript",
            icon : <IoLogoJavascript/>,
            delay : "delay-100"
          },
          {
            id : "typescript",
            skill : "Typescript",
            icon : <BiLogoTypescript/>,
            delay : "delay-150"
          },
          {
            id : "react",
            skill : "React",
            icon : <FaReact/>,
            delay : "delay-200"
          },
          {
            id : "redux",
            skill : "Redux",
            icon : <TbBrandRedux/>,
            delay : "delay-300"
          },
          {
            id : "nodejs",
            skill : "Nodejs",
            icon : <IoLogoNodejs/>,
            delay : "delay-500"
          },
          {
            id : "mongodb",
            skill : "MongoDB",
            icon : <BiLogoMongodb/>,
            delay : "delay-700"
          },
        
        ] 
    },
    // {
    //   title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    //   description:
    //     'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    // },
    // {
    //   title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    //   description:
    //     'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    // },
    // {
    //   title: 'Live Feedback & Engagement',
    //   description:
    //     'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
    // },
    // {
    //   title: 'Cutting-Edge Curriculum',
    //   description:
    //     'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
    // },
    // {
    //   title: 'Limitless Learning Opportunities',
    //   description:
    //     'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
    // },
  ];

function WhyChooseUs() {
  return (
    <div >
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs