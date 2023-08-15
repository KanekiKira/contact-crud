import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddContact />} />
      <Route path="/list" element={<ContactList />} />
      <Route path="/edit" element={<EditContact />} />
      
    </Routes>
  )
}


export default MainRoutes