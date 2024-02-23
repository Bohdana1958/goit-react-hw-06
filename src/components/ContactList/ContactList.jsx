import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contact.contacts.items);

  const deleteUsers = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <ul className={css.list}>
      {items.map(item => (
        <Contact key={item.id} item={item} onDelete={deleteUsers} />
      ))}
    </ul>
  );
};
