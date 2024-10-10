"use client";
import { Beams } from "@/components/beams";
import ContactUs from "@/components/contact";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Projects from "@/components/projects";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative ">

         <div className="flex flex-col gap-5 justify-center items-center mt-5 text-white text-[25px] fixed bottom-5 left-5 z-[100000]">
        <a className="w-10 h-10 rounded-full flex justify-center items-center bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#1ca0fb)]" href="https://www.linkedin.com/in/liran-ramekar-398163217/" target="_blank"><FaLinkedin/></a>
        <a className="w-10 h-10 rounded-full flex justify-center items-center bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#1ca0fb)]" href="https://www.instagram.com/liranimmanuel/" target="_blank"><FaInstagram/></a>
        <a className="w-10 h-10 rounded-full flex justify-center items-center bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#1ca0fb)]" href="https://www.facebook.com/liran.immanuel" target="_blank"><FaFacebook/></a>
        <a className="w-10 h-10 rounded-full flex justify-center items-center bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#1ca0fb)]" href="https://github.com/lyran10" target="_blank"><FaGithub/></a>
      </div>
      <HeroSection />
      {/* <FeaturedCourses /> */}
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <Projects/>
      <Instructors />
      <UpcomingWebinars />
      {/* <Beams/> */}
      <ContactUs/>
      <Footer />
   
    </main>
  );
}
