import React from 'react'
import { BackgroundBeams } from './ui/background-beams'

export const Beams = () => {
  return (
    <div className='h-[300px] relative'>
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0"/>
    </div>
  )
}
