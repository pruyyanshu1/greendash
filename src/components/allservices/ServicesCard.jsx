import React, { useState } from "react"
import { serviceCard , audit } from '../../dummyData' ;
import "./services.css"  
import Heading from "../common/heading/heading"
const ServicesCard  = () => {
  const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }
  return (
    <>
        <section className='sCard'>
        <div className='container grid2'>
        <Heading subtitle='Check Here' title='The Best Services' />
          {serviceCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          Click To Read More 
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <button className='outline-btn'><a href="#popup1">Know More</a></button>
              <div id="popup1" class="overlay">
                <div class="popup">
                  <h2>{val. sHeading}</h2>
                  <a class="close" href="#">&times;</a> <hr/>
                  <div class="content">
                   <p>{val.Content}</p>
                   <section className='faq'>
                    <div className='container'>
                      {audit.map((val, index) => (
                        <div className='box'>
                          <button className='accordion' onClick={() => toggle(index)} key={index}>
                            <h2>{val.title}</h2>
                            <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                          </button>
                          {click === index ? (
                            <div className='text'>
                              <p>{val.desc}</p>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </section>
                  </div>
                </div>
              </div>
             </div>
          ))}
        </div>
      </section> 
    </>
  )
}

export default ServicesCard