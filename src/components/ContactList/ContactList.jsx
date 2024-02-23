import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contact.items);
  const filterValue = useSelector(state => state.filter.name);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const deleteUsers = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredItems.map(item => (
        <Contact key={item.id} item={item} onDelete={deleteUsers} />
      ))}
    </ul>
  );
};
