import React from "react"
import { blog } from "../../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexsb'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Greendash</h1>
            <span>Environomical & Solutions Pvt. Ltd.</span>
            <p>We Belive To Deliver Our Clients Environment-Friendly Solutions At Economical Cost
            </p>

            <a href='https://www.facebook.com/Greendash-Environomical-Solutions-Private-Limited-106708805409227'><i className="fa fa-facebook-official icon"></i></a>
            <a href='https://www.instagram.com/greendash._/'><i className="fa fa-instagram icon icon"></i></a>
            <a href='https://www.linkedin.com/in/ashok-tambi-3a45a59/'><i className="fa-brands fa-linkedin icon"></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexsb'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                MIIC , MNIT CAMPUS , JAIPUR | IN
              </li>
              <li>
             <a href="tel:8003097697"><i className='fa fa-phone-alt'></i>
                +91 8003097697</a>
              </li>
              <li>
               <a href="mailto:greendashindia@gmail.com"><i className='fa fa-paper-plane'></i>greendashindia</a> 
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | Designed <i className='fa fa-heart'></i> by 
          Priyanshu Goswami
        </p>
      </div>
    </>
  )
}

export default Footer