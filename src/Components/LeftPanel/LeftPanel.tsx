import { useNavigate } from "react-router-dom";
import Button from "../Button/Button"
import styles from "./LeftPanel.module.scss"

const LeftPanel =()=>{
  const navigate = useNavigate();

  const handlingClickViewProfile=()=>{
    navigate("/ViewProfile")
  }
  const handlingClickOnTakeExamination=()=>{
    navigate("/TakeExamination")

  }
  const handlingClickOnViewCertification=()=>{
    navigate("/ViewCertification")
  }
  return(
    <div className={styles.leftPanel}>
        <div className={styles.UserDisplay}>
          <img src="Images/User.jfif" />
          <span>{localStorage.getItem("role")}</span>
        </div>
        <div className={styles.navigationButtons}>
          <Button className={styles.navButton} onClick={handlingClickViewProfile}>Profile</Button>
          <Button className={styles.navButton}onClick={handlingClickOnTakeExamination}>Take Examination</Button>
          <Button className={styles.navButton} onClick={handlingClickOnViewCertification}>View Certification</Button>
        </div>
      </div>
  )
}
export default LeftPanel;