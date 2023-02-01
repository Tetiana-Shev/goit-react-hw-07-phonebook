import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const verificationContact = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (!verificationContact) {
      resetForm();
      return dispatch(addContact({ name, phone, id: nanoid() }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Rosie Simpson"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="459-12-56"
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
