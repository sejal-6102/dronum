import React from 'react'
import Header from '../Header'
import PagesHero from '../PagesHero'
import Footer from '../Footer'
import ShopList from '../ShopList'

const Shop = () => {
  return (
    <>
        <Header/>
        <PagesHero img="assets/img/1-2.jpg" name="Shop"/>
        <ShopList itemsPerPage={6}/>
        <Footer/>
    </>
  )
}

export default Shop