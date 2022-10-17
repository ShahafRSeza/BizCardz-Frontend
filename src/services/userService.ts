import axios from "axios";
import { User } from "../interfaces/User";
import jwt_decode from "jwt-decode";
const api: string = process.env.REACT_APP_API || "";

// User Registretion
export const registerUser = (newUser: User): Promise<any> =>
  axios.post(`${api}register`, newUser);

// User Login
export const userLogin = (user: User): Promise<any> =>
  axios.post(`${api}login`, user);

// get User details:
export const getUser = (): Promise<any> =>
  axios.get(`${api}profile`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

// Edit User details:
export const editUser = (user: User): Promise<any> =>
  axios.put(`${api}profile`, user, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

// get Payload from token:
export const getIsBiz = () => {
  return (jwt_decode(sessionStorage.getItem("token") as string) as any).biz;
};
