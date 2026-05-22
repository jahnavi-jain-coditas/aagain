import api from "../api/api";
export const addAdmin = async (
   
  admin_title: string,
  admin_first_name: string,
  admin_last_name: string,
  admin_email: string,
  admin_password: string,
  admin_confirm_password: string,
  
) => {

  const response = await api.post("/user/create_admin", {
    admin_title: admin_title,
    admin_first_name: admin_first_name,
    admin_last_name: admin_last_name,
    admin_email: admin_email,
    admin_password: admin_password,
    admin_confirm_password: admin_confirm_password,
    

  });
   console.log(response.data);

  return response.data;
 
}