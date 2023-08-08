import { EMAIL, PASSWORD, USERROLE } from "../constants/constant";

export interface ILoginForm {
  [USERROLE]: string;
  [EMAIL]: string;
  [PASSWORD]: string;
}
