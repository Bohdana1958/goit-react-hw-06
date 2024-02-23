// import { useState } from 'react';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';
import { ContactForm } from './components/ContactForm/ContactForm';

export const App = () => {
  // const [nameFilter, setNameFilter] = useState('');

  // const visibleUsers = data.filter(user =>
  //   user.name.toLowerCase().includes(nameFilter.toLowerCase())
  // );

  // const addUsers = newUsers => {
  //   dispatch(addContact(newUsers));
  // };

  // const deleteUsers = userId => {
  //   dispatch(deleteContact(userId));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* <SearchBox value={nameFilter} onChange={setNameFilter} /> */}
      <ContactList />
    </div>
  );
};
