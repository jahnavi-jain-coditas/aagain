import { Link } from "react-router-dom"
import Button from "../Button/Button"
import Header from "../Header/Header"
import styles from "./Register.module.scss"
import { useForm } from "react-hook-form"
import type { RegisterProps } from "./Register.types"
import { registerUser } from "../../services/register.service"

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegisterProps>();

  const password = watch("user_password");

  const onSubmit = async (data: RegisterProps) => {

    try {
      const response=await registerUser(
        data.user_title,
        data.user_first_name,
        data.user_last_name,
        data.user_email,
        data.user_password,
        data.user_confirm_password,
        data.user_degree,
        data.user_certificate,
        data.user_passing_year,
        )
        console.log(response);
    }
    catch(error:any){
      console.log(error);

    }

    
  }

  return (
    <div className={styles.registerPage} >
      <Header />
      <div className={styles.registerContainer} >
        <p>Register Now and Join us Today!!!!!!!!!</p>
        <form className={styles.registerForm}
          onSubmit={handleSubmit(onSubmit)} >
          <div>
            <label htmlFor="userTitle">Title:
            </label>
            <select {...register("user_title")}required>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          <div>
            <label htmlFor="userFirstName">First Name:</label>
            <input type="text" id="userFirstName"{...register("user_first_name")} required />
          </div>



          <div>
            <label htmlFor="userLastName">Last Name:</label>
            <input type="text" id="userLastName" {...register("user_last_name")} required />
          </div>


          <div>
            <label htmlFor="userEmail">Email:</label>
            <input type="email" id="userEmail" {...register("user_email", {

              pattern: {
                value: /^[a-z0-9]+@[a-z0-9 ]+\.[a-z]{2,}$/,
                message: "Email is not valid."
              }
            })} required />
          </div>
          {errors.user_email && <p className={styles.errorMsg}>{errors.user_email.message}</p>}


          <div>
            <label>Password:</label>
            <input type="password" id="userPassword" {...register("user_password", {

              minLength: {
                value: 8,
                message: "Password should be at least 8 characters."
              },
              maxLength: {
                value: 12,
                message: "Password should be at max 12 characters."

              }

            })} required />
          </div>
          {errors.user_password && (
            <p className={styles.errorMsg}>{errors.user_password.message}</p>)}

            <div>
            <label>Confirm Password:</label>
            <input type="password" id="userPassword" {...register("user_confirm_password", {

              minLength: {
                value: 8,
                message: "Again type the Password and it  should be at least 8 characters."
              },
              maxLength: {
                value: 12,
                message: "Again type the Password and it should be at max 12 characters."

              },
              required:"rewriting the same password is required",
              validate:(value)=>value===password||"It should be same as the one you types in the password field"

            })} required />
          </div>

          {errors.user_confirm_password && (
            <p className={styles.errorMsg}>{errors.user_confirm_password.message}</p>)}





          <div>
            <label htmlFor="userDegree">Degree:</label>
            <input type="text" id="userDegree" {...register("user_degree")} required />
          </div>

          <div>
            <label htmlFor="userPassoutYear">Passout Year:</label>
            <input type="number" id="userPassoutYear" {...register("user_passing_year", {
              pattern: {
                value: /^[0-9]{4}$/,
                message: "it should be a 4 digit number"
              }
            })} required />
          </div>

          {errors.user_passing_year && (
            <p className={styles.errorMsg}>{errors.user_passing_year.message}</p>)}


  

          <div>
            <label htmlFor="userCertificate">Certificate:</label>
            <input type="text" id="userCertificate" {...register("user_certificate")} required />
          </div>

          

          <span>Already Have an Account??</span>
          <span><Link to="/Login">Login Here</Link></span>

          <Button className={styles.registerButton} type="submit" >Register</Button>

        </form>



      </div>
    </div>

  )

}
export default Register;