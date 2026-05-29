import styles from "./Login.module.scss";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { credentials } from "./Login.types";
import { loginUser } from "../../services/login.service";
import UserDashboard from "../UserDashboard/UserDasboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";



export default function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    // e.preventDefault();
    navigate("/register");
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<credentials>();

  const onSubmit = async (data: credentials) => {
    try {
      const response = await loginUser(data.user_email, data.user_password);
      console.log(response)

      const { access_token } = response;
      const { user_role } = response;
      const {refresh_token} = response; // refresh token handling
      localStorage.setItem('token', access_token);
      localStorage.setItem('role',user_role);
      localStorage.setItem('refreshToken',refresh_token)


      if (response.user_role === "USER" ||response.user_role==="CANDIDATE") {
        navigate("/UserDashboard");
      }
      else if (response.user_role === "ADMIN" || response.user_role === "SUPERADMIN") {
        <Link to="/AdminDashboard"></Link>
        navigate("/AdminDashboard")
      }

      //more logic to be written here


    }
    catch (error: any) {
      console.log(error);
    }


  }



  return (
    <div className={styles.loginPage}>
      <Header />
      <div className={styles.loginContainer} >


        <form className={styles.loginForm}
          onSubmit={handleSubmit(onSubmit)}>

          <div className={styles.loginHeading}><span>LOGIN</span></div>

          <div className={styles.loginCredential}>
            <div>
              <div>
                <label htmlFor="userEmail">Email:</label>
              </div>
              <div>
                <input type="email" id="userEmail" {...register("user_email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid."
                }
              })} />

              </div>
              
              
              {errors.user_email && <p className={styles.errorMsg}>{errors.user_email.message}</p>}


            </div>
            <div>
              <div>
                <label>Password:</label>

              </div>
              <div>
                <input type="password" id="userPassword" {...register("user_password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password should be at least 6 characters."
                },
                maxLength: {
                  value: 12,
                  message: "Password should be at max 12 characters."

                }

              })} />

              </div>
              
              
              {errors.user_password && (
                <p className={styles.errorMsg}>{errors.user_password.message}</p>)}


            </div>


            <Button className={styles.loginButton} type="submit"  >SIGN IN </Button>

            <div>
              <span>New User?????</span>
              <span><a href="/Register" onClick={handleClick}>Create Account</a></span>

            </div>

          </div>



        </form>



      </div>
    </div>
  )

}
