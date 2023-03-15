import React from "react";
import Image from "next/image";
import { StarFilled } from "@ant-design/icons";

import Breadcrumb from "@/components/Breadcrumb";
import Heading from "@/components/heading/Heading";
import Layout from "@/components/Layout";
import DynamicList from "@/components/Dynamic section/dynamic-list";
import styles from "./style.module.scss";
import NTLogo from "@/assets/media/NT_logo.png";
import Branch from "@/components/Branch";
import Courses from "@/components/courses/Courses";
import ImageViewer from "@/components/ImageViewer/ImageViewer";

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
  coursesData: [
    {
      id: 1,
      title: "Marketing kurslari",
      tags: ["SMM", "SMM pro", "Marketing", "Targeting"],
      description:
        "Marketing, SMM, targeting, kopirayting kabi zamonaviy kasblarni o‘rganing; kompaniya brendini, mahsulot yoki xizmatni odamlarga taniting",
      duration: "2-4 oy",
      price: "1,8 mln so'm",
      link: "",
    },
    {
      id: 2,
      title: "Dasturlash kurslari",
      tags: ["SMM", "SMM pro", "Marketing", "Targeting"],
      description:
        "Dasturlash ko‘nikmalari yordamida insonlar va kompaniyalar oldida turgan muammolariga qulay texnologik yechimlar taklif eting.",
      duration: "2-4 oy",
      price: "1,8 mln so'm",
      link: "",
    },
    {
      id: 3,
      title: "Dizayn kurslari",
      tags: ["SMM", "SMM pro", "Marketing", "Targeting"],
      description:
        "Professional dizayn dasturlarida ishlash ko‘nikmalarini egallang, loyihalar uchun kreativ yechimlar taqdim eting va tasvirlar orqali mijozlar ishonchini qozoning.",
      duration: "2-4 oy",
      price: "1,8 mln so'm",
      link: "",
    },
  ],
  gallaries: [
    {
      id: 1,
      src: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 2,
      src: "https://picsum.photos/400/400?random=2",
    },
    {
      id: 3,
      src: "https://picsum.photos/400/400?random=3",
    },
    {
      id: 4,
      src: "https://picsum.photos/400/400?random=4",
    },
    {
      id: 5,
      src: "https://picsum.photos/400/400?random=5",
    },
    {
      id: 6,
      src: "https://picsum.photos/400/400?random=6",
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
        <div className={styles.courseCards}>
          <span className={styles.borderLine}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 9 9"
              fill="none"
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
          </span>
          <Courses data={staticData.coursesData} />
        </div>
      </section>
      <section className={styles.gallaries}>
        <Heading
          title="Foto lavhalar"
          titleSize="md"
          highlightedWord="lavhalar"
        />
        <ImageViewer data={staticData.gallaries} />
      </section>
      <section className={styles.comments}>
        <Heading
          title="O’quvchilar tomonidan izohlar"
          titleSize="md"
          highlightedWord="izohlar"
        />
        <div className={styles.subtitleWrap}>
          <div className={styles.subtitleItem}>
            <span className={styles.icon}>
              <StarFilled />
            </span>
            O’quv markaz umumiy bahosi: <span>4,7</span>
          </div>
          <div className={styles.subtitleItem}>
            Izohlar va boholar soni: <span>432</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Edu;
