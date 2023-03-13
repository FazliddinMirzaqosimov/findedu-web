import Layout from "@/components/Layout";
import React from "react";
import styles from "./styles.module.scss";
import Input from "@/components/Input";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicList from "@/components/Dynamic section/dynamic-list";
import Card from "@/components/card";
import img1 from "@/assets/media/Najot_Talim-01.png";
const DynamicSectionArr = [
  {
    title: "Tanlashingiz mumkin",
    tags: [
      {
        text: "IT",
      },

      {
        text: "Marketing",
      },
      {
        text: "Toshkent",
      },
      {
        text: "IELTS",
      },
      {
        text: "SAT",
      },
      {
        text: "Internation",
      },
    ],
  },
];

const Cards = [
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
  {
    title: "Najot ta'lim",
    description: "Biz ilm va tajriba ulashamiz",
    score: 4.5,
    imgUrl: img1,
    href: "/string",
  },
];

function Edus() {
  return (
    <Layout>
      <div className={styles.container}>
        <Input
          dropdown={[
            {
              options: [
                "Barchasi",
                "Toshkent",
                "Samarqand",
                "Buxoro",
                "Sirdaryo",
                "Jizzax",
                "Qashqadaryo",
                "Andijon",
                "Namangan",
                "Farg’ona",
                "Surxondaryo",
                "Xorazm",
                "Navoiy",
                "Qoraqalpog’iston Respublikasi",
              ],
              name: "Mintaqa",
            },
            {
              options: [
                "Barchasi",
                "Toshkent",
                "Samarqand",
                "Buxoro",
                "Sirdaryo",
                "Jizzax",
                "Qashqadaryo",
                "Andijon",
                "Namangan",
                "Farg’ona",
                "Surxondaryo",
                "Xorazm",
                "Navoiy",
                "Qoraqalpog’iston Respublikasi",
              ],
              name: "Darajasi",
            },
            {
              options: [
                "Barchasi",
                "Toshkent",
                "Samarqand",
                "Buxoro",
                "Sirdaryo",
                "Jizzax",
                "Qashqadaryo",
                "Andijon",
                "Namangan",
                "Farg’ona",
                "Surxondaryo",
                "Xorazm",
                "Navoiy",
                "Qoraqalpog’iston Respublikasi",
              ],
              name: "O'qish turi",
            },
            {
              options: [
                "Barchasi",
                "Toshkent",
                "Samarqand",
                "Buxoro",
                "Sirdaryo",
                "Jizzax",
                "Qashqadaryo",
                "Andijon",
                "Namangan",
                "Farg’ona",
                "Surxondaryo",
                "Xorazm",
                "Navoiy",
                "Qoraqalpog’iston Respublikasi",
              ],
              name: "Yonalish",
            },
            {
              options: [
                "Barchasi",
                "Toshkent",
                "Samarqand",
                "Buxoro",
                "Sirdaryo",
                "Jizzax",
                "Qashqadaryo",
                "Andijon",
                "Namangan",
                "Farg’ona",
                "Surxondaryo",
                "Xorazm",
                "Navoiy",
                "Qoraqalpog’iston Respublikasi",
              ],
              name: "Narxi",
            },
          ]}
          placeholder={"Kasb, fan yoki o’quv markaz nomini kiriting..."}
        />
        <Breadcrumb />

        <DynamicList sectionList={DynamicSectionArr[0]} />

        <div className={styles.cards}>
          {Cards.map((item, i) => {
            return (
              <Card
                key={i}
                title={item.title}
                description={item.description}
                score={item.score}
                imgUrl={item.imgUrl}
                href={item.href}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Edus;
