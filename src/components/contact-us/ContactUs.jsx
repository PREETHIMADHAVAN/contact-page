import React from 'react'
import ContactUsForm from '../contactusForm/ContactUsForm'
import style from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <div className={style.contactUsContainer}>
        <h1 className={style.titleclass}>CONTACT US</h1>
        <p className={style.contactUsDesc}>Let's connect: we're here to help, and we'd love to hear from you! Whether you have a question, comment, or just want to chat , you can reach out to us through the contact form of this page, or by phone, email, or social media. </p>
        <div className={style.contactUsContent}>
            <div className={style.contactUsForm}><ContactUsForm /></div>
            <div className={style.contactUsImg}>
            <img src="images/contactUs.svg" alt="Logo"/>
            </div>
        </div>
    </div>
  )
}

export default ContactUs