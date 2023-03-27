import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./style.module.css";
import { useForm } from "react-hook-form";
import { LoadingOutlined } from "@ant-design/icons";
import { useOtpValidation } from "@/hooks/AuthQuery";
import { FormData, LoginTypes } from "@/interface";
import {
  signPreError,
  otpUserFailure,
  signUserStart,
  signUserSuccess,
} from "@/service/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";
import { Space, Spin } from "antd";
import ValError from "./validation-error";

const antIcon = <LoadingOutlined style={{ color: "white" }} spin />;

const OtpVolid = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    isLoading,
    loggedIn,
    errorO: ErrorRedux,
  } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    mutate,
    data,
    isError,
    isSuccess,
    error,
    isLoading: isLoadingO,
  } = useOtpValidation();
  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    } else if (!localStorage.getItem("email")) {
      typeof window !== "undefined" ? localStorage.remove("email") : undefined;
      router.push(`/auth/register`);
    }
    signPreError();
  }, []);
  useEffect(() => {
    if (isError) {
      dispatch(otpUserFailure(error));
      console.log(error);
    } else if (isSuccess) {
      localStorage.removeItem("email");
      router.push(`/auth/login`);
    }
  }, [isLoadingO]);
  const onSubmit = (e: FormData) => {
    console.log(e);

    const getEmail = localStorage.getItem("email");
    mutate({
      email: getEmail ? getEmail : "123",
      otp: e.otp ? e.otp : "12345",
    });
    console.log(getEmail);
  };
  console.log(errors);
  if (typeof window !== "undefined") {
    localStorage.getItem("email")
      ? console.log("ok")
      : router.push("/auth/register");
  }

  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: "400px",
          textAlign: "center",
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translate(-50%, 0)",
          zIndex: 99,
        }}
      >
        {!!errors &&
          Object.keys(errors).map((e) => {
            console.log(errors[e]?.message);
            return (
              <ValError type="info" key={e} message={errors[e]?.message} />
            );
          })}
        <>
          {ErrorRedux && (
            <ValError remove={true} type="error" message={ErrorRedux} />
          )}
        </>
      </Space>
      <div className={styles.signup}>
        <div className={styles.tabs}>
          <h2 className={styles.h2confirm}>Tasdiqlash</h2>
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          autoCapitalize="off"
        >
          <div>
            <div className={styles.textbox}>
              <input
                className={styles.input}
                {...register("otp", {
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
            {isLoadingO ? <Spin indicator={antIcon} /> : <span>-&gt;</span>}
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
