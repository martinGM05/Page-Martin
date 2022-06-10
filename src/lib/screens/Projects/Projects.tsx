import React, { useState } from 'react'
import { projects as ProjectList } from '../../data/Projects'
import ProjectComponent from '../../components/Project/ProjectComponent'

const Projects = () => {

  const [listProjects, setListProjects] = useState(ProjectList)

  return (
    <div className="flex flex-col p-28">
      <h1 className="text-3xl font-bold">These are some of my projects .</h1>
      <div className='flex flex-wrap justify-center mt-11'>
        {
          listProjects.map(project => (
            <ProjectComponent  {...project}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects