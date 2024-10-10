'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { useEffect, useRef, useState } from "react";
import { popup } from "./ui/sticky-scroll-reveal";

function UpcomingWebinars() {
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

  const education = [
    {
      title: 'Master in Computer Application',
      description: 'Manipal University',
      slug: 'Jaipur, India',
      isFeatured: true,
    },
    {
      title: 'Full Stack Development',
      description: 'Developers Institute',
      slug: 'Tel Aviv, Israel',
      isFeatured: true,
    },
    {
      title: 'Bachelors of Business Administration',
      description: 'Nagpur University',
      slug: 'Nagpur, India',
      isFeatured: true,
    },
    // {
    //   title: 'The Art of Songwriting',
    //   description:
    //     'Learn the craft of songwriting from experienced musicians and songwriters.',
    //   slug: 'the-art-of-songwriting',
    //   isFeatured: true,
    // },
    // {
    //   title: 'Mastering Your Instrument',
    //   description:
    //     'Advanced techniques to master your musical instrument of choice.',
    //   slug: 'mastering-your-instrument',
    //   isFeatured: true,
    // },
    // {
    //   title: 'Music Production Essentials',
    //   description:
    //     'Get started with music production with this comprehensive overview.',
    //   slug: 'music-production-essentials',
    //   isFeatured: true,
    // },
    // // Added two more webinars
    // {
    //   title: 'Live Performance Techniques',
    //   description:
    //     'Enhance your live performance skills with expert tips and strategies.',
    //   slug: 'live-performance-techniques',
    //   isFeatured: true,
    // },
    // {
    //   title: 'Digital Music Marketing',
    //   description:
    //     'Learn how to promote your music effectively in the digital age.',
    //   slug: 'digital-music-marketing',
    //   isFeatured: true,
    // },
  ];

  const experience = [
    {
      position: 'React Developer',
      company: 'Big V Telecom',
      date: 'May 2023 - Present',
      res : [
        {
          id : "",
          res : "Built responsive SPAs with React and ensured app integrity through testing.",
        },
        {
          id : "",
          res : " Reusable UI components for consistency.",
        },
        {
          id : "",
          res : "Manage state efficiently using Redux and Context API.",
        },
        {
          id : "",
          res : "Built responsive SPAs with React and ensured app integrity through testing.",
        },
        {
          id : "",
          res : "API integration for dynamic data retrieval.",
        },
        {
          id : "",
          res : "Authentication and Authorization with Local storage, session storage, JWT Tokens, and Cookies.",
        },
      ],
      isFeatured: true,
    }
    // {
    //   title: 'The Art of Songwriting',
    //   description:
    //     'Learn the craft of songwriting from experienced musicians and songwriters.',
    //   slug: 'the-art-of-songwriting',
    //   isFeatured: true,
    // },
    // {
    //   title: 'Mastering Your Instrument',
    //   description:
    //     'Advanced techniques to master your musical instrument of choice.',
    //   slug: 'mastering-your-instrument',
    //   isFeatured: true,
    // },
    // {
    //   title: 'Music Production Essentials',
    //   description:
    //     'Get started with music production with this comprehensive overview.',
    //   slug: 'music-production-essentials',
    //   isFeatured: true,
    // },
    // // Added two more webinars
    // {
    //   title: 'Live Performance Techniques',
    //   description:
    //     'Enhance your live performance skills with expert tips and strategies.',
    //   slug: 'live-performance-techniques',
    //   isFeatured: true,
    // },
    // {
    //   title: 'Digital Music Marketing',
    //   description:
    //     'Learn how to promote your music effectively in the digital age.',
    //   slug: 'digital-music-marketing',
    //   isFeatured: true,
    // },
  ];
  // bg-gray-900
 {/* <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Education</h2> */}
  return (
    <div ref={divRef} id="education" className={` w-full flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-10 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0 h-full`}>
      <div className={` h-full relative px-0 md:px-10 lg:px-10 xl:px-10 2xl:px-10 w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] flex flex-col justify-start items-start `}>
      <div className="hidden md:block lg:block absolute h-full w-[1px] bg-slate-400 right-0
        before:absolute before:content-'' before:w-5 before:h-5 before:rounded-full before:bg-slate-200 before:-translate-x-[9px] before:-translate-y-[10px] before:z-[10000] after:absolute after:content-'' after:w-5 after:h-5 after:rounded-full after:bg-slate-200 after:-translate-x-[10px] after:translate-y-[10px] after:bottom-0 after:z-[10000]"></div>
         <div className="hidden md:block lg:block absolute h-full w-[1px] bg-slate-400 left-10
        before:absolute before:content-'' before:z-[10000] before:w-5 before:h-5 before:rounded-full before:bg-slate-200 before:-translate-x-[9px] before:-translate-y-[10px] after:absolute after:content-'' after:w-5 after:h-5 after:rounded-full after:bg-slate-200 after:-translate-x-[10px] after:translate-y-[10px] after:bottom-0 after:z-[10000]"></div>
      <p className={`${popup(isVisible)} mt-10 text-3xl leading-8 font-extrabold text-start tracking-tight text-white sm:text-4xl px-10`}>Education</p>
        <div className="flex flex-col gap-5 w-full py-10">
          {
            education.map(({title, description, slug}) => {
              return(
                <div key={title} className="flex items-center text-sm border-slate-700 w-full">
                  <div className={`h-[1px] w-8 bg-white relative ${isVisible ? "w-8" : "w-0"}
                before:content-'' before:absolute before:w-3 before:h-3 before:right-[87%] before:-translate-y-[5px] before:rounded-full before:bg-white`}></div>
                <div  className={`overflow-hidden duration-500 min-w-[50%] flex justify-start flex-col items-start gap-2 text-white rounded-md p-3
                relative before:absolute before:content-"" before:h-full before:w-full before:bg-[#075985] before:duration-500 ${isVisible ? "before:left-full opacity-[1]" : "before:left-0 opacity-0"}`} style={{
                  background:"#075985",
                }}>
                 <span className="text-gray-100">{title}</span>
                  <div className="flex flex-col gap-1 text-gray-400">
                  <span className="">{description}</span>
                  <span>{slug}</span>
                  </div>

                </div>
                </div>

              )
            })
          }
        </div>
      </div>
      {/* linear-gradient(180deg, var(--slate-800), var(--slate-900) */}
      <div className={`w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] flex flex-col justify-start items-start`}>
      <p className={`${popup(isVisible)} mt-10 px-10 text-3xl leading-8 font-extrabold text-start tracking-tight text-white sm:text-4xl `}>Experience</p>
        <div className="flex flex-col gap-5 w-full py-10">
          {
            experience.map(({position, company, date, res}) => {
              return(
                <div key={company} className="flex items-center text-sm border-slate-700 w-full">
                  <div className={`h-[1px] duration-500 bg-white relative ${isVisible ? "w-8" : "w-0"}
                before:content-'' before:absolute before:w-3 before:h-3 before:right-[87%] before:-translate-y-[5px] before:rounded-full before:bg-white`}></div>
                <div  className={`overflow-hidden duration-500 flex justify-start flex-col items-start gap-2 text-white rounded-md p-3 relative before:absolute before:content-"" before:h-full before:w-full before:bg-[#075985] before:duration-500 ${isVisible ? "before:left-full opacity-[1]" : "before:left-0 opacity-0"}`} style={{
                  background: "#075985"}}>
                 <span className="text-gray-100">{position}</span>
                  <div className="flex flex-col gap-1 text-gray-400">
                  <span className="">{company}</span>
                  <span>{date}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {
                      res.map(({res}, idx) => {
                        return(
                          <span key={idx}>{res}</span>
                        )
                      })
                    }
                  </div>
                </div>
                </div>

              )
            })
          }
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-start">
         
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Education</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              slug : webinar.slug,
              // link: '/'
            }
          ))}
          />
        </div>

    
      </div> */}
    </div>
  )
}


    {/* <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div> */}
export default UpcomingWebinars