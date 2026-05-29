
import Button from "../Button/Button";
import styles from "./SearchBar.module.scss";
import { RiSearchLine } from 'react-icons/ri';
import type { searchBarProps } from "./SearchBar.types";
const SearchTab =({value,onSearch}:searchBarProps)=>{

  return(
    <div className={styles.searchContainer}>
      <form className={styles.searchInput}>
        <input type="search" value={value} onClick={(e)=>onSearch(e.target.value)}name="" id="searchTab" placeholder="Search users....." className={styles.formInput} />
        {/* <Button type="submit" className={styles.searchButton} value={value} onClick={(e)=>onSearch}> <RiSearchLine className="search-icon" /></Button> */}
        
      </form>
    </div>
  )
}
export default SearchTab;