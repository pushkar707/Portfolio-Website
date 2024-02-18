import React from 'react'
import Hero from '../img/hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faListCheck, faUser } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <header className="section sec1" id="home">
        <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src={Hero} alt=""/>
                </div>
            </div>
            <div className="right-header">
                <h1 className="name">
                    Hi, I'm <span>Pushkar Bansal. </span> <br />
                    A programmer and web developer. 
                </h1>
                <p>Love to see code turning to powerful softwares</p>

                <p>Passionate MERN Stack developer with a knack for crafting robust and scalable web applications. Proficient in Python (Django and Flask) as well. Committed to adhering to best coding practices, ensuring excellence in error handling, security, performance, hosting, testing, and monitoring.</p>
                <div className='home-btns' style={{display: "flex", columnGap: "2rem", marginTop:"1rem", flexWrap:"wrap", gap: "16px"}} >
                    <div className="btn-con">
                        <a href="/about" className="main-btn">
                            <span className="btn-text">View Skills</span>
                            <span className="btn-icon"><FontAwesomeIcon icon={faUser}/></span>
                        </a>
                    </div>

                    <div className="btn-con">
                        <a href="/projects" className="main-btn">
                            <span className="btn-text">View Projects</span>
                            <span className="btn-icon"><FontAwesomeIcon icon={faListCheck}/></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Home