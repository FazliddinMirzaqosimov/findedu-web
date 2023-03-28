import { useLogin, useRegister } from "@/hooks/AuthQuery";
import {
  signPreError,
  logUserFailure,
  signUserStart,
  signUserSuccess,
} from "@/service/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";
import { LoadingOutlined } from "@ant-design/icons";
import { Space, Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./style.module.css";
import { useForm } from "react-hook-form";
import ValError from "./validation-error";
import { FormData } from "@/interface";

const antIcon = <LoadingOutlined style={{ color: "white" }} spin />;

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const {
    isLoading,
    loggedIn,
    errorL: ErrorRedux,
  } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
    signPreError();
  }, []);

  const {
    mutate,
    data,
    isError,
    isSuccess,
    error,
    isLoading: isLoadingL,
  } = useLogin();

  useEffect(() => {
    if (isError) {
      dispatch(logUserFailure(error.response.data.message));
    } else if (isSuccess) {
      dispatch(signUserSuccess(data));
      router.push("/");
    }
  }, [isLoadingL]);

  const onSubmitL = async (e: FormData) => {
    console.log(e);

    const user = {
      email: e.email ? e.email : "123",
      password: e.password ? e.password : "12345",
    };

    mutate(user);
    dispatch(signUserStart());
    console.log(isSuccess, isError);
  };

  return (
    <>
      <Space
        className={styles.space_ant}
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
            <ValError type="error" message={ErrorRedux} remove={true} />
          )}
        </>
      </Space>
      {console.log(ErrorRedux)}
      <div className={styles.signup}>
        <div className={styles.tabs}>
          <Link href="/auth/login">
            <h2
              style={{
                color: "#4e1783",
              }}
            >
              Kirish
            </h2>
          </Link>
          <Link href="/auth/register">
            <h2>Ro&apos;yhatdan o&apos;tish</h2>
          </Link>
        </div>
        <form
          className={styles.form}
          autoComplete="off"
          autoCapitalize="off"
          onSubmit={handleSubmit(onSubmitL)}
        >
          <div>
            <div className={styles.textbox}>
              <input
                className={styles.input}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Email is not valid",
                  },
                })}
                required
              />
              <label className={styles.label}>Email</label>
              {/* <span className="material-symbols-outlined"> email </span> */}
            </div>
            <div className={styles.textbox}>
              <input
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Password should be at least 8 characters",
                  },
                })}
                required
                className={styles.input}
              />
              <label className={styles.label}>Password</label>
              {/* <span className="material-symbols-outlined"> key </span> */}
            </div>
          </div>

          <button type="submit" className={styles.button}>
            {isLoadingL ? <Spin indicator={antIcon} /> : <>-&gt;</>}
          </button>
        </form>
        <p>
          <a href="">Forgot Password?</a>
        </p>
      </div>
    </>
  );
};

export default Login;
