import DropDown from "./DropDown";
import styles from "./style.module.scss";

type InputMainProps = {
  dropdown: [
    {
      options: string[];
      name: string;
    }
  ];
};

const index: React.FC<InputMainProps> = ({ dropdown }) => {
  return (
    <div className={styles.mainDiv}>
      {dropdown.map((drop, i) => {
        console.log(drop);
        return (
          <DropDown key={`${i}`} options={drop.options} dropName={drop.name} />
        );
      })}
    </div>
  );
};

export default index;
