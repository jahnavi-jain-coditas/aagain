import api from "../api/api";
export const fetchAllScheduledExamsDetails = async (pageNumber: number) => {

  const response = await api.get(`/admin_examination/get_all_examinations?page_no=${pageNumber}`);
  return response.data;

}