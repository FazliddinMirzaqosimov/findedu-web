import Breadcrumb from "@/components/Breadcrumb";
import Heading from "@/components/heading/Heading";
import Layout from "@/components/Layout";
import DynamicList from "@/components/Dynamic section/dynamic-list";
import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";
import NTLogo from "@/assets/media/NT_logo.png";
import Branch from "@/components/Branch";

const staticData = {
  eduName: "Najot Ta'lim",
  eduDescription:
    "Darslar katta tajribaga ega malakali mutaxassislar tomonidan o’tiladi. Oʻz ishining ustalaridan olingan bilim hamisha barakali va manfaatli boʻladi.",
  dynamicList: [
    {
      title: "Yo'nalishlar",
      tags: [
        {
          text: "Marketing",
        },
        {
          text: "Dasturlash",
        },
        {
          text: "Dizayn",
        },
      ],
    },
    {
      title: "O'qish turi",
      tags: [
        {
          text: "Offline",
        },
      ],
    },
    {
      title: "Telefon raqam",
      tags: [
        {
          text: "+998921234567",
        },
      ],
    },
  ],
  eduLogo: NTLogo,
  branches: [
    {
      name: "Najot Ta’lim in Bukhara",
      mainAddress: "Uzbekista Bukhara ...",
      onMap: "salom",
      phones: ["21312321", "234324324"],
    },
    {
      name: "Najot Ta’lim in Fergana",
      mainAddress: "Uzbekista Fergana ...",
      onMap: "salom",
      phones: ["21312321", "234324324"],
    },
  ],
};

function Edu() {
  return (
    <Layout>
      <section className={styles.heroSection}>
        <div>
          <Heading
            title={staticData.eduName}
            titleSize="md"
            description={staticData.eduDescription}
            highlightedWord
          />
          <div className={styles.dynamicList}>
            {" "}
            {staticData.dynamicList.map((listItem, index) => (
              <DynamicList key={index} sectionList={listItem} />
            ))}
          </div>
        </div>
        <div className={styles.heroImg}>
          <Image src={staticData.eduLogo} alt="logo" />
        </div>
      </section>
      <section className={styles.locationInfo}>
        {staticData.branches.map((branch, index) => (
          <Branch key={index} branch={branch} />
        ))}
        <iframe
          className={styles.iframeMap}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23984.584543480418!2d69.16879367910155!3d41.285514199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d%3A0x23ac4a5a705b84ab!2zTmFqb3QgVGHigJlsaW0!5e0!3m2!1suz!2s!4v1678776628723!5m2!1suz!2s"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </section>
    </Layout>
  );
}

export default Edu;
