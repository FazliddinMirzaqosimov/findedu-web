import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import styles from "./breadcrumb.module.scss";

type breadcrumbProps = {
  paths: { title: string; link: string }[];
};

function Breadcrumb({ paths }: breadcrumbProps) {
  return (
    <ul className={styles.breadcrumb}>
      <li>
        <Link href="/">Bosh sahifa</Link>
      </li>
      {paths.map((page) => {
        return (
          <>
            <ArrowRightOutlined />
            <li>
              <Link href={page.link}>{page.title}</Link>
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default Breadcrumb;
