import React,{useState} from 'react'
import SingleProject from './SingleProject'
import {projects} from '../data'
import Carousel from './Caraosel'

const Projects = () => {
    const categories = ['full-stack','frontend', 'python']
    const [currCategory, setcurrCategory] = useState('frontend')
    const [projectSelected, setprojectSelected] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="section sec3 projects" id="projects">
        <div className="main-title">
            <h2>My <span>Portfolio</span><span className="bg-text">my projects</span></h2>
        </div>

        <div className="caraosel-container">
            <Carousel projectSelected={projectSelected} setprojectSelected={setprojectSelected} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
        <div className="projects-grp">
            {projects.map((project,index)=>{
                if (project.category===currCategory) {
                    return <div key={index} onMouseOver={() => {setprojectSelected(index); setCurrentIndex(0)}}>
                        <SingleProject selected={projectSelected === index ? true : false} {...project} />
                    </div>
                }
            })}
        </div>
    </section>
  )
}

export default Projects