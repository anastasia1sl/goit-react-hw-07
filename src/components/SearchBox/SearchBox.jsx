import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <p className={css.searchBoxText}>Find contacts by name</p>
      <input
        className={css.searchBox}
        onChange={handleChange}
        type="text"
        value={nameFilter}
      ></input>
    </div>
  );
};

export default SearchBox;
