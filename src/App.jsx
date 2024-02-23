import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';
import { ContactForm } from './components/ContactForm/ContactForm';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
