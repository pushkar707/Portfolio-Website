import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section className="section sec4 contact" id="contact">
        <div className="contact-container">
            <div className="main-title">
                <h2>Contact <span>Me</span><span className="bg-text">Connect</span></h2>
            </div>
            <div className="contact-content-con">
                <div className="left-contact">
                    <h4>Contact me here</h4>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae dolorum nemo placeat numquam similique?</p> */}
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="icon">
                                <div>
                                    <FontAwesomeIcon icon={faLocationDot}/>
                                </div>
                                Location
                            </div>
                            <p>
                                Narela,New Delhi-110040
                            </p>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                Email
                            </div>
                            <p>
                                bansalpushkar100@gmail.com
                            </p>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <div>
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>
                                Mobile Number
                            </div>
                            <p>
                                7048979363
                            </p>
                        </div>
                    </div>
                    <div className="contact-icons">
                        <div className="contact-icon">
                            <a href="https://www.github.com/pushkar707" target="_blank">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                        <div className="contact-icon">
                            <a href="www.github.com/pushkar707" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="right-contact">
                    <form action="mailto:bansalpushkar100@gmail.com" className="contact-form">
                        <div className="input-control input-control-2">
                            <input type="text" required placeholder="YOUR NAME"/>
                            <input type="email" required placeholder="YOUR EMAIL"/>
                        </div>
                        <div className="input-control">
                            <input type="text" required placeholder="Enter Subject"/>
                        </div>
                        <div className="input-control">
                            <textarea rows="6" required placeholder="Message Here"></textarea>
                        </div>
                        <div className="submit-btn btn-con">
                            <a href="" className="main-btn">
                                <span className="btn-text">Submit</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact