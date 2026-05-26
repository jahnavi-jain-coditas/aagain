
import styles from "./RoleBasedFilter.module.scss"

const RoleBasedFilter = () => {
  return (
    <div className={styles.dropDownContainer}>
      <select className={styles.dropDownField}>
        <option value="" disabled > -- select an option -- </option>
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
