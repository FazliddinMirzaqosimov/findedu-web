import React, { FC } from 'react'
import { ICourses } from './courses_types/courses_types'
import Link from 'next/link'
import s from './coursesStyle.module.scss'


interface CourseProps {
    children?: React.ReactChild | React.ReactNode,
}

const courseData: ICourses[] = [
  {'id': 1, "title": 'Title', "tags": ["tag1", 'tag2'], 'description': "lorem ipsum", "duration": '1-2', "price": "10", 'link': "/components"},
  {'id': 1, "title": 'Title', "tags": ["tag1", 'tag2'], 'description': "lorem ipsum", "duration": '1-2', "price": "10", 'link': "/"},
  {'id': 1, "title": 'Title', "tags": ["tag1", 'tag2'], 'description': "lorem ipsum", "duration": '1-2', "price": "10", 'link': "/components"},
  {'id': 1, "title": 'Title', "tags": ["tag1", 'tag2'], 'description': "lorem ipsum", "duration": '1-2', "price": "10", 'link': "/"},
  {'id': 1, "title": 'Title', "tags": ["tag1", 'tag2'], 'description': "lorem ipsum", "duration": '1-2', "price": "10", 'link': "/components"},
  {'id': 1, "title": 'Title', "tags": ["tag1", 'tag2'], 'description': "lorem ipsum", "duration": '1-2', "price": "10", 'link': "/"},
]

const Courses: FC<CourseProps> = ({children}) => {
  return (
    <div className={s.cards}>
        {courseData?.map(course=>
                <Link href={`/${course?.link}`} className={s.link}>
              <div key={course.id} className={s.card}>
                <h1 className={s.card__title}>{course.title}</h1>
                {course?.tags?.map(tag=>
                    <span className={s.card__tag}>{tag}</span>
                )}
                <p>{course.description}</p>
                <div className={s.card__duration}>Davomiyligi: <span className={s.card__span}>{course.duration} oy</span></div>
                <div className={s.card__price}>Narxi: <span className={s.card__span}>{course.price} million so`m</span></div>
              </div>
            </Link>
            )}
    </div>

  )
}



export default Courses