import React from 'react'
import Button from './Button'
import '../Hero.css'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center  w-full mx-auto p-4 hero'>
      <div className='flex flex-col gap-4'>
      <p>IT'S TIME TO GET   </p>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl head'>HEALTHY<span className='text-blue-600'>AND FIT</span></h1>

      </div>
      <p className='text-sm md:text-base font-light'>Get a clear, simple workout plan with exercises<span className='text-blue-800 font-medium'> reps, and rest times for each muscle group</span> <span className='text-blue-800 font-medium'> No fluff just effective training routines to keep you on track.</span> achieve your dream physique with our community , Train Smart. Stay Consistent..</p>
        <Button func={() => {
            window.location.href = "#generate"
        }} text={"Get started"}></Button>  
          </div>
  )
}

export default Hero