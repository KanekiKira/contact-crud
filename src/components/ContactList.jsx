import React from 'react'
import {  useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import style from '../index.module.css'


const ContactList = () => {
    const contacts = useSelector((state)=> state.contacts.contacts);

  return (
    <>
      <div className={style.wrapper}>
        {contacts.map(contact => (
            <ContactItem key = {contact.created} contact={contact}/>
        ))}
      </div>
    </>
  )
}

export default ContactList
