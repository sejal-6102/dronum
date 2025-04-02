import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PagesHero from '../PagesHero'
import OneProduct from '../OneProduct'

const SingleProduct = () => {
  return (
    <>
        <Header/>
        <PagesHero name="DJI Inspire 2" img="assets/img/5-2.jpg"  />
        <OneProduct/>
        <Footer/>
    </>
  )
}

export default SingleProduct