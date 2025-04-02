import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PagesHero from '../PagesHero'
import BlogInfo from '../BlogInfo'
import Comments from '../Comments'
import CommentResponce from '../CommentResponce'

const BlogDetail = () => {
  return (
    <>
    <Header/>
    <PagesHero img="assets/img/1-2.jpg" name="Blog Details"/>
    <BlogInfo/>
    <Comments/>
    <CommentResponce/>
    <Footer/>
    </>
  )
}

export default BlogDetail