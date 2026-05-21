import { useState } from "react";
import Button from "../Button/Button";
import styles from "./AdminDashboardHeader.module.scss"

const AdminDashboardHeader = ({ onOpen }: { onOpen: () => void }) => {

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logoImage}
          src="Images\Logo.jpg"></img>
        <div className={styles.userActions}>
          <Button className={styles.manageUser}> Manage Users </Button>
          <Button className={styles.scheduleExam}> Schedule Exam</Button>
          <Button className={styles.addAdmin} onClick={() => onOpen()}> Add Admin</Button>
        </div>
        <div className={styles.UserDisplay}>
          <img className={styles.UserImage} src="Images/User.jfif" />
          <span>r</span>
        </div>

      </header>



    </>


  )
}
export default AdminDashboardHeader;