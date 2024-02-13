import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faUser,faListCheck,faAddressCard,faAdjust } from '@fortawesome/free-solid-svg-icons'
import { useLocation, Link } from 'react-router-dom';

const Controls = ({setlightMode,lightMode}) => {
    const location = useLocation();
  return (
    <div>
        <div className="theme-btn" onClick={()=>{setlightMode(!lightMode)}}>
            <span><FontAwesomeIcon icon={faAdjust}/></span>
        </div>
        <div className="controls">
            <Link to='/' className={`control ${location.pathname=='/'&&'active-btn'}`}>
                <span><FontAwesomeIcon icon={faHouse} /></span>            
            </Link>
            <Link to='/about' className={`control ${location.pathname=='/about'&&'active-btn'}`}>
                <span><FontAwesomeIcon icon={faUser}/></span>
            </Link>
            <Link to='/projects' className={`control ${location.pathname=='/projects'&&'active-btn'}`}>
                <span><FontAwesomeIcon icon={faListCheck}/></span>
            </Link>
            <Link to='/contact' className={`control ${location.pathname=='/contact'&&'active-btn'}`}>
                <span><FontAwesomeIcon icon={faAddressCard}/></span>
            </Link>
        </div>
    </div>
  )
}

export default Controls