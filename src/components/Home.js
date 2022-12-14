import React from 'react'
import Hero from '../img/hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

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
                    Hi, I'm <span>Pushkar Bansal. </span>
                    A programmer and web developer. 
                </h1>
                <p>I love to code and create beautiful and functional websites and programs. <br/><br/>
                I started programming during the covid lockdown, started web development, python and then I went more and more into it, learned many frameworks, libraries, and technologies and created a lot of projects
                </p>
                <div className="btn-con">
                    <a href="https://drive.google.com/file/d/11dhNc4bKf7boKuWwAZaT7e6WfROFLRcD/view?usp=sharing" rel='noreferrer' target="_blank" className="main-btn">
                        <span className="btn-text">Download Resume</span>
                        <span className="btn-icon"><FontAwesomeIcon icon={faDownload}/></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Home