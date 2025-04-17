import React, { useState } from 'react'
import PagesHero from '../PagesHero'
import Header from '../Header'
import Footer from '../Footer'
import MainServices from '../MainServices'

const AllServices = () => {
  return (
    <>
    <Header/>
    <PagesHero name="Who we are" img="assets/img/2-2.jpg" />
    <MainServices/>
    <Footer/>
    </>
  )
}

export default AllServices