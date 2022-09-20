import React,{useState} from 'react'
import SingleProject from './SingleProject'
import data from '../data'

const Projects = () => {
    const categories = ['full-stack','frontend', 'python']
    const [currCategory, setcurrCategory] = useState('full-stack')
  return (
    <section className="section sec3 projects" id="projects">
        <div className="main-title">
            <h2>My <span>Portfolio</span><span className="bg-text">my projects</span></h2>
        </div>
        <div className="project-nav">
            {categories.map((category)=>{
               return <div className={`project-cat ${category===currCategory && 'curr-cat'}`} onClick={()=>{setcurrCategory(category)}}>{category}</div>
            })}            
        </div>
        <div className="projects-grp">
            {data.map((project)=>{
                if (project.category===currCategory) {
                    return <SingleProject {...project} key={project.id}/>
                }
            })}
        </div>
    </section>
  )
}

export default Projects