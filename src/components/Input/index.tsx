import { InputMainProps } from "@/interface";
import { useAppDispatch, useAppSelector } from "@/service/redux/hooks";
import { setInputFilter } from "@/service/redux/Input";
import { stat } from "fs";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import styles from "./style.module.scss";

const Index: React.FC<InputMainProps> = ({ dropdown, button, placeholder }) => {
  const [input, setInput] = useState<string>("");

  const dispatch = useAppDispatch();
  const { filterState } = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(setInputFilter({ ...filterState, input: input }));
    console.log(filterState);
  }, [input]);

  return (
    <div
      className={styles.mainDiv}
      style={{
        paddingRight: button ? 0 : "20px",
      }}
    >
      <input
        placeholder={placeholder}
        type="text"
        value={input}
        className={styles.Input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div
        style={{
          height: "100%",
        }}
        className={styles.div2nd}
      >
        {dropdown?.map((drop, i) => {
          return (
            <DropDown
              key={`${i}`}
              options={drop.options}
              dropName={drop.name}
            />
          );
        })}

        {button && <button className={styles.Button}>{button}</button>}
      </div>
    </div>
  );
};

export default Index;
