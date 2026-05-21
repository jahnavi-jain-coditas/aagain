import api from "../api/api";
export const loginUser = async(user_email:string,user_password:string)=>{
  const response = await api.post("/auth/login",{user_email:user_email,user_password:user_password});
  return response.data;
}