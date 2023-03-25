import { useLogin, useRegister } from "@/hooks/AuthQuery";
import { LoginTypes } from "@/interface";
import {
  // loginUserFailure,
  // loginUserStart,
  // loginUserSuccess,
  // registerUserFailure,
  // registerUserStart,
  // registerUserSuccess,
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "@/service/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
// import styles from "./styles.module.scss";
import styles from "./style.module.css";
import ValError from "./validation-error";
import { useForm } from "react-hook-form";

const antIcon = <LoadingOutlined style={{ color: "white" }} spin />;

const Login: React.FC<LoginTypes> = ({ type }) => {
  const { register, reset, handleSubmit } = useForm();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const { isLoading, loggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    } else if (router.pathname) {
      router.push(router.pathname);
    }
  }, []);
  const {
    mutate: registerM,
    data: regData,
    isError: errorR,
    isSuccess: successR,
    error: errorReg,
  } = useRegister();

  const onSubmitR = async (e: FormEvent) => {
    e.preventDefault();
    // const user = {
    //   name,
    //   email,
    //   password,
    // };
    // registerM(user);
    // dispatch(signUserStart());
    // try {
    //   // dispatch(signUserSuccess());
    //   router.push("/");
    // } catch (error) {
    //   // dispatch(signUserFailure());
    //   console.log(error);
    // }
  };

  const {
    mutate: loginM,
    data: loginData,
    isError: errorL,
    isSuccess: successL,
    error: errorLogin,
  } = useLogin();

  useEffect(() => {
    if (errorL) {
      dispatch(signUserFailure(errorLogin));
      console.log(errorLogin);
    } else if (successL) {
      dispatch(signUserSuccess(loginData));
      router.push("/");
    }
  }, [errorL, successL]);

  const onSubmitL = async (e: FormEvent) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    loginM(user);
    dispatch(signUserStart());
    console.log(successL, errorL);
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

  return type === "login" ? (
    <>
      <div className={styles.signup}>
        <div className={styles.tabs}>
          <Link href="/auth/login">
            <h2
              style={{
                color: type == "login" ? "#4e1783" : "auto",
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
            {isLoading ? <Spin indicator={antIcon} /> : <>-&gt;</>}
          </button>
        </form>
        <p>
          <a href="">Forgot Password?</a>
        </p>
      </div>
    </>
  ) : (
    <>
      <div className={styles.signup}>
        <div className={styles.tabs}>
          <Link href="/auth/login">
            <h2>Kirish</h2>
          </Link>
          <Link href="/auth/register">
            <h2
              style={{
                color: type == "register" ? "#4e1783" : "auto",
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
                type="text"
                className={styles.input}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className={styles.label}>Name</label>
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
            <div className={styles.textbox}>
              <input
                type="password"
                value={confirmPassword}
                required
                className={styles.input}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label className={styles.label}>Confirm Password</label>
              {/* <span className="material-symbols-outlined"> key </span> */}
            </div>
          </div>

          <button type="submit" className={styles.button}>
            {isLoading ? <Spin indicator={antIcon} /> : <span>-&gt;</span>}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
