import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { saveChanges } from '../store/contactSlice'
import style from '../index.module.css'
import { Link } from 'react-router-dom'

const EditContact = () => {
    const dispatch = useDispatch();

    const oneContact = useSelector(state => state.contacts.oneContact);
    
    
    const [contact,setContact] = useState(oneContact);

    
  return (
    <div>
      <h2>Edit Contact</h2>
      <input className={style.edditButton} type='text' onChange={e => setContact({...contact,name: e.target.value})} value={contact.name} placeholder='Input Name Of Contact'/>
      <input className={style.edditButton} type='number' onChange={e =>setContact({...contact,number:e.target.value})} value={contact.number} placeholder='Input Number Of Contact'/>
      <input className={style.edditButton} type='url' onChange={e =>setContact({...contact,image:e.target.value})} value={contact.image} placeholder='Input URL Of Contact Image'/>
      <Link to='/list'>
      <button className={style.edditButton} onClick={()=>dispatch(saveChanges(contact))}>Save</button>
      </Link>
    </div>
  )
}

export default EditContact
