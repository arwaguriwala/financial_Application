import { FC } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../../pages/login/Login";
import MainLayout from "../../pages/main-layout/MainLayout";
import { navBarData } from "./rootRouteData";
import AuthRoute from "../AuthRoute/AuthRoute";

const RootRoutes: FC = () => {
  const userFormData = localStorage.getItem("token");
  const location = useLocation();
  const path = location.pathname;
  return (
    <Routes>
      <Route
        path="/"
        element={userFormData ? <Navigate to="/dashboard" /> : <Login />}
      ></Route>
      <Route
        path="/*"
        element={
          <AuthRoute path={path}>
            <MainLayout>
              <Routes>
                {navBarData.map((item, index) => {
                  return (
                    <Route
                      key={index}
                      path={item?.path}
                      element={<item.element />}
                    />
                  );
                })}
              </Routes>
            </MainLayout>
          </AuthRoute>
        }
      ></Route>
    </Routes>
  );
};

export default RootRoutes;
