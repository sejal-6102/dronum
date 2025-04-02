import React from 'react'
import PagesHero from '../PagesHero'
import Header from '../Header'
import Footer from '../Footer'
import MainServices from '../MainServices'

const AllServices = () => {
  return (
    <>
    <Header/>
    <PagesHero name="All Services" img="assets/img/2-2.jpg" />
    <MainServices/>
    <Footer/>
    </>
  )
}

export default AllServices