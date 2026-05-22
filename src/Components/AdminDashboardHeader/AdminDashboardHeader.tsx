import { useState } from "react";
import Button from "../Button/Button";
import styles from "./AdminDashboardHeader.module.scss"
import { useNavigate } from "react-router-dom";

const AdminDashboardHeader = ({ onOpen }: { onOpen: () => void }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // e.preventDefault();
    navigate("/ScheduleExam");
  };

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logoImage}
          src="Images\Logo.jpg"></img>
        <div className={styles.userActions}>
          <Button className={styles.manageUser} > Manage Users </Button>
          <Button className={styles.scheduleExam} onClick={handleClick}> Schedule Exam</Button>
          <Button className={styles.addAdmin} onClick={() =>{const roleReceived =localStorage.getItem("role"); if(roleReceived==="SUPERADMIN"){
            onOpen();
          }}}> Add Admin</Button>
        </div>
        <div className={styles.UserDisplay}>
          <img className={styles.UserImage} src="Images/User.jfif" />
          <span>{localStorage.getItem("role")}</span>
        </div>

      </header>



    </>


  )
}
export default AdminDashboardHeader;