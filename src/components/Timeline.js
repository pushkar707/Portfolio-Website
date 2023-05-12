import React,{useState,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSuitcase,faLessThan } from '@fortawesome/free-solid-svg-icons'
import Proof from './Proof'

const Timeline = ({time,heading,description,proofs,setfullScreen}) => {
    const [scrolly, setscrolly] = useState(0)
    const proofsRef = useRef()
    const [count, setcount] = useState(0)

    const shiftRight = () => {
        if(count<proofs.length){
            proofsRef.current.style.transform += 'translateX(-155px)'
           setcount(count+1);
        }
    }

    const shiftLeft = () => {
        if(count>0){
            proofsRef.current.style.transform += 'translateX(155px)'
            setcount(count-1);
        }
    }
  return (
    <div className="timeline">
        <div className="icon"><FontAwesomeIcon icon={faSuitcase} /></div>
        <div>
            <p className="timeline-timing">{time}</p>
            <p className="timeline-heading" dangerouslySetInnerHTML={{__html:heading}}></p>
            <p className="timeline-description" dangerouslySetInnerHTML={{__html:description}} ></p>
            <p className='proof-heading'>Proof of work</p>
            <div className="proof-container">
                <div className="previous" onClick={shiftLeft}><FontAwesomeIcon icon={faLessThan} /></div>
                    <div className="proof-overflow">
                        <div className="proofs" ref={proofsRef}>
                            {proofs.map((proof,index) => {
                                    return <Proof {...proof} key={index} setfullScreen={setfullScreen} scrolly={scrolly} setscrolly={setscrolly} proofsRef={proofsRef}/>
                            })}
                        </div>
                    </div>
                <div className="next" onClick={shiftRight}><FontAwesomeIcon icon={faLessThan} /></div>
            </div>
        </div>
    </div>
  )
}

export default Timeline