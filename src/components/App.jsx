import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const App = () => (
  <div className={css.phonebook}>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm />
    <h2 className={css.contacts}>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);

export default App;
