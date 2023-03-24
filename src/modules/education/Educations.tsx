import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Input from "@/components/Input";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicList from "@/components/Dynamic section/dynamic-list";
import Card from "@/components/card";
import img1 from "@/assets/media/Najot_Talim-01.png";
import Button from "@/components/Button";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useGetEducation } from "@/hooks/EducationQuery";
import { Skeleton } from "antd";
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

const dropdown = [
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
      "Beginner",
      "Pre-Intermediate",
      "Intermediate",
      "Upper-Intermediate",
      "Advanced",
    ],
    name: "Darajasi",
  },
  {
    options: ["An'anaviy", "Masofaviy"],
    name: "O'qish turi",
  },
  {
    options: [
      "Dasturlash",
      "Dizayn",
      "Marketing",
      "Til",
      "Aniq Fanlar",
      "Subjects",
    ],
    name: "Yonalish",
  },
  {
    options: [
      "50 000 UZS",
      "100 000 UZS",
      "200 000 UZS",
      "300 000 UZS",
      "400 000 UZS",
      "500 000 UZS",
      "600 000 UZS",
      "700 000 UZS",
      "800 000 UZS",
      "900 000 UZS",
      "1 000 000 UZS",
      "1 100 000 UZS",
      "1 200 000 UZS",
      "1 300 000 UZS",
      "1 400 000 UZS",
      "1 500 000 UZS",
      "1 600 000 UZS",
      "1 700 000 UZS",
      "1 800 000 UZS",
      "1 900 000 UZS",
      "2 000 000 UZS",
    ],
    name: "Narxi",
  },
];

function EducationPage() {
  const [more, setMore] = useState<boolean>(false);

  const { data, isLoading } = useGetEducation();
  console.log(isLoading);
  const onClick = () => {
    setMore(!more);
  };
  return (
    <div className={styles.container}>
      <Input
        dropdown={dropdown}
        placeholder={"Kasb, fan yoki o’quv markaz nomini kiriting..."}
      />

      <Breadcrumb />

      <DynamicList sectionList={DynamicSectionArr[0]} />

      <div className={styles.cards}>
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          data?.data.map((item, i) => {
            if (more) {
              return (
                <Card
                  key={item._id}
                  title={item.name_uz}
                  description={"Biz ilm va tajriba ulashamiz"}
                  score={4.7}
                  imgUrl={img1}
                  href={`/educations/${item._id}`}
                />
              );
            } else {
              if (i < 9) {
                return (
                  <Card
                    key={item._id}
                    title={item.name_uz}
                    description={"Biz ilm va tajriba ulashamiz"}
                    score={4.7}
                    imgUrl={img1}
                    href={`/educations/${item._id}`}
                  />
                );
              }
            }
          })
        )}
      </div>

      <div
        className={styles.buttonDiv}
        style={{
          display: data?.data && data?.data.length >= 9 ? "flex" : "none",
        }}
      >
        <Button
          label={
            more ? (
              <span>
                Kamroq <UpOutlined />
              </span>
            ) : (
              <>
                <span>
                  Ko&apos;proq <DownOutlined />
                </span>
              </>
            )
          }
          border="full"
          type="primary"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default EducationPage;
