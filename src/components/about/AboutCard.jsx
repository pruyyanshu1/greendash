import React from 'react'
import Heading from '../common/heading/heading'
import { homeAbout } from "../../dummyData"
import Awrapper from "./Awrapper"
import './about.css';

const Aboutcard = () => {
  return (
    <>
    <section className="aboutHome">
        <div className="container flexsb">
            <div className="left row ">
            <div id='slider'>
					  <figure>
						    <img src="https://www.teriin.org/sites/default/files/inline-images/water-industry3.jpg"/>
						    <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-153935,resizemode-1,msid-70774599/industry/indl-goods/svs/chem-/-fertilisers/government-looks-to-cut-down-imports-of-chemicals-make-india-manufacturing-hub.jpg"/>
						    <img src="https://www.gep.com/prod/s3fs-public/blog-images/152-mro-sourcing-industrial-maintenance-services-in-north-america.jpg"/>
					  </figure>
            </div>
            <div id='slider'>
					  <figure>
						    <img src="https://www.hyperfilteration.in/images/services/s10.jpg"/>
						    <img src="https://m.economictimes.com/thumb/msid-88490836,width-1200,height-900,resizemode-4,imgsize-155380/boosted-by-localisation-indian-electronics-manufacturing-sector-to-touch-rs-7-lakh-cr-next-fiscal.jpg"/>
						    <img src="https://www.rajdeepboiler.co.in/upload/product/powerpack-boiler-20180918143441.jpg"/>
					  </figure>
            </div>
            </div>
            <div className="right row">
                <Heading subtitle = "All Solutions" title="For All Scale Industries"/>
                <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexsb'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>   
      <Awrapper />
    </>
  )
}

export default Aboutcard