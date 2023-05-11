import React,{useState,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faListCheck,faSuitcase,faLessThan } from '@fortawesome/free-solid-svg-icons'
import AboutChart from './AboutChart'
import proof from '../img/proof-1.jpg'
import Proof from './Proof'

const About = ({setactiveSec,lightMode}) => {
    const sample_proof = [{proof,id:1},{proof,id:1},{proof,id:1},{proof,id:1}]
    const proofs = [...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof,...sample_proof]
    const [fullScreen, setfullScreen] = useState(false)
    const [scrolly, setscrolly] = useState(0)
    const proofsRef = useRef()

    let count = 0;

    const shiftRight = () => {
        if(count<proofs.length){
            const proofContainer = document.querySelector('.proofs')
            proofContainer.style.transform += 'translateX(-155px)'
            count++
        }
    }

    const shiftLeft = () => {
        if(count>0){
            const proofContainer = document.querySelector('.proofs')
            proofContainer.style.transform += 'translateX(155px)'
            count--
        }
    }
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
                {/* <div className="timeline">
                    <div className="icon"><FontAwesomeIcon icon={faSuitcase} /></div>
                    <div>
                        <p className="timeline-timing">January 2022 - July 2022</p>
                        <p className="timeline-heading"><span className='position'>Full Stack web developer</span> - Stickman Technologies</p>
                        <p className="timeline-description">
                            <ul>
                                <li>Worked on existing websites, and created websites and web solution from complete scratch for various brands and companies.</li>
                                <li>Created <span className='fw-bold'>admin dashboard</span> for a testing products for <a href="https://geogroup.in/">geogroup</a></li>
                                <li>Made full stack changes to <span className="fw-bold">ecommerce</span> website  - <a href="https://online.marvansmobile.com/">Marvans Mobile</a></li>
                                <li>Wrote backend for <span className="fw-bold">inventory management</span> for marvans stock</li>
                                <li>Worked on ecommerce and admin dashboard for <a href="https://store.usarocks.biz/">USA Rocks</a></li>
                                <li>Any many more small projects.</li>
                            </ul>
                        </p>
                        <p className='proof-heading'>Proof of work</p>
                        <div className="proof-container">
                            <div className="previous" onClick={shiftLeft}><FontAwesomeIcon icon={faLessThan} /></div>
                                <div className="proof-overflow">
                                    <div className="proofs" ref={proofsRef}>
                                        {proofs.map(proof => {
                                                return <Proof {...proof} id={proof.id} setfullScreen={setfullScreen} scrolly={scrolly} setscrolly={setscrolly} proofsRef={proofsRef}/>
                                        })}
                                    </div>
                                </div>
                            <div className="next" onClick={shiftRight}><FontAwesomeIcon icon={faLessThan} /></div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="timeline">
                    <div className="icon"><FontAwesomeIcon icon={faSuitcase} /></div>
                    <div>
                        <p className="timeline-timing">July 2022 - FEB 2023</p>
                        <p className="timeline-heading"><span className='position'>Freelancer</span> - Upwork, linkedin</p>
                        <p className="timeline-description">
                            <ul>
                                <li>Created a mini <span className="fw-bold">web-page builder</span>(django) - <a href="http://vcard-env-last.eba-pbkqwgqd.ap-south-1.elasticbeanstalk.com/">vCard</a></li>
                                <li>Created a website for people to get their texts translated by professionals - SPA through backend (flask), no JS because used in TOR browser <a href="http://pushkar707.pythonanywhere.com/">View (not completed)</a></li>
                                <li>A python compiler project in django - <a href="#">View</a></li>
                                <li>Electronics Site for <a href="https://newaggarwalelectricals.netlify.app/">New Aggarwal Electricals</a></li>
                                <li>Pizza page for - <a href="https://toppers-pizza.netlify.app/">Toppers pizza</a></li>
                            </ul>
                        </p>
                        <p className='proof-heading'>Proof of work</p>
                        <div className="proof-container">
                            <div className="previous" onClick={shiftLeft}><FontAwesomeIcon icon={faLessThan} /></div>
                                <div className="proof-overflow">
                                    <div className="proofs">
                                        {proofs.map(proof => {
                                                return <Proof {...proof} id={proof.id} setfullScreen={setfullScreen} scrolly={scrolly} setscrolly={setscrolly}/>
                                        })}
                                    </div>
                                </div>
                            <div className="next" onClick={shiftRight}><FontAwesomeIcon icon={faLessThan} /></div>
                        </div>
                    </div>
                </div> */}
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