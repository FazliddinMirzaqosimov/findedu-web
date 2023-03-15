import React, { FC } from "react";
import { ICourses } from "./courses_types/courses_types";
import Link from "next/link";
import s from "./coursesStyle.module.scss";
import Tag from "../Tag/tag";
import Heading from "../heading/Heading";

interface CourseProps {
  children?: React.ReactChild | React.ReactNode;
  data : ICourses[]; 
}



const Courses: FC<CourseProps> = ({ children, data }) => {
  return (
    <div className={s.cards}>
      {data?.map((course, i) => (
        <Link href={`/${course?.link}`} key={i} className={s.link}>
          <div key={course.id} className={s.card}>
            <div className={s.card__heading}>
              <Heading
                title={course?.title}
                titleSize="sm"
                description={course?.description}
                highlightedWord
              >
                <span className={s.card__tags}>
                  {course?.tags?.map((tag) => (
                    <Tag color="blue" text={tag} key={tag} />
                  ))}
                </span>
              </Heading>
            </div>
            <div className={s.card__footer}>
              <div className={s.card__duration}>
                Davomiyligi:{" "}
                <span className={s.card__span}>{course.duration} oy</span>
              </div>
              <div className={s.card__price}>
                Narxi:{" "}
                <span className={s.card__span}>
                  {course.price} million so`m
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Courses;
