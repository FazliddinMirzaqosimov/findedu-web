import React, { useState } from "react";
import styles from "./style.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";

interface DropdownProps {
  options: string[];
  dropName: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, dropName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => {
          return selectedOption !== option;
        })
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <button
        className={styles.dropdown__button}
        style={{
          borderLeft: isOpen ? "1px solid #461773" : "1px solid #0A0311",
          color: isOpen ? "#461773" : "#0A0311",
        }}
      >
        {dropName} &nbsp;{" "}
        <ArrowRightOutlined
          rotate={isOpen ? 90 : 0}
          style={{
            color: isOpen ? "#461773" : "#0A0311",
          }}
        />
      </button>
      {isOpen && (
        <div className={styles.dropdown__overlay}>
          {options.map((option, i) => (
            <div
              key={i}
              className={`${styles.dropdown__option} ${
                selectedOptions.includes(option)
                  ? styles["dropdown__option--selected"]
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
