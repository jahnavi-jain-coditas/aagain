import Button from "../Button/Button";
import styles from "./ManageExamsHeader.module.scss"
const ManageExamsHeader = ({ onOpen }: { onOpen: () => void }) => {
  
  return (
    <>

      <header className={styles.header}>
        <div className={styles.leftSideHeader}>

          <img className={styles.logoImage}
            src="Images\Logo.jpg"></img>

          <span>Exam Schedule</span>

        </div>




        <div className={styles.rightSideHeader}>
          <div>
            <Button className={styles.addExamButton} onClick={onOpen}>Add Exam Day</Button>
          </div>

          <div className={styles.UserDisplay}>
            <img className={styles.UserImage} src="Images/User.jfif" />
            <span>{localStorage.getItem("role")}</span>
          </div>

        </div>




      </header>




    </>

  )
}
export default ManageExamsHeader;