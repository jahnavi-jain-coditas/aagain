import Button from "../Button/Button";
import LeftPanel from "../LeftPanel/LeftPanel";
import styles from "./UserDashboard.module.scss"
const UserDashboard = () => {
  return (
    <div className={styles.userDashboardContainer}>
      <LeftPanel/>

      
      <div className={styles.rightPanel}>
        <header className={styles.header}>
          <span className={styles.pageHeading}>Select Examination </span>
          <p className={styles.paragraph}>Here's the list of Upcoming Exams</p>
        </header>
        <main className={styles.main}>

          {/* <div className={styles.detailContainer}>
            <p>FirstName : 
              <div className={styles.inputReceived}></div>
            </p>
            <p>Jahnavi</p>
          </div> */}
          <div className={styles.ExamCard}>
            <p className={styles.examHeading}>CCGPE Exam</p>
            <div className={styles.ExamDetails}>
              <p>ScheuleOn:24th may</p>
              <p>Exam Start Time:09:00 AM </p>
              <p>Time:3hrs</p>
            </div>
            <div className={styles.progressButton}>
              <Button className={styles.registerButton}>Register</Button>
              <Button className={styles.makePayment}>Make Payment</Button>
            </div>

          </div>
          <div className={styles.ExamCard}>
            <p className={styles.examHeading}>CCGPE Exam</p>
            <div className={styles.ExamDetails}>
              <p>ScheuleOn:24th may</p>
              <p>Exam Start Time:09:00 AM </p>
              <p>Time:3hrs</p>
            </div>
            <div className={styles.progressButton}>
              <Button className={styles.registerButton}>Register</Button>
              <Button className={styles.makePayment}>Make Payment</Button>
            </div>

          </div>
          <div className={styles.ExamCard}>
            <p className={styles.examHeading}>CCGPE Exam</p>
            <div className={styles.ExamDetails}>
              <p>ScheuleOn:24th may</p>
              <p>Exam Start Time:09:00 AM </p>
              <p>Time:3hrs</p>
            </div>
            <div className={styles.progressButton}>
              <Button className={styles.registerButton}>Register</Button>
              <Button className={styles.makePayment}>Make Payment</Button>
            </div>

          </div>
          <div className={styles.ExamCard}>
            <p className={styles.examHeading}>CCGPE Exam</p>
            <div className={styles.ExamDetails}>
              <p>ScheuleOn:24th may</p>
              <p>Exam Start Time:09:00 AM </p>
              <p>Time:3hrs</p>
            </div>
            <div className={styles.progressButton}>
              <Button className={styles.registerButton}>Register</Button>
              <Button className={styles.makePayment}>Make Payment</Button>
            </div>

          </div>
          <div className={styles.ExamCard}>
            <p className={styles.examHeading}>CCGPE Exam</p>
            <div className={styles.ExamDetails}>
              <p>ScheuleOn:24th may</p>
              <p>Exam Start Time:09:00 AM </p>
              <p>Time:3hrs</p>
            </div>
            <div className={styles.progressButton}>
              <Button className={styles.registerButton}>Register</Button>
              <Button className={styles.makePayment}>Make Payment</Button>
            </div>

          </div>
          <div className={styles.ExamCard}>
            <p className={styles.examHeading}>CCGPE Exam</p>
            <div className={styles.ExamDetails}>
              <p>ScheuleOn:24th may</p>
              <p>Exam Start Time:09:00 AM </p>
              <p>Time:3hrs</p>
            </div>
            <div className={styles.progressButton}>
              <Button className={styles.registerButton}>Register</Button>
              <Button className={styles.makePayment}>Make Payment</Button>
            </div>

          </div>
          


        </main>
        <footer className={styles.footer}>
          <Button className={styles.prev}>{'<'}</Button>
          <Button className={styles.next}>{'>'}</Button>
        </footer>

      </div>
    </div>
  )
}
export default UserDashboard;