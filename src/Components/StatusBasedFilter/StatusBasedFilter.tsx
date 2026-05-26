import styles from "./StatusBasedFilter.module.scss"
const StatusBasedFilter=()=>{
  return(
    <div className={styles.dropDownContainer}>
      <select className={styles.dropDownField}>
        <option value="" disabled > -- select an option -- </option>
        <option value="">Active</option>
        <option value="">In-Active</option> 
      </select>
    </div>

  )
}
export default StatusBasedFilter;