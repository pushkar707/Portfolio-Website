import React from 'react'
import Proof from './Proof

const Timeline = () => {
  return (
    <div className="timeline">
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
    </div>
  )
}

export default Timeline