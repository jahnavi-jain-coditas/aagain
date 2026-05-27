
import styles from "./SortingDropDown.module.scss"
import type { sortingProps } from "./SortingDropDown.types";

const SortingDropDown = ({value,onChange}:sortingProps) => {
  return (
    <div className={styles.dropDownContainer}>
      <select className={styles.dropDownField} value={value} onChange={(e)=>onChange(e.target.value)}>
        <option value="" disabled > -- select an option -- </option>
        <option value="">Ascending Order</option>
        <option value="">Descending Order</option>
          
      </select>
    </div>


  )
}
export default SortingDropDown;
