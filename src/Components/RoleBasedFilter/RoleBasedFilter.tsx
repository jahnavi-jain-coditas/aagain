
import styles from "./RoleBasedFilter.module.scss"
import type { roleBasedFilterProps } from "./RoleBasedFilter.types";

const RoleBasedFilter = ({value,onChange}:roleBasedFilterProps) => {
  return (
    <div className={styles.dropDownContainer}>
      <select className={styles.dropDownField} value={value} onChange={(e)=>onChange(e.target.value)}>
        <option value="" disabled > -- select an option -- </option>
         <option value="All">All</option>
        <option value="Admin">Admin</option>
        <option value="Candidate">Candidate</option>
        <option value="Diplomate">Diplomate</option>
        <option value="Candidate_and-Admin">Candidate and Admin</option>
        <option value="Diplomate_and_Admin">Diplomate and Admin</option>   
      </select>
    </div>


  )
}
export default RoleBasedFilter;
