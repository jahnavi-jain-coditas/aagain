import { useState } from "react";
import Button from "../Button/Button";
import styles from "./AdminDashboardHeader.module.scss"
import { useNavigate } from "react-router-dom";

const AdminDashboardHeader = ({ onOpen }: { onOpen: () => void }) => {
  const navigate = useNavigate();

 
  const handlingClickOnManageUser=()=>{
    navigate("/ManageUser")
  };
  const handlingClickOnManageExam=()=>{
    navigate("/ManageExam")
  }

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logoImage}
          src="Images\Logo.jpg"></img>
        <div className={styles.userActions}>
          <Button className={styles.manageUser} onClick={handlingClickOnManageUser} > Manage Users </Button>
          <Button className={styles.scheduleExam} onClick={handlingClickOnManageExam}> Manage Exams</Button>
          <Button className={styles.addAdmin} onClick={onOpen}> Add Admin</Button>
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