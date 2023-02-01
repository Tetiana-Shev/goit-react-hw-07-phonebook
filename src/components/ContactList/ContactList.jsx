import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterContacts = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const showVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    );

  const visibleContacts = showVisibleContacts();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={css.contacts}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
