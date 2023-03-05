import React, { FC } from "react";
import { ICourses } from "./courses_types/courses_types";
import Link from "next/link";
import s from "./coursesStyle.module.scss";
import Tag from "../Tag/tag";
import Heading from "../heading/Heading";

interface CourseProps {
  children?: React.ReactChild | React.ReactNode;
}

const courseData: ICourses[] = [
  {
    id: 1,
    title: "Title",
    tags: ["tag1", "tag2"],
    description: "lorem ipsum",
    duration: "1-2",
    price: "10",
    link: "/",
  },
  {
    id: 2,
    title: "Title",
    tags: ["tag1", "tag2", "tag", "tag", "tag", "tag", "tag"],
    description: "lorem ipsum",
    duration: "1-2",
    price: "10",
    link: "/components",
  },
  {
    id: 3,
    title: "Title",
    tags: ["tag1", "tag2", "tag", "tag", "tag", "tag", "tag"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fugit dignissimos accusamus consequatur deserunt quidem sunt suscipit impedit aperiam. Itaque, nesciunt exercitationem id minus unde et dolore perferendis eius numquam?",
    duration: "1-2",
    price: "10",
    link: "/",
  },
  {
    id: 4,
    title: "Title",
    tags: ["tag1", "tag2"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fugit dignissimos accusamus consequatur deserunt quidem sunt suscipit impedit aperiam. Itaque, nesciunt exercitationem id minus unde et dolore perferendis eius numquam?",
    duration: "1-2",
    price: "10",
    link: "/components",
  },
  {
    id: 5,
    title: "Title",
    tags: ["tag1", "tag2", "tag", "tag", "tag", "tag", "tag"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est fugit dignissimos accusamus consequatur deserunt quidem sunt suscipit impedit aperiam. Itaque, nesciunt exercitationem id minus unde et dolore perferendis eius numquam?  ",
    duration: "1-2",
    price: "10",
    link: "/",
  },
];

const Courses: FC<CourseProps> = ({ children }) => {
  return (
    <div className={s.cards}>
      {courseData?.map((course) => (
        <Link href={`/${course?.link}`} className={s.link}>
          <div key={course.id} className={s.card}>
            <div className={s.card__heading}>
              <Heading
                title={course?.title}
                titleSize="sm"
                description={course?.description}
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
