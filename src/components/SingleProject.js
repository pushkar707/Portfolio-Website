import React,{useState} from 'react'

const SingleProject = ({selected,url,name,description}) => {
    const [showDes, setshowDes] = useState(false)
  return (
    <a href={url} target="_blank">
        <div className={`project ${selected && 'project-selected'}`} onMouseOver={()=>{setshowDes(true)}} onMouseLeave={()=>{setshowDes(false)}}>
            <div className={`display ${showDes?'d-none':'d-block'}`}>{name}</div>
            <div className={`description ${showDes?'d-block':'d-none'}`}>{description}</div>
        </div>
    </a>
  )
}

export default SingleProject