import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import style from "./Input.module.scss";

interface InputProps {
  button?: boolean;
  buttonValue?: string;
  filter?: string[];
}

const Input: React.FC = (props: InputProps) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };
  const [open1, setOpen1] = useState(false);

  const handleOpenChange1 = (flag: boolean) => {
    setOpen1(flag);
  };
  const [open2, setOpen2] = useState(false);

  const handleOpenChange2 = (flag: boolean) => {
    setOpen2(flag);
  };

  const items: MenuProps["items"] = [
    {
      label: "Barchasi",
      key: "1",
    },
    {
      label: "Toshkent",
      key: "2",
    },
    {
      label: "Jizzax",
      key: "3",
    },
    {
      label: "Samarqand",
      key: "4",
    },
    {
      label: "Andijon",
      key: "5",
    },
    {
      label: "Namangan",
      key: "6",
    },
    {
      label: "Navoiy",
      key: "7",
    },
    {
      label: "Sirdaryo",
      key: "8",
    },
    {
      label: "Farg'ona",
      key: "9",
    },
    {
      label: "Qashqadaryo",
      key: "10",
    },
    {
      label: "Surxondaryo",
      key: "11",
    },
    {
      label: "Xorazm",
      key: "12",
    },
    {
      label: "Qoraqalpog'iston",
      key: "13",
    },
  ];

  const items1: MenuProps["items"] = [
    {
      label: "Barchasi",
      key: "1",
    },
    {
      label: "Boshlang'ich",
      key: "2",
    },
    {
      label: "O'rta",
      key: "3",
    },
  ];

  const items2: MenuProps["items"] = [
    {
      label: "Barchasi",
      key: "1",
    },
    {
      label: "Kunduzgi",
      key: "2",
    },
    {
      label: "Kechki",
      key: "3",
    },
    {
      label: "online",
      key: "4",
    },
  ];

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <div key="Static key" className={style.divMain}>
          <Dropdown
            overlayClassName={style.overlay}
            menu={{
              items,
            }}
            onOpenChange={handleOpenChange}
            open={true}
          >
            <a className={style.h1} onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            overlayClassName={style.overlay}
            menu={{
              items: items1,
            }}
            onOpenChange={handleOpenChange1}
            open={open1}
          >
            <a
              className={style.h1}
              key={123}
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            overlayClassName={style.overlay}
            menu={{
              items: items2,
              selectable: true,
              defaultSelectedKeys: ["1"],
              multiple: true,
              onSelect: (keys) => console.log(keys),
              onDeselect: (keys) => console.log(keys),
            }}
            onOpenChange={handleOpenChange2}
            open={open2}
          >
            <a
              className={style.h1}
              key={123}
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      )}
    </>
  );
};

export default Input;
