import api from "../api/api";
export const fetchUserDetailsOnEvent = async (
  pageNumber: number,
  role_selected?: string,
  sort_order?: string,
  status_selected?: string,
  searched_name?: string,) => {

  const params = { pageNumber, role_selected, sort_order, status_selected, searched_name };
  if(role_selected) params.role_selected=role_selected;
  if(sort_order) params.sort_order=sort_order;
  if(status_selected)params.status_selected=status_selected;
  if (searched_name) params.searched_name = searched_name;
  const response = await api.get(``,{params});
  return response.data;

}

export const fetchUserDetailsOnNavigate=async(pageNumber: number)=>{
  const response = await api.get(`/user/get_all_user?page_no=${pageNumber}`);
  return response.data;

}



