import api from "../api/api";
export const registerUser = async (

  user_title: string,
  user_first_name: string,
  user_last_name: string,
  user_email: string,
  user_password: string,
  user_confirm_password: string,
  user_degree: string,
  user_certificate: File,
  user_passing_year: number,
) => {
  const formData = new FormData();
  formData.append("user_title", user_title);
  formData.append("user_first_name", user_first_name);
  formData.append("user_last_name", user_last_name);
  formData.append("user_email",user_email);
  formData.append("user_password", user_password);
  formData.append("user_confirm_password", user_confirm_password);
  formData.append("user_degree", user_degree);
  formData.append("user_certificate",user_certificate);
  formData.append("user_passing_year",user_passing_year.toString())
  
  


  const response = await api.post("/auth/register", formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
    

  );

  return response.data;
}