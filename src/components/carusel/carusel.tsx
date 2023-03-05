import React from "react";
import styles from "./carusel.module.scss";
import { useState } from "react";
import Comments from "../comments/comments";
import {ArrowLeftOutlined,ArrowRightOutlined} from "@ant-design/icons"


interface images {
  length: number;
 
}
const rasm = [
  {
    Name: "LOREM",
    Surname: "IPSUM1",
    roll: "user",
    coment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis totam asperiores ducimus doloremque quia cum non quaerat a, voluptatem impedit necessitatibus aut doloribus dolor sunt laborum corporis fugit similique perspiciatis, hic quam possimus delectus quis. Magni distinctio odit reprehenderit, ipsum voluptate numquam dolor, saepe odio delectus voluptatum iure consequatur quos!",
  },
  {
    Name: "LOREM",
    Surname: "IPSUM2",
    roll: "user",
    coment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis totam asperiores ducimus doloremque quia cum non quaerat a, voluptatem impedit necessitatibus aut doloribus dolor sunt laborum corporis fugit similique perspiciatis, hic quam possimus delectus quis. Magni distinctio odit reprehenderit, ipsum voluptate numquam dolor, saepe odio delectus voluptatum iure consequatur quos!",
  },
  {
    Name: "LOREM",
    Surname: "IPSUM3",
    roll: "user",
    coment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis totam asperiores ducimus doloremque quia cum non quaerat a, voluptatem impedit necessitatibus aut doloribus dolor sunt laborum corporis fugit similique perspiciatis, hic quam possimus delectus quis. Magni distinctio odit reprehenderit, ipsum voluptate numquam dolor, saepe odio delectus voluptatum iure consequatur quos!",
  },
];



const Corusel: React.FC<images> = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [left,setLeft]=useState(0);
  const [right,setRight]=useState(10099);
  
  
  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    // if(left===0)setLeft(99)
    // if(right===0)setRight(99)
    left===0? setLeft(10099):setLeft(0)
    right===0? setRight(10099):setRight(0)
    setCurrentIndex(index);
  };
  
  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    left===0? setLeft(10099):setLeft(0)
    right===0? setRight(10099):setRight(0)
    setCurrentIndex(index);
  };

  return (
    <div className={styles.comments}>
      <div className={styles.slider}>
      <div className={styles.sliderfontop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 9 9"
          fill="none"
          style={{ transform: `translate(${left}%,-50%)` }}
        >
          <path
            d="M9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5Z"
            fill="#461773"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.39411 2.52192C2.86148 2.05639 3.44784 1.8005 3.88867 1.61508C4.0523 1.54625 4.2432 1.61997 4.31615 1.7818C4.3891 1.94364 4.31608 2.1315 4.15164 2.19839C3.76643 2.35506 3.25341 2.57336 2.84777 2.97739C2.39775 3.42563 2.10511 4.01688 1.96737 4.65748C1.93005 4.83103 1.76972 4.95506 1.59376 4.93156C1.41781 4.90807 1.29305 4.746 1.32873 4.5721C1.49664 3.75364 1.87758 3.03641 2.39411 2.52192Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        className={styles.sliderwrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {rasm.map((item, index) => (
          <div key={index} className={styles.slide}>
             <Comments Name={item.Name} Surname={item.Surname} roll={item.roll} coment={item.coment}/>
            {/* <img src={image} alt={`Slide ${index}`} /> */}
          </div>
        ))}
      </div>
      <div className={styles.sliderfonbot}>
       <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 9 9"
          fill="none"
          // style={{right:`${right}%`}}
          style={{ transform: `translate(${right}%,-50%)` }}
          
         > 
          <path
            d="M9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5Z"
            fill="#461773"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.39411 2.52192C2.86148 2.05639 3.44784 1.8005 3.88867 1.61508C4.0523 1.54625 4.2432 1.61997 4.31615 1.7818C4.3891 1.94364 4.31608 2.1315 4.15164 2.19839C3.76643 2.35506 3.25341 2.57336 2.84777 2.97739C2.39775 3.42563 2.10511 4.01688 1.96737 4.65748C1.93005 4.83103 1.76972 4.95506 1.59376 4.93156C1.41781 4.90807 1.29305 4.746 1.32873 4.5721C1.49664 3.75364 1.87758 3.03641 2.39411 2.52192Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.btn}>
        <button className={styles.previous} onClick={previousSlide}>
        <ArrowLeftOutlined />
        </button>
        <button className={styles.next} onClick={nextSlide}>
        <ArrowRightOutlined />
        </button>
      </div>
      
      </div>
    </div>
  );
};

export default Corusel;