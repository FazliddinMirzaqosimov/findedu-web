import { useLogin, useRegister } from "@/hooks/AuthQuery";
import { LoginTypes, FormData } from "@/interface";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
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

  const { isLoading, loggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();


  const errMessage=():void=>{
    Object.keys(errors).map((e) => {
      const mess=errors[e]?.message
      message.info(String(mess))
    })
  }



  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, []);

  useEffect(()=>{
    errMessage()
  },[errors])

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
      dispatch(signUserFailure(error));
      console.log(error);
    } else if (isSuccess) {
      // dispatch(signUserSuccess(data));
      localStorage.setItem("email", emaile);
      router.push(`/auth/register/confirm/`);
    }
  }, [isLoadingR]);

  const onSubmitR = async (e: FormData) => {
    // mutate({ name, email, password });
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
  console.log(data);

  return (
    <>
      {/*<Space*/}
      {/*  direction="vertical"*/}
      {/*  style={{*/}
      {/*    width: "400px",*/}
      {/*    textAlign: "center",*/}
      {/*    position: "absolute",*/}
      {/*    top: "10px",*/}
      {/*    left: "50%",*/}
      {/*    transform: "translate(-50%, 0)",*/}
      {/*    zIndex: 99,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {!!errors &&*/}
      {/*    Object.keys(errors).map((e) => {*/}
      {/*      const mess=errors[e]?.message*/}
      {/*      console.log(errors)*/}
      {/*      return <ValError key={e} messages={mess} />;*/}
      {/*    })}*/}
      {/*</Space>*/}
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
              errMessage()
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
