import Button from "../Button/Button";
import LeftPanel from "../LeftPanel/LeftPanel";
import styles from "./ViewCertification.module.scss"

const ViewCertification = () => {
  return (
    <div className={styles.viewCertificationContainer}>
      <LeftPanel />
      <div className={styles.rightPanel}>
        <header className={styles.header}>
          <span className={styles.pageHeading}>View Certificate and Manage MOC </span>
          <p className={styles.paragraph}>Here's the list of things to be done in MOC CYCLE</p>
        </header>
        <main className={styles.main}>
          <div>
            <h4>Payment</h4>
            <div>
              <p>Portal Payment</p>
              <Button>COMPLETE</Button>
            </div>
            <div>
              <p>Examination Payment</p>
              <Button>COMPLETE</Button>

            </div>
            <div>
              <p>Certification Payment</p>
              <Button>COMPLETE</Button>
            </div>
            
            
            

          </div>
          <div>
            <h4>licensure</h4>

          </div>
          <div>
            <h4>Continuos learning</h4>

          </div>
        </main>
      </div>
    </div>
  )
}
export default ViewCertification;