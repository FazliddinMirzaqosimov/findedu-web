import Login from "@/components/login/login";
import style from "./auth.module.scss";

const LoginP = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.imgCon1}></div>
      <div className={style.imgCon2}></div>
      <div className={style.loginDiv}>
        <Login />
      </div>
    </div>
  );
};

export default LoginP;
