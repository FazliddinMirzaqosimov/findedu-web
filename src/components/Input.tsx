// import type { MenuProps } from "antd";
// import Dropdown from "antd";

// const items: MenuProps["items"] = [
//   {
//     label: "Clicking me will not close the menu.",
//     key: "1",
//   },
//   {
//     label: "Clicking me will not close the menu also.",
//     key: "2",
//   },
//   {
//     label: "Clicking me will close the menu.",
//     key: "3",
//   },
// ];

// const Input = ({ button, buttonValue, filter }: InputProps) => {
//   return (
//     <>
//       <Dropdown
//         menu={{
//           items,
//         }}
//         open={true}
//       >
//         <a onClick={(e) => e.preventDefault()}>Hover me</a>
//       </Dropdown>
//     </>
//   );
// };

// export default Input;

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
  ];

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <Dropdown
          overlayClassName={style.overlay}
          menu={{
            items,
          }}
          onOpenChange={handleOpenChange}
          open={true}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      )}
    </>
  );
};

export default Input;
