import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./breadcrumb.module.scss";

type breadcrumbProps = {
  title: string;
  link?: string;
};

function Breadcrumb() {
  const paths: breadcrumbProps[] = [];
  const router = useRouter();

  if (router.asPath === "/educations") {
    paths.push({ title: "O'quv markazlari", link: "/educations" });
  } else if (router.asPath.startsWith("/about")) {
    paths.push({ title: "Website haqida", link: "/about" });
  }

  return (
    <ul className={styles.breadcrumb}>
      <li>
        <Link href="/">Bosh sahifa</Link>
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
