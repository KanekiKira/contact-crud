import React from 'react'
import { useDispatch } from 'react-redux'
import { getOneContact,deleteContact,saveChanges } from '../store/contactSlice';
import style from '../index.module.css'
import { Link } from 'react-router-dom';


const ContactItem = ({contact}) => {
    const dispatch = useDispatch();
  return (
    <div className={style.contactBox}>
      {<img src={contact.image} alt='Contact' />}
      <ul className={style.contactul}>
        <li>Name:{contact.name}</li>
        <li>Number:{contact.number}</li>
        <button className={style.deleteButton} onClick={()=>dispatch(deleteContact(contact.created))}>Delete</button>
        <Link to='/edit'>
        
        <button  className = {style.edditButton}onClick={()=>dispatch(getOneContact(contact.created))}>Edit</button>
        </Link>
        </ul>
    </div>
  )
}

export default ContactItem
