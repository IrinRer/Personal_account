import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React from 'react';
import { setSearch } from 'store/contacts/slice';
import styles from './index.module.scss';

const Search = () => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    dispatch(setSearch(target.value));
  };
  return (
    <input
      type="text"
      placeholder="Search..."
      className={styles.input}
      onChange={handleChange}
    />
  );
};

export default Search;
