
import styles from "./RoleBasedFilter.module.scss"
import type { roleBasedFilterProps } from "./RoleBasedFilter.types";

const RoleBasedFilter = ({value,onChange}:roleBasedFilterProps) => {
  return (
    <div className={styles.dropDownContainer}>
      <select className={styles.dropDownField} value={value} onChange={(e)=>onChange(e.target.value)}>
        <option value="" disabled > -- select an option -- </option>
         <option value="">All</option>
        <option value="">Admin</option>
        <option value="">Candidate</option>
        <option value="">Diplomate</option>
        <option value="">Candidate and Admin</option>
        <option value="">Diplomate and Admin</option>   
      </select>
    </div>


  )
}
export default RoleBasedFilter;
