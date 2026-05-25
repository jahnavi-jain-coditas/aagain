import { useEffect, useState } from "react";
import ManageExamsHeader from "../ManageExamsHeader/ManageExamsHeader";
import styles from "./ManageExamsPage.module.scss"
import Button from "../Button/Button";
import Table from "../Table/Table";
import type { fetchedExamCredentials, slotCredentials } from "./ManageExamsPage.types";
import { useForm } from "react-hook-form";
import { addSlot } from "../../services/addSlot";
import {  fetchAllScheduledExamsDetails } from "../../services/fetchExamDetails.service";


const ManageExamsPage = () => {
  const [addExamOpen, setAddExamOpen] = useState(false);
  const [fetchedData, setFetchedData] = useState<fetchedExamCredentials[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<slotCredentials>();
  
  const fetchDetails=async()=>{
    try{
      const response = await fetchAllScheduledExamsDetails();
      setFetchedData(response.data);
      console.log(response.data)
    }
    catch(error:any){
      console.log(error);
    }
    
  }

  useEffect(() => {fetchDetails()}, [])


  const onSubmit = async (data: slotCredentials) => {

    try {
      const response = await addSlot(
        data.slot_type,
        data.slot_date,
        data.slot_start_time,
        data.slot_end_time,
        data.slot_capacity

      )
      setAddExamOpen(false);
      console.log(response);
    }
    catch (error: any) {
      console.log(error);

    }


  }


  return (
    <>

      <ManageExamsHeader onOpen={() => setAddExamOpen(true)} />

      <main>
        <Table>

          <Table.TableHead>
            <Table.Row>
              <Table.HeaderCell>Exam Date</Table.HeaderCell>
              <Table.HeaderCell>Exam Type</Table.HeaderCell>
              <Table.HeaderCell>Start Time</Table.HeaderCell>
              <Table.HeaderCell>End Time</Table.HeaderCell>
              <Table.HeaderCell>Total Capacity</Table.HeaderCell>
              <Table.HeaderCell>Available Capacity</Table.HeaderCell>

            </Table.Row>

          </Table.TableHead>

          <Table.TableBody>

            {fetchedData.map((examDetails:fetchedExamCredentials) => {
              return (
                <Table.Row key={examDetails.slot_id}>
                  <Table.Cell>{examDetails.slot_date}</Table.Cell>
                  <Table.Cell>{examDetails.slot_type}</Table.Cell>
                  <Table.Cell>{examDetails.slot_start_time}</Table.Cell>
                  <Table.Cell>{examDetails.slot_end_time}</Table.Cell>
                  <Table.Cell>{examDetails.slot_total_capacity}</Table.Cell>
                  <Table.Cell>{examDetails.slot_available_capacity}</Table.Cell>
                 

                </Table.Row>
              )
            })
            }
            {/* <Table.Row>
              <Table.Cell>25-06-2026</Table.Cell>
              <Table.Cell>ASSESMENT</Table.Cell>
              <Table.Cell>16:00</Table.Cell>
              <Table.Cell>18:00</Table.Cell>
              <Table.Cell>60</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>25-06-2026</Table.Cell>
              <Table.Cell>ASSESMENT</Table.Cell>
              <Table.Cell>16:00</Table.Cell>
              <Table.Cell>18:00</Table.Cell>
              <Table.Cell>60</Table.Cell>
            </Table.Row> */}


          </Table.TableBody>


        </Table>
      </main>

      {
        addExamOpen &&
        <div className={styles.addSlotContainer}>
          <div className={styles.addSlotPopUp}>
            <p className={styles.examSlotAddition}>Add Exam Slot.......</p>

            <span className={styles.closeButtonContainer}><Button className={styles.closeButton} onClick={() => setAddExamOpen(false)} >x</Button></span>



            <form className={styles.addSlotForm} onSubmit={handleSubmit(onSubmit)} >
              <div>
                <label htmlFor="examType">Type:</label>
                <select id="examType"  {...register("slot_type")} required>
                  <option value="" disabled > -- select an option -- </option>
                  <option value="ASSESMENT">Assessment</option>
                  <option value="REASSESMENT">Reassessment</option>
                </select>

              </div>
              <div>
                <label htmlFor="examDate">Date:</label>
                <input type="date" id="examDate" {...register("slot_date", {
                  valueAsDate: true
                })} required />

              </div>

              <div>
                <label htmlFor="examStartTime">Start Time:</label>
                <input type="time" id="examStartTime" {...register("slot_start_time")} required />

              </div>

              <div>
                <label htmlFor="examEndTime:">End Time:</label>
                <input type="time" id="examEndTime"{...register("slot_end_time")} required />
              </div>


              <div>
                <label htmlFor="Capacity">Capacity:</label>
                <input type="number" id="Capacity"{...register("slot_capacity", {
                  min: {
                    value: 50,
                    message: "Capacity should be greater or equal to 50"

                  },
                  max: {
                    value: 100,
                    message: "Capacity can be of max 100"
                  }
                })} required />

              </div>
              {errors.slot_capacity && <p className={styles.errorMsg}>{errors.slot_capacity.message}</p>}


              <Button className={styles.addButton} type="submit" >Add</Button>





            </form>





          </div>
        </div>


      }
    </>
  )
}
export default ManageExamsPage;