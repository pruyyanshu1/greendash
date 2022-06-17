import React from "react"
import "./services.css"
import { online } from "../../dummyData"
import Heading from "../common/heading/heading"

const OnlineServices = () => {
  return (
    <>
    <hr/>
      <section className='online'>
        <div className='container'>
          <Heading subtitle=' Our Partners' title='Companies We Have Served' /> <hr/>

          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover}  />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineServices