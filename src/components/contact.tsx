'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import axios from 'axios';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [person,setPerson] = useState<any>({msg : "",email : "",from : ""})
  const [loader, setLoader] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  const handleClick = async(e : any) => {
    e.preventDefault()
    setLoader(true)
    console.log(person)
    try {
        const { data } = await axios.post("https://port-backend.onrender.com/api/sendemail",{person})
        console.log(data.msg)
        setLoader(false)
        setPerson({email : "", msg : ""})
        if(data.msg === "success"){
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          },8000)
        }

    } catch (error) {
      console.log(error)
      setLoader(false)
    }
  }

console.log(person)

  return (
    <div id='contact' className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {' '}
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {' '}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Feel free to reach out for any question.
        </p>
        <form onSubmit={(e) => handleClick(e)} className="space-y-4 mt-4">
          <input
            type="email"
            value={person.email}
            onChange={(e) => setPerson({...person, email : e.target.value})}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={person.msg}
            onChange={(e) => setPerson({...person, msg : e.target.value})}
            placeholder="Your message"
            className="rounded-lg border text-slate-300 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            // onClick={(e) => handleClick(e)}
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            {
              loader ? "Loading" : " Send Message"
            }
           
          </button>
        </form>
        <div className={`duration-300 absolute w-full flex justify-center items-center  bottom-full ${success ? "opacity-[1] z-[1000] translate-y-0": "opacity-[0] z-[-1] translate-y-5"}`}>
          <div className='p-3 bg-green-500 rounded-lg'>
          <span className='text-white'>Message send Successfully.</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;