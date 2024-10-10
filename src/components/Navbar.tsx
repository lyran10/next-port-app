'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
const sideMenu = [
  {
    id : "/",
    content : "Home"
  },
  {
    id : "#about",
    content : "About Me"
  },
  {
    id : "#about",
    content : "Skills"
  },
  {
    id : "#education",
    content : "Education"
  },
  {
    id : "#education",
    content : "Experience"
  },
  {
    id : "#contact",
    content : "Contact Me"
  },
]

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [translate, setTranslate] = useState<boolean>(false)
  return (
    <div
    className={cn(`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50`, className)}
    >
      <div className="hidden md:flex lg:flex xl:flex 2xl:flex justify-center items-center shadow-2xl">
      <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <Link href={"#about"}>
            <MenuItem setActive={setActive} active={active} item="About me">
            
            </MenuItem>
            </Link>
            <Link href={"#about"}>
            <MenuItem setActive={setActive} active={active} item="Skills">
            
            </MenuItem>
            </Link>

            <Link href={"#projects"}>
            <MenuItem setActive={setActive} active={active} item="Projects">
            
            </MenuItem>
            </Link>

            <Link href={"#education"}>
            <MenuItem setActive={setActive} active={active} item="Education">
            
            </MenuItem>
            </Link>
            <Link href={"#education"}>
            <MenuItem setActive={setActive} active={active} item="Experience">
            
            </MenuItem>
            </Link>
            {/* <MenuItem
            setActive={setActive} active={active} item="Our Courses"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/courses">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">
              Music Production
            </HoveredLink>
               </div>
            </MenuItem> */}
            <Link href={"#contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            
            </MenuItem>
            </Link>
        </Menu>
      </div>
        <div className="relative flex md:hidden lg:hidden cursor-pointer xl:hidden 2xl:hidden">
          <button onClick={() => setTranslate(bool => !bool ? true : false)} className="absolute right-5 flex gap-2 flex-col">
              <div className={`duration-300  h-[1px] bg-slate-200 ${translate ? "-rotate-45 -translate-y-[1px] w-7" : "rotate-0 translate-y-0 w-10"}`}></div>
              <div className={`duration-300 w-10 h-[1px] bg-slate-200 ${translate ? "rotate-90 translate-x-1" : "rotate-0 translate-y-0"}`}></div>
              <div className={`duration-300 h-[1px] bg-slate-200 ${translate ? "rotate-45 translate-y-[1px] w-7" : "rotate-0 translate-y-0 w-10"}`}></div>
          </button>

          <div style={{
                  background:
                    "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                }} className={`rounded-lg duration-300 absolute h-screen w-[300px] bg-black ${translate ? "translate-x-0" : "-translate-x-[500px]"} flex flex-col gap-1 `}>
                  {
                    sideMenu.map(({id, content}) => {
                      return(
                        <a key={content} href={id} className="p-3 text-slate-300 shadow-chart">{content}</a>
                      )
                    })
                  }
          </div>
          
        </div>
    </div>
  )
}

export default Navbar