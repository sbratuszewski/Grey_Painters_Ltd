import React from 'react'
import ContactForm from '../components/ContactForm'
import GoogleMap from '../components/GoogleMap'
import ContactArticles from '../components/ContactArticles'
import CTACall from '../components/CTACall'
import HeroImage from '../assets/shaking-hands-g6821befef_1920.jpeg'

const Contact = () => {
  return (
    <div>
      <div className="w-full h-[30vh] overflow-hidden relative drop-shadow-lg">
        <img src={HeroImage} alt="oilrig" className="w-[100%] h-[100%] sm:h-auto absolute top-[50%] translate-y-[-50%]" />
        <h1 className="absolute text-4xl uppercase top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-slate-700">Contact Us</h1>
      </div>
      <ContactArticles />
      <CTACall />
      <GoogleMap />
      <ContactForm />
    </div>
  )
}

export default Contact
