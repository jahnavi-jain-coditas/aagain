import Button from "../Button/Button";
import styles from "./AdminDashboard.module.scss"
const AdminDashboard = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.graphContainer}>
        
          <div className={styles.graphItem1}>
            <Button className={styles.displayButton}>Candidate</Button>
            <span className={styles.countDisplay}>3000</span>
          </div>

          <div className={styles.graphItem2}>
            <Button className={styles.displayButton}>Diplomates</Button>
            <span className={styles.countDisplay}>3000</span>
            </div>
        

        <div className={styles.graphItem3}>
          <Button className={styles.displayButton}>Delayed Diplomates</Button>
          <span className={styles.countDisplay}>3000</span>
        </div>


        <div className={styles.graphItem4}>
          <Button className={styles.displayButton}> Dangerously Delayed Diplomates</Button>
          <span className={styles.countDisplay}>3000</span>

        </div>
        <div className={styles.graphItem5}>
           <Button className={styles.displayButton}> Certification Lost Candidates</Button>
          <span className={styles.countDisplay}>3000</span>



        </div>
      </div>

      
    </main >
  )
}
export default AdminDashboard;