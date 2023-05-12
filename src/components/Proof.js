import React,{useState,useRef} from 'react'

const Proof = ({img,title,setfullScreen,scrolly,setscrolly,proofsRef}) => {
    const [expandImage, setexpandImage] = useState(false)
    const [showProofTitle, setshowProofTitle] = useState(false)
    const [currTransform, setcurrTransform] = useState(0)

    const currProof = useRef()
    
    const showfullScreen = () => {
        setcurrTransform(proofsRef.current.style.transform)
        proofsRef.current.style.transform = ''
        proofsRef.current.style.transition = 'none'
        setexpandImage(true)
        setfullScreen(true)
        setscrolly(window.scrollY)
    }

    const removeFullScreen = () =>{
        setfullScreen(false);
        setexpandImage(false);
        proofsRef.current.style.transform = currTransform
        proofsRef.current.style.transition = 'var(--primary-transition)'
        setTimeout(() => {
            window.scrollTo(0,scrolly)            
        }, 1);
    }
    if(!expandImage){
        return (
        <div className="proof" onMouseOver={() => {setshowProofTitle(true)}} onMouseLeave={() => setshowProofTitle(false)} onClick={showfullScreen} ref={currProof}>
            <img src={img} alt="" />
            {showProofTitle && <div className="proof-title" >{title}</div>}
        </div>)
    }else{
        return (
            <div className="proof-full" onClick={removeFullScreen}>
                <img src={img} alt="" />
                {/* <div className={`proof-title ${!showProofTitle && 'd-none'}`}>Geo Tech</div> */}
            </div>
        )
    }
}

export default Proof