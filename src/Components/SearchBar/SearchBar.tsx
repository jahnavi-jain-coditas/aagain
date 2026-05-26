
import Button from "../Button/Button";
import styles from "./SearchBar.module.scss";
import { RiSearchLine } from 'react-icons/ri';
const SearchTab =()=>{

  return(
    <div className={styles.searchContainer}>
      <form className={styles.searchInput}>
        <input type="search" name="" id="searchTab" placeholder="Search users....." className={styles.formInput} />
        <Button type="submit" className={styles.searchButton}> <RiSearchLine className="search-icon" /></Button>
        
      </form>
    </div>
  )
}
export default SearchTab;