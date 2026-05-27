import styles from "./StatusBasedFilter.module.scss"
import type { statusBasedFilterProps } from "./StatusBasedFilter.types";
const StatusBasedFilter=({value,onChange}:statusBasedFilterProps)=>{
  return(
    <div className={styles.dropDownContainer}>
      <select className={styles.dropDownField} value={value} onChange={(e)=>onChange(e.target.value)}>
        <option value="" disabled > -- select an option -- </option>
        <option value="">All</option>
        <option value="">Active</option>
        <option value="">In-Active</option> 
      </select>
    </div>

  )
}
export default StatusBasedFilter;