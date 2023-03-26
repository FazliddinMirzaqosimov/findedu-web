import style from "./auth.module.scss";
import RegisterComponent from "@/components/login/Register";

const RegisterP = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.imgCon1}></div>
      <div className={style.imgCon2}></div>
      <div className={style.loginDiv}>
        <RegisterComponent />
      </div>
    </div>
  );
};

export default RegisterP;
