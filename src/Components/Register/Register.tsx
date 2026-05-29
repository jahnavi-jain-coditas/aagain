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
    formState: { errors }
  } = useForm<RegisterProps>();

  // const password = watch("user_password");

  const onSubmit = async (data: RegisterProps) => {

    if (data.user_password !== data.user_confirm_password) {
      throw new Error("Your confirm password and password does not match ")
    }
    const certificateFile = data.user_certificate[0];

    try {
      const response = await registerUser(
        data.user_title,
        data.user_first_name,
        data.user_last_name,
        data.user_email,
        data.user_password,
        data.user_confirm_password,
        data.user_degree,
        certificateFile
      )
      console.log(response);
    }
    catch (error: any) {
      console.log(error);
    }
  }

  return (
    <div className={styles.registerPage} >
      <Header />
      <div className={styles.registerContainer} >

        <form className={styles.registerForm}
          onSubmit={handleSubmit(onSubmit)} >
          <div className={styles.registerHeading}><span>Create An Account</span></div>

          <div className={styles.registerCredential}>

            <div className={styles.basicDetails}>

              <div>
                <select {...register("user_title")} required>
                  <option value="" disabled > -- select an option -- </option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>

              </div>

              <div>
                <input type="text" placeholder="Enter Degree name" id="userDegree" {...register("user_degree")} required />
              </div>

            </div>

            <div>
              <div>
                <input type="text" placeholder="Enter First Name" id="userFirstName"{...register("user_first_name")} required />
              </div>
            </div>


            <div>
              <div>
                <input type="text" placeholder="Enter Last Name" id="userLastName" {...register("user_last_name")} required />
              </div>
            </div>


            <div>
              <div>
                <input type="email" placeholder="Enter Email" id="userEmail" {...register("user_email", {

                  pattern: {
                    value: /^[a-z0-9]+@[a-z0-9 ]+\.[a-z]{2,}$/,
                    message: "Email is not valid."
                  }
                })} required />

              </div>
            </div>
            {errors.user_email && <p className={styles.errorMsg}>{errors.user_email.message}</p>}


            <div>
              <div>
                <input type="password" placeholder="Enter password" id="userPassword" {...register("user_password", {

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
            </div>
            {errors.user_password && (
              <p className={styles.errorMsg}>{errors.user_password.message}</p>)}



            <div>
              <div>
                <input type="password" placeholder="confirm your password" id="userPassword" {...register("user_confirm_password", {

                  minLength: {
                    value: 8,
                    message: "Again type the Password and it  should be at least 8 characters."
                  },
                  maxLength: {
                    value: 12,
                    message: "Again type the Password and it should be at max 12 characters."

                  },
                  required: "rewriting the same password is required",
                  // validate: (value) => value === password || "It should be same as the one you types in the password field"

                })} required />

              </div>
            </div>

            {errors.user_confirm_password && (
            <p className={styles.errorMsg}>{errors.user_confirm_password.message}</p>)}






            <div>
              <div>
                <label htmlFor="userCertificate">Certificate:</label>
                <input type="file" placeholder="Certificate Available?" id="userCertificate"  {...register("user_certificate")} required />


              </div>
            </div>
            {errors.user_certificate && (
              <p className={styles.errorMsg}>{errors.user_certificate.message}</p>)}


            <Button className={styles.registerButton} type="submit" >Register</Button>



            <div>
              <span>Already Have an Account??</span>
              <span><Link to="/Login">Login Here</Link></span>
            </div>


          </div>


        </form>



      </div>
    </div>

  )

}
export default Register;