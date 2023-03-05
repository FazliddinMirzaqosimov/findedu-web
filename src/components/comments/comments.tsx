import React from "react";
import styles from "./comments.module.scss";

interface commentOption {
  Name: string;
  Surname:string;
  roll: string;
  coment: string;
}

const Comments: React.FC<commentOption> = ({ Name,Surname, roll, coment }) => {
  return (
    <div className={styles.comments}>
     
      <div className={styles.user}>
        <div className={styles.userFname}>{Name} { Surname}</div>
        <div className={styles.roll}>{roll}</div>
      </div>
      <div className={styles.coment}>
        <span> %</span>
        {coment}
      </div>
      
    </div>
  );
};

export default Comments;
