import Button from "../Button/Button"
import styles from "./ManageUserHeader.module.scss"

const ManageUserHeader =()=>{
  return(
    <header className={styles.header}>
      <div className={styles.heading}>
        <h3>Manage Users</h3>
      </div>
      <Button className={styles.AddUserButton}>Add User</Button>

    </header>
  )
}
export default ManageUserHeader;