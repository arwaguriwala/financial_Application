import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface IAuthRoute {
  children: ReactElement<any, any> | null;
  path: string;
}

const AuthRoute: FC<IAuthRoute> = ({ children }) => {
  const userFormData = localStorage.getItem("formData");
  if (!userFormData) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default AuthRoute;
