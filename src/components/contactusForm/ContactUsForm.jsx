import React from 'react'
import Button from '../button/Button'
import { BiMessageDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import './ContactUsForm.css'
import { useState } from 'react';

const ContactUsForm = () => {

  let obj = {
    name:'',
    email:'',
    text: ''
  }
  const [formvalues,setFormValues] = useState(obj)

  const onClickSupport = () =>{
    console.log("clicked")
  }

  const onSubmit = (event)=>{
    event.preventDefault()
    let obj = {
      name:event.target[0].value,
      email:event.target[1].value,
      text: event.target[2].value
    }
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
    console.log(obj)
    setFormValues(obj)


  }
  return (
    <div>
        <div className="formHeaderButtons">          
            <Button buttonName="VIA SUPPORT CHAT" buttonType="primary" btnIcon={<BiMessageDetail />} onClick={onClickSupport}/>
            <Button buttonName="VIA CALL" buttonType="primary" btnIcon={<IoMdCall />} onClick={onClickSupport}/>
            <Button buttonName="VIA EMAIL FORM" buttonType="secondary" btnIcon={<BiMessageDetail />} onClick={onClickSupport}/>
        </div>
        <form onSubmit={onSubmit}>
          <div className="formController">
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="formController">
            <label htmlFor='email'>E-Mail</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="formController">
            <label htmlFor='text'>Text</label>
            <textarea name="name" rows="4" />
          </div>
          <div className="formActionContainer">
          <Button buttonName="SUBMIT" buttonType="primary" onClick={onClickSupport}/>

          </div>

        </form>

        <div>
          <h5>Submitted Values</h5>
          <div>{formvalues.name}</div>
          <div>{formvalues.email}</div>
          <div>{formvalues.text}</div>
        </div>
    </div>
  )
}

export default ContactUsForm