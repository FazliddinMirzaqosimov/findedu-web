import { useLogin, useRegister } from "@/hooks/AuthQuery";
import { LoginTypes } from "@/interface";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "@/service/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";
import LoadingOutlined from "@ant-design/icons";
import { Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./style.module.css";
import { useForm } from "react-hook-form";

const antIcon = <LoadingOutlined style={{ color: "white" }} spin />;

const Login: React.FC<LoginTypes> = ({ type }) => {
  const { register, reset, handleSubmit } = useForm();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const { isLoading, loggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
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
      dispatch(signUserFailure(error));
      console.log(error);
    } else if (isSuccess) {
      dispatch(signUserSuccess(data));
      router.push("/");
    }
  }, [isLoadingL]);

  const onSubmitL = async (e: FormEvent) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    mutate(user);
    dispatch(signUserStart());
    console.log(isSuccess, isError);
  };

  if (type === "confirm") {
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
                  type="text"
                  className={styles.input}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
  }

  return (
    <>
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
          onSubmit={onSubmitL}
        >
          <div>
            <div className={styles.textbox}>
              <input
                type="text"
                className={styles.input}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={styles.label}>Email</label>
              {/* <span className="material-symbols-outlined"> email </span> */}
            </div>
            <div className={styles.textbox}>
              <input
                type="password"
                value={password}
                required
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
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
