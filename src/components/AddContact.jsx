import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../store/contactSlice'
import style from '../index.module.css'
import { Link } from 'react-router-dom'

const AddContact = () => {
    const [contactName,setContactName] = useState('');
    const [contactNum,setContactNum] = useState('');
    const [contactImg,setContactImg] = useState('');
    const dispatch = useDispatch();

    function createContact(){
        if(!contactName.trim()||!contactImg.trim()||!contactNum.trim()) return alert('Some Inputs Are Empty');

        let newContact = {
            created:Date.now(),
            name:contactName,
            number:contactNum,
            image:contactImg
        }
        dispatch(addContact(newContact));
        setContactImg('');
        setContactName('');
        setContactNum('');
    }
  return (
    <div>
      <h3>Add Contact</h3>
      <input  className={style.inputButton} type='text' onChange={e => setContactName(e.target.value)} value={contactName} placeholder='Input Name Of Contact'/>
      <input className={style.inputButton} type='number' onChange={e => setContactNum(e.target.value)} value={contactNum} placeholder='Input Number Of Contact'/>
      <input className={style.inputButton} type='url' onChange={e => setContactImg(e.target.value)} value={contactImg} placeholder='Input URL Of Contact Image'/>
      <Link to='/list'>
      <button className={style.inputButton} onClick={createContact}>Save Contact</button>
      </Link>

    </div>
  )
}

export default AddContact
