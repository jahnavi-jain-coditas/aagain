import { useReducer } from "react";
import Button from "../Button/Button";
import LeftPanel from "../LeftPanel/LeftPanel";
import styles from "./TakeExamination.module.scss"
import type { examinationAction, examinationStates } from "./TakeExamination.types";

const initialState: examinationStates = {
  take_exam_button: false,
  complete_exam_button: false
}

function reducer(state: examinationStates, action: examinationAction): examinationStates {
  switch (action.type) {
    case "set_take_exam_modal_open":
      return { ...state, take_exam_button: action.is_take_exam_open };
    case "set_complete_exam_modal_open":
      return { ...state, complete_exam_button: action.is_complete_exam_open }
    default:
      throw Error("Unknown action received");
  }

}

const TakeExamination = () => {


  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <div className={styles.takeExaminationContainer}>
      <LeftPanel />

      <div className={styles.rightPanel}>
        <header className={styles.header}>
          <span className={styles.pageHeading}>Get Yourself Certified</span>
          <p className={styles.paragraph}>You have {0} exams to complete , Complete Your Exam!!!!</p>
        </header>
        <main className={styles.main}>

          <div className={styles.examSection}>
            <p>ASSESMENT</p>
            <p>Status</p>
            <Button onClick={() => dispatch({ type: "set_take_exam_modal_open", is_take_exam_open: true })}>Take Exam</Button>
          </div>

        </main>


        {state.take_exam_button &&
          <div className={styles.takeExamContainer}>
            <span className={styles.closeButtonContainer}>
              <Button className={styles.closeButton} onClick={() => dispatch({ type: "set_take_exam_modal_open", is_take_exam_open: false })} >x</Button>
            </span>

            <div className={styles.takeExamContent}>
              <p>Complete this exam with complete honesty to receive your certification, read terms before giving?</p>
              <Button onClick={() => dispatch({ type: "set_complete_exam_modal_open", is_complete_exam_open: true })}>Complete Exam</Button>

            </div>



          </div>


        }

        {state.take_exam_button && state.complete_exam_button &&
          <div className={styles.CompleteExamContainer}>
            <span className={styles.closeButtonContainer}>
              <Button className={styles.closeButton} onClick={() => dispatch({ type: "set_complete_exam_modal_open", is_complete_exam_open: false })} >x</Button>
            </span>

            <div className={styles.CompleteExamContent}>
              <p>Are you sure you want to complete the exam??</p>
              <div className={styles.buttonContainer}>
                <Button onClick={() => { dispatch({ type: "set_complete_exam_modal_open", is_complete_exam_open: false }), alert("Yay!! you have completed the exam , congrats on getting certified") }}>Yes</Button>
                <Button onClick={() => { dispatch({ type: "set_complete_exam_modal_open", is_complete_exam_open: false }), alert("Sorry we can't provide you with the certificate ") }}>No</Button>

              </div>


            </div>



          </div>}



      </div>
    </div>
  )
}
export default TakeExamination;