import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Head from './components/common/heading/Header';
import Home from './components/home/Hero/Home';
import About from "./components/about/About"
import ServicesHome from './components/allservices/ServicesHome';
import Team from './components/team/Team';
import Product from './components/products/Product';
import Contact from "./components/contact us/Contact"
import Footer from './components/common/footer/Footer';
import Blog from './components/blog/Blog';
import './App.css';

const App = () => {
  return (
    <>
    <Router>
          <Head/>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/services' element={<ServicesHome/>} />
        <Route exact path='/team' element= {<Team/>} />
        <Route exact path='/pricing' element= {<Product/>} />
        <Route exact path='/contact' element= {<Contact/>} />
        <Route exact path='/Blog' element= {<Blog/>} />
        </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default App