import api from "../api/api";
export const addSlot = async (
   
 slot_type:string,
 slot_date:Date,
 slot_start_time:Date,
 slot_end_time:Date,
 slot_capacity:number
  
) => {

  const response = await api.post("/examination/create_examination", {
    examination_type:slot_type,
    examination_date:slot_date,
    examination_slot_start_time:slot_start_time,
    examination_slot_end_time:slot_end_time,
    examination_slot_total_capacity:slot_capacity
    

  });
   console.log(response.data);

  return response.data;
 
}