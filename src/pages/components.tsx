import Counter from "@/components/counter/Counter";
import Input from "@/components/Input/Input";
import React from "react";
import Tag from "@/components/Tag/tag";
import style from '@/styles/components.module.scss'

const Components = () => {
    return (
        <div>
            <div className={style.componentWrapper}>
                <Input/>
            </div>
            <div className={style.componentWrapper}>
                <Tag text={'tag'} color={'blue'}/>
            </div>

            <div className={style.componentWrapper}>
                <Counter
                    options={[
                        {count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar"},
                        {count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar"},
                        {count: 345, label: "Ro’yhatdan o’tkan o’quv markazlar"},
                    ]}
                />
            </div>
        </div>
    );
};

export default Components;
