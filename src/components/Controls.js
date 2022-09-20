import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faUser,faListCheck,faAddressCard,faAdjust } from '@fortawesome/free-solid-svg-icons'

const Controls = ({setactiveSec,activeSec,setlightMode,lightMode}) => {
  return (
    <div>
        <div className="theme-btn" onClick={()=>{setlightMode(!lightMode)}}>
            <span><FontAwesomeIcon icon={faAdjust}/></span>
        </div>
        <div className="controls">
            <div className={`control ${activeSec=='home'&&'active-btn'}`} onClick={()=>setactiveSec('home')}>
                <span><FontAwesomeIcon icon={faHouse} /></span>            
            </div>
            <div className={`control ${activeSec=='about'&&'active-btn'}`} onClick={()=>setactiveSec('about')}>
                <span><FontAwesomeIcon icon={faUser}/></span>
            </div>
            <div className={`control ${activeSec=='projects'&&'active-btn'}`} onClick={()=>setactiveSec('projects')}>
                <span><FontAwesomeIcon icon={faListCheck}/></span>
            </div>
            <div className={`control ${activeSec=='contact'&&'active-btn'}`} onClick={()=>setactiveSec('contact')}>
                <span><FontAwesomeIcon icon={faAddressCard}/></span>
            </div>
        </div>
    </div>
  )
}

export default Controls