import s from './SearchBar.module.css';
import { GrSearch } from 'react-icons/gr';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    onSearch(form.elements.form.value);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          name="form"
          className={s.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.searchButton} type="submit">
          <GrSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
