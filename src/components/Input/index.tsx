import { useState } from "react";
import DropDown from "./DropDown";
import styles from "./style.module.scss";

type InputMainProps = {
  dropdown?: {
    options: string[];
    name: string;
  }[];

  button?: string | boolean;

  placeholder?: string;
};

const Index: React.FC<InputMainProps> = ({ dropdown, button, placeholder }) => {
  const [input, setInput] = useState<string>("");

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
          console.log(drop);
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
