import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faListCheck } from '@fortawesome/free-solid-svg-icons'
import AboutChart from './AboutChart'
import SkillsTable from './SkillsTable'
import {proofs} from '../data'
import Timeline from './Timeline'
import AboutStats from './AboutStats'

const About = ({setactiveSec,lightMode}) => {
    const [fullScreen, setfullScreen] = useState(false)
    
  return (
    <section className={`section sec2 about ${fullScreen ? 'h-100':""}`} id="about">
        <div className="main-title">
            <h2>My <span>Skills</span><span className="bg-text">about me</span></h2>
        </div>
        {/* <AboutStats/> */}
        <SkillsTable/>
        {/* <AboutChart lightMode={lightMode}/> */}
        <div className="timeline-section">
            <p className="timeline-section-heading">MY TIMELINE</p>
            <div className="timelines">
                {proofs.map((timeline,index) => {
                    return <Timeline setfullScreen={setfullScreen} {...timeline} key={index}/>
                })}
            </div>
        </div>
        <div className="abt-btns">
            <div className="btn-con">
                <a href="https://drive.google.com/file/d/11dhNc4bKf7boKuWwAZaT7e6WfROFLRcD/view?usp=sharing" target="_blank" className="main-btn">
                    <span className="btn-text">Download Resume</span>
                    <span className="btn-icon"><FontAwesomeIcon icon={faDownload}/></span>
                </a>
            </div>
            <div className="btn-con">
                <span className="main-btn" onClick={()=>{setactiveSec('projects')}}>
                    <span className="btn-text">View Projects</span>
                    <span className="btn-icon"><FontAwesomeIcon icon={faListCheck}/></span>
                </span>
            </div>
        </div>
    </section>
  )
}

export default About