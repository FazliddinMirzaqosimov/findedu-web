import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Image from "next/image";
import css from "./navbar.module.scss";
import Link from "next/link";
import Button from "../Button";

function Navbar() {
  const [active, setActive] = useState(false);
  const [blur, setBlur] = useState(0);

  const activate = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setBlur(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${css.navbar}`}>
      <div className="container">
        <div className={`${css.wrapper} ${blur > 300 && css.padding}`}>
          <Link href="/" >
            <Image className={css.logo} src={logo} alt="Logo" />
          </Link>
          <input type="checkbox" id="checkbox" />

          <label
            htmlFor="checkbox"
            className={css.bg}
            onClick={activate}
          ></label>

          <label
            htmlFor="checkbox"
            className={`${css.bar} ${active && css.active}`}
            onClick={activate}
          >
            <div className={css.line}></div>
          </label>

          <nav>
            <ul>
              <li>
                <Link href={"/educations"}>O’quv markazlar</Link>
              </li>
              <li>
                <Link href={"#"}>Loyiha haqida</Link>
              </li>
            </ul>
            <Button
              href="/auth/login"
              label="Kirish"
              type="primary"
              border="full"
            />
            <Button
              href="/auth/register"
              label="Ro'yhatdan o'tish"
              type="secondary"
              border="full"
            />
          </nav>
        </div>
        <div className={css.line}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 9 9"
            fill="none"
            className={css.dot}
          >
            <path
              d="M9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5Z"
              fill="#461773"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.39411 2.52192C2.86148 2.05639 3.44784 1.8005 3.88867 1.61508C4.0523 1.54625 4.2432 1.61997 4.31615 1.7818C4.3891 1.94364 4.31608 2.1315 4.15164 2.19839C3.76643 2.35506 3.25341 2.57336 2.84777 2.97739C2.39775 3.42563 2.10511 4.01688 1.96737 4.65748C1.93005 4.83103 1.76972 4.95506 1.59376 4.93156C1.41781 4.90807 1.29305 4.746 1.32873 4.5721C1.49664 3.75364 1.87758 3.03641 2.39411 2.52192Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
