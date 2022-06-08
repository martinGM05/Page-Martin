import React, { useState } from 'react'
import { technologies } from '../../../data/tech';

const Tech = () => {

  const [tech, setTech] = useState(technologies);

  return (
    <div className='container mx-auto px-8 md:px-3 lg:px-5 w-full'>
      <div className='lg:ml-10 bg-tertiary md:w-80 h-20 flex items-center justify-center rounded-tl-3xl rounded-br-3xl'>
        <h2 className='font-bold text-4xl md:text-3xl lg:text-4xl'>
          My Skills
        </h2>
      </div>
      <h2 className='text-2xl md:text-3xl lg:text-4xl p-5 flex justify-center'>
        I work with these languages
      </h2>
      <div className='flex flex-wrap justify-center mt-4'>
        {
          tech.techs.map((tech, index) => {
            return (
              <div className='w-full lg:w-1/4 p-2' key={tech.id}>
                <div className='flex flex-col items-center justify-center shadow-lg'>
                  <img src={tech.img} alt={tech.name} className='w-16 h-16' />
                  <h3 className='text-center text-2xl md:text-3xl lg:text-3xl p-3'>{tech.name}</h3>
                </div>
              </div>
            )
          })
        }
      </div>

      <h2 className='text-2xl md:text-3xl lg:text-4xl p-5 m-10 flex justify-center'>
        For Backend
      </h2>
      <div className='flex flex-wrap justify-center mt-4'>
        {
          tech.backend.map((tech, index) => {
            return (
              <div className='w-full lg:w-1/4 p-2' key={tech.id}>
                <div className='flex flex-col items-center justify-center shadow-lg'>
                  <img src={tech.img} alt={tech.name} className='w-auto h-16' />
                  <h3 className='text-center text-2xl md:text-3xl lg:text-3xl p-3'>{tech.name}</h3>
                </div>
              </div>
            )
          })
        }
      </div>

      <h2 className='text-2xl md:text-3xl lg:text-4xl p-5 m-10 flex justify-center'>
        For Frontend Web
      </h2>
      <div className='flex flex-wrap justify-center mt-4'>
        {
          tech.frameworksWeb.map((tech, index) => {
            return (
              <div className='w-full lg:w-1/4 p-2' key={tech.id}>
                <div className='flex flex-col items-center justify-center shadow-lg'>
                  <img src={tech.img} alt={tech.name} className='w-auto h-16' />
                  <h3 className='text-center text-2xl md:text-3xl lg:text-3xl p-3'>{tech.name}</h3>
                </div>
              </div>
            )
          })
        }
      </div>

      <h2 className='text-2xl md:text-3xl lg:text-4xl p-5 m-10 flex justify-center'>
        For Mobile
      </h2>
      <div className='flex flex-wrap justify-center mt-4'>
        {
          tech.frameworksMobile.map((tech, index) => {
            return (
              <div className='w-full lg:w-1/4 p-2' key={tech.id}>
                <div className='flex flex-col items-center justify-center shadow-lg'>
                  <img src={tech.img} alt={tech.name} className='w-auto h-16' />
                  <h3 className='text-center text-2xl md:text-3xl lg:text-3xl p-3'>{tech.name}</h3>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Tech