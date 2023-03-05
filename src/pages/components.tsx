import Counter from "@/components/counter/Counter";
import Input from "@/components/Input/Input";
import React from "react";
import Tag from "@/components/Tag/tag";
import style from '@/styles/components.module.scss'
import {Space} from "antd";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import Courses from "@/components/courses/Courses";
import Carusel from "../components/carusel/carusel"
const Components = () => {
    return (
        <div>
            <Space direction={"vertical"} size={[10,150]}>
                <Input/>
                <Tag text={'tag'} color={'blue'}/>

                <Counter
                    options={[
                        {count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar"},
                        {count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar"},
                        {count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar"},
                    ]}
                />
                <ImageViewer />
                <Courses />
                <Carusel length={3}/>
            </Space>
        </div>
    );
};

export default Components;
