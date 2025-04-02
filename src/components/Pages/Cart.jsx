import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PagesHero from '../PagesHero'
import AddCart from '../AddCart'

const Cart = () => {
  return (
    <>
        <Header/>
        <PagesHero img="assets/img/1-2.jpg" name ="Cart"/>
        <AddCart/>
        <Footer/>
    </>
  )
}

export default Cart