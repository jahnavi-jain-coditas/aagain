import api from "../api/api";
export const fetchAllScheduledExamsDetails = async () => {

  const response = await api.get("/get_all_examinations");
  return response.data;

}