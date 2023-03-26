import OtpVolid from "@/components/login/otpVolid";
import { useRouter } from "next/router";

import React from "react";
import Blob1 from "../../assets/graph (1).png";
import Blob2 from "../../assets/graph.png";
import Image from "next/image";
import style from "./auth.module.scss";
import RegisterComponent from "@/components/login/Register";

const Otp = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.imgCon1}></div>
      <div className={style.imgCon2}></div>
      <div className={style.loginDiv}>
        <OtpVolid />
      </div>
    </div>
  );
};

export default Otp;
