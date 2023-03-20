import { Input } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import styles from "./styles.module.scss";
import styles from "./style.module.css";
const Login: React.FC = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    // setInput1("");
    // setInput2("");
    if (router.pathname) {
      router.push(router.pathname);
    }
  }, []);
  console.log(input1, input2);
  return (
    <div>
      <div className={styles.signup}>
        <div className={styles.tabs}>
          <h2>Log In</h2>
          <h2>Sign In</h2>
        </div>
        <form className={styles.form} autoComplete="off" autoCapitalize="off">
          <div>
            <div className={styles.textbox}>
              <input
                type="text"
                className={styles.input}
                required
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
              <label className={styles.label}>Email</label>
              {/* <span className="material-symbols-outlined"> email </span> */}
            </div>
            <div className={styles.textbox}>
              <input
                type="password"
                value={input2}
                required
                className={styles.input}
                onChange={(e) => setInput2(e.target.value)}
              />
              <label className={styles.label}>Password</label>
              {/* <span className="material-symbols-outlined"> key </span> */}
            </div>
          </div>

          <button type="submit" className={styles.button}>
            -&gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
