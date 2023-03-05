import { useState } from "react";
import DropDown from "./DropDown";
import styles from "./style.module.scss";

type InputMainProps = {
  dropdown: [
    {
      options: string[];
      name: string;
    }
  ];

  button?: string | boolean;
};

const index: React.FC<InputMainProps> = ({ dropdown, button }) => {
  const [input, setInput] = useState("");

  return (
    <div className={styles.mainDiv}>
      <input type="text" onChange={(e) => {}} />
      {dropdown.map((drop, i) => {
        console.log(drop);
        return (
          <DropDown key={`${i}`} options={drop.options} dropName={drop.name} />
        );
      })}

      {button && <button className={styles.Button}>{button}</button>}
    </div>
  );
};

export default index;
