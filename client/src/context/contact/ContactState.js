import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                "id": 1,
                "name": "Sara Smith",
                "email": "sarasmith@gmail.com",
                "phone": "111-111-111",
                "type": "personal"
            },
            {
                "id": 2,
                "name": "John Smith",
                "email": "johnsmith@gmail.com",
                "phone": "111-111-111",
                "type": "professional",
            },
            {
                "id": 3,
                "name": "Will Smith",
                "email": "willsmith@gmail.com",
                "phone": "111-111-111",
                "type": "professional",
            },
            {
                "id": 4,
                "name": "Lara Smith",
                "email": "larasmith@gmail.com",
                "phone": "111-111-111",
                "type": "professional"
            }
        ],
        current: null,
        filtered: null
    };
    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // add contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // delete contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // set current contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    // clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // update contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    // filter contacts
    const filterContact = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };

    // clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <ContactContext.Provider value={{ contacts: state.contacts, current: state.current, filtered: state.filtered, addContact, deleteContact, setCurrent, clearCurrent, updateContact, clearFilter, filterContact}}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;
