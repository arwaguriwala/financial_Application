import axios from "axios";
import { GET_EMPLOYEES, GET_USERS } from "../../../config/config";

export const getEmployees = () => {
  return axios.get(GET_EMPLOYEES);
};
export const getUsersInfo = () => {
  return axios.get(GET_USERS);
};
