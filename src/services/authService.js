import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from 'jwt-decode';
import Logout from './../components/logout';
import { getCurrentUser } from './authService';

const apiEndpoint = apiUrl + "/auth";
const tokenKey="token";

export async function login(email,password){
    const {data:jwt}=await http.post(apiEndpoint,{email,password});
    localStorage.setItem(tokenKey,jwt);
}
export function logout()
{
    localStorage.removeItem(tokenKey);
}
export function getCurrentUser(){
     try{
  const jwt=localStorage.getItem(tokenKey);
  return jwtDecode(jwt);

  }
  catch(ex)
  {
      return null;
  }
}
export function loginWithJwt(jwt)
{
  localStorage.setItem(tokenKey,jwt); 
}
export default{
    login,
    logout,getCurrentUser,loginWithJwt
}