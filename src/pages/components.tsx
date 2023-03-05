import Counter from "@/components/counter/Counter";
import Input from "@/components/Input";
import React from "react";
import Tag from "@/components/Tag/tag";
import style from "@/styles/components.module.scss";
import { Space } from "antd";

const Components = () => {
  return (
    <div>
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
        />

        <Counter
          options={[
            { count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
            { count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
            { count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar" },
          ]}
        />
      </Space>
    </div>
  );
};

export default Components;
