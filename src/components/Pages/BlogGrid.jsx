import React from 'react'
import Header from '../Header'
import PagesHero from '../PagesHero'
import Footer from '../Footer'
import Bgrid from '../Bgrid'

const BlogGrid = () => {
  return (
    <>
        <Header/>
        <PagesHero name="Our Blog" img="assets/img/1-2.jpg"/>
        <Bgrid/>
        <Footer/>   
    </>
  )
}

export default BlogGrid