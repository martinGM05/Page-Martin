import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Projects = () => {

  return (
    <div className="flex flex-col p-28">
      <h1 className="text-3xl font-bold">These are some of my projects .</h1>
      <div className='flex flex-wrap justify-center mt-11'>

        <div className='w-auto p-2'>
          <div className='flex flex-col shadow-lg'>
            <div className='w-auto h-10 top-0 ml-2'>
              <h3 className='text-2xl font-bold mb-5'> Pokedex </h3>
            </div>
            <a href='https://martingm05.github.io/Pokedex' target='_blank' rel='noopener noreferrer'>
              <img src='https://firebasestorage.googleapis.com/v0/b/flutter-varios-d288a.appspot.com/o/Pokedex.png?alt=media&token=9a45044e-9424-403a-b64e-e7e71fc31a1a' alt='Project'
                className='w-auto h-44 brightness-50 hover:brightness-100 transition ease-in-out duration-150' />
            </a>
            <div className='flex flex-row m-3 overflow-y-hidden w-full'>
              <FontAwesomeIcon icon={['fab', 'html5']} className='w-auto h-8 ml-3 text-gray-700 hover:text-html
              transition ease-in-out duration-300 
              ' />
              <FontAwesomeIcon icon={['fab', 'css3-alt']} className='w-auto h-8 ml-3 text-gray-700 hover:text-css
              transition ease-in-out duration-300
              ' />
              <FontAwesomeIcon icon={['fab', 'js-square']} className='w-auto h-8 ml-3 text-gray-700 hover:text-javascript
              transition ease-in-out duration-300
              ' />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Projects