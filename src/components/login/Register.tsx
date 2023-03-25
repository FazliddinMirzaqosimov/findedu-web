import { useLogin, useRegister } from "@/hooks/AuthQuery";
import { LoginTypes } from "@/interface";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "@/service/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";
import LoadingOutlined from "@ant-design/icons";
import { Alert, Space, Spin } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./style.module.css";
import ValError from "./validation-error";
import { useForm } from "react-hook-form";

const antIcon = <LoadingOutlined style={{ color: "white" }} spin />;

const RegisterComponent = () => {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const useFo = useForm();
  //   console.log(useFo);

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
    }
  }, []);
  const { mutate, data, isError, isSuccess, error } = useRegister();

  const onSubmitR = async (e: FormEvent) => {
    // mutate({ name, email, password });
    console.log(e);
    reset();
  };

  return (
    <>
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
                name="name"
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
                  validate: (value: string) =>
                    value === password || "The passwords do not match",
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
