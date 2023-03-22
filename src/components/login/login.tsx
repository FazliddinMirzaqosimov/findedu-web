import { LoginTypes } from "@/interface";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
// import styles from "./styles.module.scss";
import styles from "./style.module.css";
const Login: React.FC<LoginTypes> = ({ type }) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    // setEmail("");
    // setPassword("");
    if (router.pathname) {
      router.push(router.pathname);
    }
  }, []);

  const onSubmitR = (e: FormEvent) => {
    e.preventDefault();

    console.log(e);

    setTimeout(() => {
      router.push("/auth/register/confirm");
    }, 500);
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
              -&gt;
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
            -&gt;
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
          onSubmit={(e) => onSubmitR(e)}
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
            -&gt;
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
