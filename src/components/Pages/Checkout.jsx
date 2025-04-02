import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PagesHero from '../PagesHero'
import CheckOut from '../CheckOut'

const Checkout = () => {
  return (
    <>
    <Header/>
    <PagesHero img="assets/img/1-2.jpg" name ="Checkout"/>
    <CheckOut/>
    <Footer/>
    </>
  )
}

export default Checkout