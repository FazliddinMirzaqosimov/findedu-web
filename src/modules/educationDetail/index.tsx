import React from "react";
import Image from "next/image";
import { StarFilled } from "@ant-design/icons";
import { Form, Input, Rate } from "antd";

import Heading from "@/components/heading/Heading";
import DynamicList from "@/components/Dynamic section/";
import styles from "./style.module.scss";
import Branch from "@/components/Branch";
import Courses from "@/components/courses/Courses";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import Corusel from "@/components/carusel/carusel";
import Button from "@/components/Button";
import NTLogo from "@/assets/media/nt_logo.png";
import Card from "@/components/card";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

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
  recommendations: [
    {
      title: "Najot ta'lim",
      description: "Biz ilm va tajriba ulashamiz",
      score: 4.5,
      imgUrl: NTLogo,
      id: "/string1",
    },
    {
      title: "Najot ta'lim",
      description: "Biz ilm va tajriba ulashamiz",
      score: 4.5,
      imgUrl: NTLogo,
      id: "/string1",
    },
    {
      title: "Najot ta'lim",
      description: "Biz ilm va tajriba ulashamiz",
      score: 4.5,
      imgUrl: NTLogo,
      id: "/string1",
    },
  ],
};

function Edu() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div>
          <Heading
            title={staticData.eduName}
            titleSize="md"
            description={staticData.eduDescription}
            highlightedWord
          />
          <div className={styles.dynamicList}>
            <DynamicList section={staticData.dynamicList} />
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
        <div className={styles.titleBox}>
          <Heading
            title="Foto lavhalar"
            titleSize="md"
            highlightedWord="lavhalar"
          />
        </div>
        <ImageViewer data={staticData.gallaries} />
      </section>
      <section className={styles.comments}>
        <div className={styles.titleBox}>
          <Heading
            title="O’quvchilar tomonidan izohlar"
            titleSize="md"
            highlightedWord="izohlar"
          />
        </div>

        <div className={styles.subtitleWrap}>
          <div className={styles.subtitleItem}>
            <span className={styles.icon}>
              <StarFilled />
            </span>
            O’quv markaz umumiy bahosi:
            <span className={styles.highlight}>4,7</span>
          </div>
          <span className={styles.dotIcon}></span>
          <div className={styles.subtitleItem}>
            Izohlar va boholar soni:
            <span className={styles.highlight}>432</span>
          </div>
        </div>
        <Corusel length={3} />
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          className={styles.form}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className={styles.textarea}>
            <Form.Item
              name="comment"
              rules={[
                { required: true, message: "Please input your comment!" },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Izoh qoldirishingiz mumkin..."
              ></Input.TextArea>
            </Form.Item>{" "}
          </div>
          <Form.Item
            label="O’quv markazga baho bering:"
            name="rate"
            rules={[{ required: true, message: "Please input your Rate!" }]}
          >
            <Rate allowHalf defaultValue={2.5} />
          </Form.Item>
          <Button label="izohni yuborish" type="primary" border="full" />
        </Form>
      </section>
      <section className={styles.recommendation}>
        <div className={styles.titleBox}>
          <Heading title="Recommendation" titleSize="md" highlightedWord />
        </div>
        <div className={styles.recommendCards}>
          {staticData.recommendations.map((item) => (
            <div key={item.id} className={styles.recommendCardWrapper}>
              <Card
                title={item.title}
                description={item.description}
                score={item.score}
                imgUrl={item.imgUrl}
                href={item.id}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Edu;
