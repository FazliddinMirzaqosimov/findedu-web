import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import styles from "./breadcrumb.module.scss";

type breadcrumbProps = {
  path?: { title: string; link: string }[];
};

function Breadcrumb({ path }: breadcrumbProps) {
  return (
    <ul className={styles.breadcrumb}>
      {" "}
      <li>
        <Link href="/">Bosh sahifa</Link>
      </li>
      {path ? (
        path.map((page) => {
          return (
            <>
              <ArrowRightOutlined />
              <li>
                <Link href={page.link}>{page.title}</Link>
              </li>
            </>
          );
        })
      ) : (
        <>
          <ArrowRightOutlined />
          <li>
            <Link href="/">O’quv markazlar</Link>{" "}
          </li>
        </>
      )}
    </ul>
  );
}

export default Breadcrumb;
