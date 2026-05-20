import Header from "../Header/Header";
import styles from "./About.module.scss"

const About = () => {
  return (
    <div className={styles.AboutPage}>
      <Header></Header>
      <main className={styles.mainContainer}>
        <section className={styles.leftSection}>
          <div className={styles.visionContent}>
            <h3 className={styles.heading}>Our vision</h3>
            <p>Generate professional certificates of completion in few steps.Digital certificates encrypt internal and external communications to prevent attackers from  stealing data.</p>
          </div>

          <div className={styles.missionContent}>
            <h3>Our mision</h3>
            <p>Tracking these certificates and validating their authenticity manually becomes a tedious job.  To make the data more secure and safe, everything needs to be digitalized with the principle of Confidentiality, Reliability, and Availability.</p>

          </div>


        </section>
        <div>
          <img src="Images/About.jpg" />
        </div>

      </main>
    </div>

  )
}
export default About;