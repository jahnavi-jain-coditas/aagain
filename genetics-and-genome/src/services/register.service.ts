import api from "../api/api";
export const registerUser = async (
   
  user_title: string,
  user_first_name: string,
  user_last_name: string,
  user_email: string,
  user_password: string,
  user_confirm_password: string,
  user_degree: string,
  user_certificate: string,
  user_passing_year: number,
) => {

  const response = await api.post("/auth/register", {
    user_title: user_title,
    user_first_name: user_first_name,
    user_last_name: user_last_name,
    user_email: user_email,
    user_password: user_password,
    user_confirm_password: user_confirm_password,
    user_degree: user_degree,
    user_passing_year: user_passing_year,
    user_certificate: user_certificate,

  });

  return response.data;
}