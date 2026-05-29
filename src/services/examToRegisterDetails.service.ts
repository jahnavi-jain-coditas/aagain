import api from "../api/api";
export const fetchAllRegisterToExamsDetails = async (pageNumber: number) => {

  const response = await api.get(`/admin_examination/get_all_examinations?page_no=${pageNumber}`);
  return response.data;

}

export const registerForExam = async (examination_slot_id:string)=>{
  const response = await api.post(`/user_examination/book_slot/${examination_slot_id}`);
  return response.data;
}

export const makePaymentForExam = async ()=>{
  const response = await api.patch("/user_examination/update_examination_payment")
  return response.data;
}