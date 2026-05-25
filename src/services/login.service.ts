import api from "../api/api";

export const loginUser = async(user_email:string,user_password:string)=>{
  const formData = new FormData();
  formData.append("username",user_email);
  formData.append("password",user_password)
 
  const response = await api.post("/auth/login",formData);
  return response.data;
}