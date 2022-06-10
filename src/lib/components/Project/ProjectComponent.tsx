import React from 'react'
import { projectsI } from '../../data/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectComponent = (project: projectsI) => {
    return (
        <div className='w-auto p-2' key={project.id}>
            <div className='flex flex-col shadow-lg'>
                <div className='w-auto h-10 top-0 ml-2'>
                    <h3 className='text-2xl font-bold mb-5'> {project.name} </h3>
                </div>
                <a href={project.page} target='_blank' rel='noopener noreferrer'>
                    <img src={project.img} alt='Project'
                        className='w-auto h-44 brightness-50 hover:brightness-100 transition ease-in-out duration-150' />
                </a>
                <div className='flex flex-row m-3 overflow-y-hidden w-full'>
                    {
                        project.technologies.map((tech, index) => (
                            <FontAwesomeIcon icon={tech.icon} key={index} className={'w-auto h-8 ml-3 text-gray-700 hover:text-' + tech.name + ' transition ease-in-out duration-150'} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent