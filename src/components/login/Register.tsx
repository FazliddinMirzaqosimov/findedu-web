import { useLogin, useRegister } from "@/hooks/AuthQuery";
import { LoginTypes, FormData } from "@/interface";
import {
  regUserFailure,
  signUserStart,
  signUserSuccess,
  signPreError,
} from "@/service/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";
import LoadingOutlined from "@ant-design/icons";
import { Alert, message, Space, Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import ValError from "./validation-error";
import { useForm } from "react-hook-form";

const antIcon = <LoadingOutlined style={{ color: "white" }} spin />;

const RegisterComponent = () => {
  const {
    reset,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const useFo = useForm();
  const [emaile, setEmaile] = useState<string>("");

  const router = useRouter();
  const {
    isLoading,
    loggedIn,
    errorR: ErrorRedux,
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
    isLoading: isLoadingR,
  } = useRegister();

  useEffect(() => {
    if (isError) {
      dispatch(regUserFailure(error.response.data.message));
      console.log(error);
    } else if (isSuccess) {
      // dispatch(signUserSuccess(data));
      localStorage.setItem("email", emaile);
      router.push(`/auth/register/confirm/`);
    }
  }, [isLoadingR]);

  const onSubmitR = async (e: FormData) => {
    // mutate({ name, email, password });
    dispatch(signUserStart());
    console.log(e);
    const { name, email, password } = e;
    const user = {
      name: name ? name : "123",
      email: email ? email : "123",
      password: password ? password : "123",
    };
    mutate(user);
    email ? setEmaile(email) : null;
  };

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
          <Link href="/auth/login">
            <h2>Kirish</h2>
          </Link>
          <Link href="/auth/register">
            <h2
              style={{
                color: "#4e1783",
              }}
            >
              Ro&apos;yhatdan o&apos;tish
            </h2>
          </Link>
        </div>
        <form
          className={styles.form}
          autoComplete="off"
          autoCapitalize="off"
          onSubmit={handleSubmit(onSubmitR)}
        >
          <div>
            <div className={styles.textbox}>
              <input
                {...register("email", {
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Email is not valid",
                  },
                })}
                required
                type="text"
                className={styles.input}
              />
              <label className={styles.label}>Email</label>
            </div>
            <div className={styles.textbox}>
              <input
                {...register("name", {
                  minLength: {
                    value: 4,
                    message: "Name should be at least 4 characters",
                  },
                })}
                type="text"
                className={styles.input}
                required
              />
              <label className={styles.label}>Name</label>
            </div>
            <div className={styles.textbox}>
              <input
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Password should be at least 8 characters",
                  },
                })}
                type="password"
                required
                className={styles.input}
              />
              <label className={styles.label}>Password</label>
            </div>
            <div className={styles.textbox}>
              <input
                {...register("confirmPassword", {
                  validate: (value) => {
                    return (
                      value === watch("password") || "Passwords do not match"
                    );
                  },
                })}
                type="password"
                required
                className={styles.input}
              />
              <label className={styles.label}>Confirm Password</label>
            </div>
          </div>
          <button
            type="submit"
            className={styles.button}
            onClick={() => {
              console.log(errors, "er");
            }}
          >
            {isLoading ? <Spin indicator={antIcon} /> : <span>-&gt;</span>}
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterComponent;
