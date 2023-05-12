import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faListCheck } from '@fortawesome/free-solid-svg-icons'
import AboutChart from './AboutChart'
import {proofs} from '../data'
import Timeline from './Timeline'

const About = ({setactiveSec,lightMode}) => {
    const [fullScreen, setfullScreen] = useState(false)
    
  return (
    <section className={`section sec2 about ${fullScreen ? 'h-100':""}`} id="about">
        <div className="main-title">
            <h2>My <span>Skills</span><span className="bg-text">about me</span></h2>
        </div>
        <div className="about-stats">
            <div className="progress-bars">
                <div className="progress-bar">
                    <p className="prog-title">html5</p>
                    <div className="progress-con">
                        <p className="prog-text">95%</p>
                        <div className="progress">
                            <span className="html"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">ExpressJS</p>
                    <div className="progress-con">
                        <p className="prog-text">80%</p>
                        <div className="progress">
                            <span className="express"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">CSS</p>
                    <div className="progress-con">
                        <p className="prog-text">85%</p>
                        <div className="progress">
                            <span className="css"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">Django</p>
                    <div className="progress-con">
                        <p className="prog-text">80%</p>
                        <div className="progress">
                            <span className="django"></span>
                        </div>
                    </div>
                </div> 
                <div className="progress-bar">
                    <p className="prog-title">JavaScript</p>
                    <div className="progress-con">
                        <p className="prog-text">85%</p>
                        <div className="progress">
                            <span className="js"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">Python</p>
                    <div className="progress-con">
                        <p className="prog-text">80%</p>
                        <div className="progress">
                            <span className="python"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">ReactJS</p>
                    <div className="progress-con">
                        <p className="prog-text">85%</p>
                        <div className="progress">
                            <span className="react"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">Flask</p>
                    <div className="progress-con">
                        <p className="prog-text">87%</p>
                        <div className="progress">
                            <span className="flask"></span>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
        <AboutChart lightMode={lightMode}/>
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