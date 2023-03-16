import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { DropdownProps } from "@/interface";
import { setInputFilter } from "@/service/redux/Input";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";

const Dropdown: React.FC<DropdownProps> = ({ options, dropName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const { filterState } = useAppSelector((state) => state.filter);

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

  useEffect(() => {
    setSelectedOptions([...filterState.filter]);
  }, [isOpen]);

  useEffect(() => {
    dispatch(setInputFilter({ ...filterState, filter: selectedOptions }));
    console.log(filterState);
  }, [selectedOptions.length]);

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
