import React from 'react'
import { projectsI } from '../../data/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectComponent = (project: projectsI) => {
    return (
        <div className='w-auto p-2' key={project.id}>
            <div className='flex flex-col shadow-lg'>
                <div className='w-auto h-10 '>
                    <h3 className='text-2xl font-bold mb-5'> {project.name} </h3>
                </div>
                <a href={project.page} target='_blank' rel='noopener noreferrer'>
                    <img src={project.img} alt='Project'
                        className='w-80 h-44 brightness-50 hover:brightness-100 transition ease-in-out duration-150
                        object-scale-down rounded-lg' />
                </a>
                <div className='flex flex-row m-3 overflow-y-hidden w-full'>
                    {
                        project.technologies.map((tech, index) => (
                            // <FontAwesomeIcon icon={tech.icon} key={index}
                            //     className={'w-auto h-8 ml-3 text-gray-700 hover:text-' + tech.name + ' transition ease-in-out duration-150'} />
                            <FontAwesomeIcon icon={tech.icon} key={index}
                                className={tech.name === 'react' ? 'w-auto h-8 ml-3 text-gray-700 hover:text-react transition ease-in-out duration-150' : tech.name === 'javascript' ? 'w-auto h-8 ml-3 text-gray-700 hover:text-javascript transition ease-in-out duration-150' : tech.name === 'vue' ? 'w-auto h-8 ml-3 text-gray-700 hover:text-vue transition ease-in-out duration-150' : tech.name === 'html' ? 'w-auto h-8 ml-3 text-gray-700 hover:text-html transition ease-in-out duration-150' : tech.name === 'css' ? 'w-auto h-8 ml-3 text-gray-700 hover:text-css transition ease-in-out duration-150' : tech.name === 'bootstrap' ? 'w-auto h-8 ml-3 text-gray-700 hover:text-bootstrap transition ease-in-out duration-150' : tech.name === 'gcp' ? 'w-auto h-8 ml-3 text-gray-700 hover:text-gcp transition ease-in-out duration-150' : tech.name === 'github' ? 'w-auto h-8 ml-3 text-gray-700 hover:text-github transition ease-in-out duration-150' : 'w-auto h-8 ml-3 text-gray-700 hover:text-other transition ease-in-out duration-150'} />
                        ))
                    }
                    <a href={project.repository} target='_blank' rel='noopener noreferrer' className='w-auto h-8 ml-3 text-gray-700 hover:text-blue-500 transition ease-in-out duration-150'>
                        <FontAwesomeIcon icon={['fab', 'github']} className='w-auto h-8 ml-3 text-gray-700 hover:text-github transition ease-in-out duration-150' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent