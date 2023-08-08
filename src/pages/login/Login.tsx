import { FC, useState } from "react";
import styles from "./login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "../../interfaces/interfaces";
import { loginValidators } from "../../form-validators/loginValidators";
import { EMAIL, PASSWORD } from "../../constants/constant";
import Button from "../../common/button/Button";
import { EmailIcon, PasswordIcon } from "../../common/svg-component";
import logo from "../../assets/images/finance-logo.png";
import { useNavigate } from "react-router-dom";
const Login: FC = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    data.role = userRole;
    const formData = JSON.stringify(data);
    localStorage.setItem("formData", formData);
    console.log("data", formData);
    navigate("dashboard");
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.imgStyle} alt="error" />
        </div>
        <p className={styles.formTitle}>Sign in</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.loginForm}>
            <span className={styles.iconLabelStyle}>
              <EmailIcon customClass={styles.iconCustomClass} />
              <label htmlFor={EMAIL} className={styles.labelStyle}>
                Email
              </label>
            </span>
            <div className={styles.inputFieldContainer}>
              <input
                type="text"
                placeholder="Enter email"
                className={styles.inputFieldStyle}
                {...register(EMAIL, loginValidators[EMAIL])}
              />
              <p className={styles.errorText}>
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </p>
            </div>
          </div>
          <div className={styles.loginForm}>
            <span className={styles.iconLabelStyle}>
              <PasswordIcon customClass={styles.iconCustomClass} />
              <label htmlFor={PASSWORD} className={styles.labelStyle}>
                Password
              </label>
            </span>
            <div>
              <span style={{ position: "relative" }}>
                <input
                  type="password"
                  placeholder="Enter password"
                  className={styles.inputFieldStyle}
                  {...register(PASSWORD, loginValidators[PASSWORD])}
                />
              </span>
              <p className={styles.errorText}>
                {errors.password && (
                  <span className="error">{errors.password.message}</span>
                )}
              </p>
            </div>
          </div>
          <Button
            title="Sign in"
            type="submit"
            customClass={styles.loginButtonStyle}
            handleClick={() => {
              setUserRole("Admin");
            }}
          />
          <div className={styles.forgotPasswordStyle}>Forgot password?</div>
        </form>
      </div>
    </>
  );
};

export default Login;
