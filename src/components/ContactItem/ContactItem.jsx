import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, phone, onDeleteContact }) => (
  <>
    <p className={css.text}>
      {name}: {phone}
    </p>
    <button
      className={css.button}
      type="submit"
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
