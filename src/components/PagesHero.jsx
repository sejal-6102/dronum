import React from 'react'
import { Link } from 'react-router-dom'

const PagesHero = (props) => {
  return (
    <>
<div className="pages-outer" style={{backgroundImage: `url(${props.img})`}}>
    <div className="container">
    <div className="pages-inner">
        <div className="title  animate__animated animate__zoomIn">
            <div className="sub-title">
                <h2>{props.name}</h2>
            </div>
        </div>
        <ul className=' animate__animated animate__zoomIn'>
            <li><Link to="/">Home</Link></li>
            <li><span>{props.name}</span></li>
        </ul>
    </div>
    </div>
</div>
    </>
  )
}

export default PagesHero