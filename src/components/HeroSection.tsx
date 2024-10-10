import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { useEffect, useRef, useState } from "react";
import { popup } from "./ui/sticky-scroll-reveal";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
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
    <div
    ref={divRef}
    className="h-screen md:h-screen lg:h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <div className="absolute w-full h-[1px] bottom-0 bg-slate-400"></div>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className={`p-4 relative z-10 w-full text-center`} >
            <h1
            className={`${popup(isVisible)} mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400`}
            >Liran Ramekar</h1>
            <p
            className={`mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto ${popup(isVisible)}`}
            >A passionate <strong>Full-Stack Developer</strong> specializing in creating dynamic, responsive, and user-friendly web applications.</p>
            <div className={`duration-700 ${isVisible ? "opacity-[1] transition-opacity delay-700" : "opacity-0"} mt-4`}>
                {/* <Link href={"/"}> */}
                {/* <a href={resume} download="CV"> */}
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                     <a href="/liran_IND.pdf" download="LIRAN_CV">Download CV</a>
                  </Button>
                {/* </Link> */}

             
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection