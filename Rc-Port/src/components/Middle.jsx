import React from 'react'
import leftimage from '../assets/image 1.png'
import Arrow from '../assets/Arrow.png'
import './Middle.css'

const Middle = () => {
  return (
    <div className='Middle-section' >
      <img className='Arrow-image' src= {Arrow} alt="" />
    <div className="left-middle">
      <div className="left-image">
        <img src={leftimage} alt="" />
      </div>
    </div>
    <div className="right-middle">
     <div className="first-line">
        <p>Hello! I Am<span>Srijon Chowdhury</span></p>
     </div>
     <div className="sec-line">
        <p>A Developer Who</p>
     </div>
     <div className="third-line">
        <h3>Judges a book <br />by its cover ...</h3>
     </div>
     <div className="Four-line">
        <p>Because if the cover does not impress you want else can?</p>
     </div>
    </div>
    </div>
  )
}

export default Middle
