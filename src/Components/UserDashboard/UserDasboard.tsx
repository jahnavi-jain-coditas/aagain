import { useEffect, useReducer } from "react";
import Button from "../Button/Button";
import LeftPanel from "../LeftPanel/LeftPanel";
import styles from "./UserDashboard.module.scss"
import type {  fetchedExamRegisteredDetails, userPageAction, userPageState } from "./UserDashboard.types";
import { fetchAllRegisterToExamsDetails, makePaymentForExam, registerForExam } from "../../services/examToRegisterDetails.service";


const initialState: userPageState = {
  fetchedData: [],
  pageNumber: 1,
  errorStatus: "",
  registrationSuccessStatus:"",
  paymentSuccessStatus:""

}

function reducer(state: userPageState, action: userPageAction): userPageState {
  switch (action.type) {
    case "fetch_data":
      return { ...state, fetchedData: action.data_received };
    case "on_click_next":
      return { ...state, pageNumber: action.page_current };
    case "on_click_prev":
      return { ...state, pageNumber: action.page_current }
    case "on_error":
      return { ...state, errorStatus: action.error_received }
    case "on_registration_success":
      return{...state,registrationSuccessStatus:action.success_message}
    case "on_payment_success":
      return {...state,paymentSuccessStatus:action.success_message}

    default:
      throw Error("Unknown action received");
  }

}


const UserDashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAllexamsDetails = async (page: number) => {
    try {
      const response = await fetchAllRegisterToExamsDetails(page);
      dispatch({ type: "fetch_data", data_received: response })
      console.log(response)
    }
    catch (error: any) {
      dispatch({ type: "on_error", error_received: error?.message ||"something went wrong"})
    }

  }

  useEffect(() => { fetchAllexamsDetails(state.pageNumber) }, [state.pageNumber])



  const onClickRegisterButton = async (examData: fetchedExamRegisteredDetails) => {
    try {
      const response = await registerForExam(examData.examination_slot_id);
      dispatch({type:"on_registration_success",success_message:response?.message});
      
      console.log(response);
    }
    catch (error: any) {
      dispatch({ type: "on_error", error_received: error?.message ||"something went wrong" })
    }
  }


  const onClickMakePaymentButton = async () => {
    try {
      const response = await makePaymentForExam();
      dispatch({type:"on_payment_success",success_message:response?.message});
      
      console.log(response);
    }
    catch (error: any) {
      dispatch({ type: "on_error", error_received: error?.message ||"Something went wrong" })
    }
  }





  return (
    <div className={styles.userDashboardContainer}>
      <LeftPanel />
      


      <div className={styles.rightPanel}>
        <header className={styles.header}>
          <span className={styles.pageHeading}>Select Examination </span>
          <p className={styles.paragraph}>Here's the list of Upcoming Exams</p>
        </header>

        {state.registrationSuccessStatus && <p className={styles.successMsg}>{state.registrationSuccessStatus}</p> }

        {state.paymentSuccessStatus && <p className={styles.successMsg}>{state.paymentSuccessStatus}</p> }

        {state.errorStatus && <p className={styles.errorMsg}>{state.errorStatus}</p>}
        <main className={styles.main}>

          
          { state.fetchedData.map((examData:fetchedExamRegisteredDetails)=>{
            
              return(
          <div className={styles.ExamCard} key={examData.examination_slot_id}>
            <p className={styles.examHeading}>CCGPE Exam</p>
            <div className={styles.ExamDetails}>
              <p>Type : {examData.examination_type}</p>
              <p>ScheuleOn : {examData.examination_date}</p>
              <p>Exam Start Time : {examData.examination_slot_start_time} </p>
              <p>Exam End Time : {examData.examination_slot_end_time}</p>
            </div>
            <div className={styles.progressButton}>
              <Button className={styles.registerButton} onClick={()=>onClickRegisterButton(examData)}>Register</Button>

              <Button className={styles.makePayment} onClick={()=>onClickMakePaymentButton()}>Make Payment</Button>
            </div>

          </div>

            )
          })

          }

          {/* <div className={styles.detailContainer}>
            <p>FirstName : 
              <div className={styles.inputReceived}></div>
            </p>
            <p>Jahnavi</p>
          </div> */}

         
          {/* <div className={styles.ExamCard}>
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

          </div> */}



        </main>
        
        <footer className={styles.footer}>
          <Button onClick={() => dispatch({ type: "on_click_prev", page_current: state.pageNumber - 1 })} disabled={state.pageNumber === 1} className={styles.prev}>{'<'}</Button>
          <Button onClick={() => dispatch({ type: "on_click_next", page_current: state.pageNumber + 1 })} className={styles.next}>{'>'}</Button>
        </footer>

      </div>
    </div>
  )
}
export default UserDashboard;