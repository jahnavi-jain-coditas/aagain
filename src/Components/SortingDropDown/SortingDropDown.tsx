
import styles from "./SortingDropDown.module.scss"

const SortingDropDown = () => {
  return (
    <div className={styles.dropDownContainer}>
      <select className={styles.dropDownField}>
        <option value="" disabled > -- select an option -- </option>
        <option value="">Ascending Order</option>
        <option value="">Descending Order</option>
          
      </select>
    </div>


  )
}
export default SortingDropDown;
