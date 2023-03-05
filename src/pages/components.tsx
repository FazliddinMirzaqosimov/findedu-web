import Counter from "@/components/counter/Counter";
import Input from "@/components/Input";
import React from "react";
import Tag from "@/components/Tag/tag";
import style from "@/styles/components.module.scss";
import { Space } from "antd";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import Courses from "@/components/courses/Courses";
import Carusel from "../components/carusel/carusel";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
const Components = () => {
  return (
    <div>
      <Breadcrumb paths={[{ title: "O'quv Markazlari", link: "/" }]} />
      <Space direction={"vertical"} size={[10, 150]}>
        <Tag text={"tag"} color={"blue"} />

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
              name: "Daraja",
            },
          ]}
          placeholder={"Kasb, fan yoki o’quv markaz nomini kiriting..."}
          button={"Qidirish"}
        />

        <Counter
          options={[
            { count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
            { count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
            { count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
          ]}
        />
        <ImageViewer />
        <Courses />
        <Carusel length={3} />
        <div>
          <Button label="Hello" border="full" type="primary" href="/home" />
          <Button
            label="Kirish"
            border="full"
            type="primary"
            onClick={() => console.log("Hello")}
          />
          <Button label="Ro'yhatdan o'tish" border="full" type="secondary" />
          <Button
            label="Ro'yhatdan o'tish"
            border="half"
            type="secondary"
            width
          />
        </div>
      </Space>
    </div>
  );
};

export default Components;
