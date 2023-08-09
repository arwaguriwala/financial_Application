import axios from "axios";
import { GET_EMPLOYEES } from "../../../config/config";

export const getEmployees = () => {
  return axios.get(GET_EMPLOYEES);
};
