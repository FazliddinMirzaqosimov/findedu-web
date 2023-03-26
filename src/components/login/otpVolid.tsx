import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./style.module.css";
import { useForm } from "react-hook-form";
import { LoadingOutlined } from "@ant-design/icons";
import { useOtpValidation } from "@/hooks/AuthQuery";
import { LoginTypes } from "@/interface";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "@/service/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ color: "white" }} spin />;

const OtpVolid = () => {
  const { register, reset, handleSubmit } = useForm();
  const { isLoading, loggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const getEmail = localStorage.getItem("email");
    console.log(getEmail);
  };

  return (
    <>
      <div className={styles.signup}>
        <div className={styles.tabs}>
          <h2 className={styles.h2confirm}>Tasdiqlash</h2>
        </div>
        <form className={styles.form} autoComplete="off" autoCapitalize="off">
          <div>
            <div className={styles.textbox}>
              <input
                className={styles.input}
                {...register("email", {
                  required: "Please enter a otp code",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a valid otp code",
                  },
                })}
              />
              <label className={styles.label}>Code</label>
              {/* <span className="material-symbols-outlined"> email </span> */}
            </div>
          </div>

          <button type="submit" className={styles.button}>
            {isLoading ? <Spin indicator={antIcon} /> : <span>-&gt;</span>}
          </button>
        </form>

        <p>
          <a href="">Resend Code</a>
        </p>
      </div>
    </>
  );
};

export default OtpVolid;
