import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterList } from '../../redux/filtersSlice';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filters);

  console.log(filterValue);

  const handleChange = e => {
    dispatch(filterList({ name: e.target.value.trim().toLowerCase() }));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Find contacts by name:</label>
      <input
        className={css.input}
        name="name"
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};
