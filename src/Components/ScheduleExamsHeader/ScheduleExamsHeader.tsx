import styles from "./ScheduleExamsHeader.module.scss"
const ScheduleExamsHeader=()=>{
  return(
    <>
     
      <header className={styles.header}>
        <img className={styles.logoImage}
          src="Images\Logo.jpg"></img>
          <div>
             <span>Schedule Exams</span>
          </div>
           
        
        
        <div className={styles.UserDisplay}>
          <img className={styles.UserImage} src="Images/User.jfif" />
          <span>{localStorage.getItem("role")}</span>
        </div>

      </header>



    
    </>

  )
}
export default ScheduleExamsHeader;