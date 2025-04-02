import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PagesHero from '../PagesHero'
import FaqDetails from '../FaqDetails'

const Faq = () => {
  return (
    <>
        <Header/>
        <PagesHero name='FAQ' img='assets/img/1-2.jpg'/>
        <FaqDetails/>
        <Footer/>
    </>
  )
}

export default Faq