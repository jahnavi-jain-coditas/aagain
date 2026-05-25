import { useState, type FormEvent } from "react";
import AdminDashboardHeader from "../AdminDashboardHeader/AdminDashboardHeader";
import Button from "../Button/Button";
import styles from "./AdminDashboard.module.scss"
import type { adminCredentials } from "./AdminDashboard.types";
import { useForm } from "react-hook-form";
import { addAdmin } from "../../services/addAdmin";

const AdminDashboard = () => {
  const [state, setstate] = useState(false);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors }
  } = useForm<adminCredentials>();

  // const password = watch("admin_password");

  const onSubmit = async (data: adminCredentials) => {
    if(data.admin_password!==data.admin_confirm_password){
      throw new Error("You hva eto have confirm password same as password")
    }
    

    try {
      const response = await addAdmin(
        data.admin_title,
        data.admin_first_name,
        data.admin_last_name,
        data.admin_email,
        data.admin_password,
        data.admin_confirm_password,

      )
      setstate(false);
      console.log(response);
    }
    catch (error: any) {
      console.log(error);

    }


  }



  return (
    <>
      <AdminDashboardHeader onOpen={() => setstate(true)} />

      <main className={styles.mainContainer}>

        <div className={styles.graphContainer}>
          <div className={styles.row}>
            <div className={styles.graphItem}>
              <p className={styles.displayButton}>Candidate</p>
              <span className={styles.countDisplay}>3000</span>
            </div>

            <div className={styles.graphItem}>
              <p className={styles.displayButton}>Diplomates</p>
              <span className={styles.countDisplay}>1000</span>
            </div>


            <div className={styles.graphItem}>
              <p className={styles.displayButton}>Delayed Diplomates</p>
              <span className={styles.countDisplay}>200</span>
            </div>

          </div>

          <div className={styles.row}>
            <div className={styles.graphItem}>
              <p className={styles.displayButton}> Dangerously Delayed Diplomates</p>
              <span className={styles.countDisplay}>500</span>

            </div>
            <div className={styles.graphItem}>
              <p className={styles.displayButton}> Certification Lost Candidates</p>
              <span className={styles.countDisplay}>100</span>

            </div>

          </div>
        </div>

        {
          state &&
          <div className={styles.addadminContainer}>
            <div className={styles.addAdminPopUp}>
              <p className={styles.adminaddition}>Add admin.......</p>

              <span className={styles.closeButtonContainer}><Button className={styles.closeButton} onClick={() => setstate(false)} >x</Button></span>



              <form className={styles.addAdminForm} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="adminTitle">Title:</label>
                  <select id="adminTitle" {...register("admin_title")} required>
                    <option value="" disabled > -- select an option -- </option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="adminFirstName">First Name:</label>
                  <input type="text" id="adminFirstName" {...register("admin_first_name")} required />
                </div>



                <div>
                  <label htmlFor="adminLastName">Last Name:</label>
                  <input type="text" id="adminLastName" {...register("admin_last_name")} required />
                </div>


                <div>
                  <label htmlFor="adminEmail">Email:</label>
                  <input type="email" id="adminEmail" {...register("admin_email", {

                    pattern: {
                      value: /^[a-z0-9]+@[a-z0-9 ]+\.[a-z]{2,}$/,
                      message: "Email is not valid."
                    }
                  })} required />
                </div>

                {errors.admin_email && <p className={styles.errorMsg}>{errors.admin_email.message}</p>}


                <div>
                  <label htmlFor="adminPassword">Password:</label>
                  <input type="password" id="adminPassword" {...register("admin_password", {

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
                {errors.admin_password && (
                  <p className={styles.errorMsg}>{errors.admin_password.message}</p>)}



                <div>
                  <label htmlFor="adminconfirmPassword">Confirm Password:</label>
                  <input type="password" id="adminconfirmPassword" {...register("admin_confirm_password", {

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
                {errors.admin_confirm_password && (
                  <p className={styles.errorMsg}>{errors.admin_confirm_password.message}</p>)}

                <Button className={styles.addButton} type="submit" >Add</Button>


              </form>





            </div>
          </div>

        }





      </main>
    </>
  )
}
export default AdminDashboard;