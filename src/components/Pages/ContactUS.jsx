import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PagesHero from '../PagesHero'
import ContactForm from '../ContactForm'
import GoogleMap from '../GoogleMap'

const ContactUS = () => {
  return (
    <>
        <Header/>
        <PagesHero name="Contact Us" img="assets/img/pic2-4.jpg"/>
         <ContactForm/>
        <GoogleMap/>
       
        <Footer/>
    </>
  )
}

export default ContactUS