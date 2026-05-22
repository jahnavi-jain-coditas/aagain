import Header from "../Header/Header"
import styles from "./HomePage.module.scss"

const HomePage =()=>{
  return(
    <div className={styles.homePage}>
      <Header></Header>
      <main className={styles.mainContainer}>
        <section className={styles.leftSection}>
          <p className={styles.paragraph1}>Welcome!!!</p>
          <p className={styles.paragraph2}>Lets Get you Certified</p>
          
        </section>
        <div>
          <img className={styles.geneticsimage} src="Images/genetics.jpg" />
        </div>
        
      </main>
    </div>
  )

}
export default HomePage;