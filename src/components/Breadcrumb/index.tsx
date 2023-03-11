import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import React, { useEffect } from "react";
import styles from "./breadcrumb.module.scss";

type breadcrumbProps = {
  title: string;
  link?: string;
};

function Breadcrumb() {
  const paths: breadcrumbProps[] = [];
  const router = useRouter();
  router.pathname
    .slice(1)
    .split("/")
    .forEach((el) => {
      el && paths.push({ title: `breadcrump.${el}`, link: el });
    });

  return (
    <ul className={styles.breadcrumb}>
      <li>
        <Link href="/">{"breadcrumb.home"}</Link>
      </li>
      {paths.map(({ title, link = "#" }) => {
        return (
          <>
            <ArrowRightOutlined />
            <li>
              <Link href={link}>{title}</Link>
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default Breadcrumb;
