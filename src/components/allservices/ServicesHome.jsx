import React from 'react'
import Back from '../common/back/Back'
import OnlineServices from './OnlineServices'
import ServicesCard from './ServicesCard'
const ServicesHome = () => {
  return (
    <>
    <Back title ="Explore services"/>
    <ServicesCard/>
    <OnlineServices/>
    </>
  )
}

export default ServicesHome
