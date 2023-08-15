import {createSlice} from '@reduxjs/toolkit'

const contactSlice = createSlice({
    name:'contacts',
    initialState:{
        contacts:[],
        oneContact:null,
    },
    reducers: {
        addContact:(state,action) => {
            state.contacts.push(action.payload)
        },
       deleteContact:(state,action) => {
        state.contacts = state.contacts.filter(contact => contact.created !== action.payload)
       },
       saveChanges:(state,action) => {
        state.contacts = state.contacts.map(contact => {
            if(contact.created === action.payload.created) return action.payload;
            return contact;
        });
        state.oneContact = null;
        },
       getOneContact:(state,action) => {
        let oneContact = state.contacts.find(contact => contact.created === action.payload);
        state.oneContact = oneContact;

    }

    }
})

export const {addContact,getOneContact,saveChanges,deleteContact} = contactSlice.actions;
export default contactSlice.reducer;