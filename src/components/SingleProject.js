import React,{useState} from 'react'

const SingleProject = ({url,name,description}) => {
    const [showDes, setshowDes] = useState(false)
  return (
    <a href={url} target="_blank">
        <div className="project" onMouseOver={()=>{setshowDes(true)}} onMouseLeave={()=>{setshowDes(false)}}>
            <div className={`display ${showDes?'d-none':'d-block'}`}>{name}</div>
            <div className={`description ${showDes?'d-block':'d-none'}`}>{description}</div>
        </div>
    </a>
  )
}

export default SingleProject