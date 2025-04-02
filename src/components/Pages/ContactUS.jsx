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
        <PagesHero name="Contact Us" img="assets/img/5-2.jpg"/>
        <GoogleMap/>
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default ContactUS