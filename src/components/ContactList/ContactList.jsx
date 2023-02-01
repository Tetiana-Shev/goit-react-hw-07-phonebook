import { useEffect } from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import Loader from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterContacts = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const showVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = showVisibleContacts();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <div className={css.contacts}>
      {isLoading && (
        <div className={css.loading}>
          Loading...
          <Loader />
        </div>
      )}
      <ul className={css.contactsList}>
        {visibleContacts.map(({ id, name, phone }) => (
          <li key={id} className={css.item}>
            <ContactItem
              id={id}
              name={name}
              phone={phone}
              onDeleteContact={onDeleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
