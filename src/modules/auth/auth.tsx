import React from "react";
import Login from "@/components/login/login";
import Blob1 from "../../assets/graph (1).png";
import Blob2 from "../../assets/graph.png";
import { LoginTypes } from "@/interface";
import Image from "next/image";
import style from "./auth.module.scss";
import RegisterComponent from "@/components/login/Register";

const Auth: React.FC<LoginTypes> = ({ type }) => {
  if (type === "register") {
    return (
      <div className={style.mainContainer}>
        <div className={style.imgCon1}></div>
        <div className={style.imgCon2}></div>
        <div className={style.loginDiv}>
          <RegisterComponent />
        </div>
      </div>
    );
  }
  return (
    <div className={style.mainContainer}>
      <div className={style.imgCon1}></div>
      <div className={style.imgCon2}></div>
      <div className={style.loginDiv}>
        <Login type={type} />
      </div>
    </div>
  );
};

export default Auth;
