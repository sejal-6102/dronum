import React, { useState } from 'react'
import PagesHero from '../PagesHero'
import Header from '../Header'
import Footer from '../Footer'
import MainServices from '../MainServices'

const AllServices = () => {
  return (
    <>
    <Header/>
    <PagesHero name="Why Choose Us" img="assets/img/pic4-3.jpg"/>
    <MainServices/>
    <Footer/>
    </>
  )
}

export default AllServices