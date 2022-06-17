import React from "react"
import Heading from "../../common/heading/heading";
import "./hero.css"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className="blured"> 
          <div className='row'>
          <img src="./images/ms.png" className="image2" alt="mainscreen"/>
          <Heading className="headertlt" subtitle='Welcome To Greendash' title='Innovative Environment Friendly And Economical Solutions Provider' />
            <p className="lowtext">Our mission is to provide a serene, safe and sustainable environment for everyone. All our services are centered around zero harm policy which motivates us preserving the natural beauty and rhythm of mother earth.
            </p>
            <div className='button'>
              <button className='primary-btn'>
                GET SERVICES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW SERVICES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>  
      <div className='margin'></div>
    </>
  )
}

export default Hero