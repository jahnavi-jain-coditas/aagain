import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button"
import styles from "./Header.module.scss"

const Header =()=>{
  const navigate = useNavigate();

  const handleClick = () => {
    // e.preventDefault();
    navigate("/contact");
  };
  return(
    <header className={styles.header}>
      <img  className={styles.logoImage}
      src="Images\Logo.jpg"></img>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
            
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
      <Button className={styles.contactButton} onClick={handleClick}>Contact</Button>
    </header>
  )
  
}
export default Header;