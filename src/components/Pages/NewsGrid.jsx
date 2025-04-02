import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PagesHero from '../PagesHero'
import News from '../News'

const NewsGrid = () => {
  return (
    <>
    <Header/>
    <PagesHero img="assets/img/5-2.jpg" name="Latest News"/>
    <News/>
    <Footer/>
    </>
  )
}

export default NewsGrid