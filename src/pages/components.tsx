import Counter from "@/components/counter/Counter";
import Input from "@/components/Input/Input";
import React from "react";
import Tag from "@/components/Tag/tag";
import style from '@/styles/components.module.scss'
import Button from "@/components/Button";
import {Space} from "antd";
import Layout from "@/components/Layout";

const Components = () => {
    return (
        <div>
            <Layout>
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

                    <div>
                        <Button label='Chiqish' type='primary' border='full' href="/" />
                        <Button label="Ro'yhatdan o'tish" type='secondary' border='full' />
                        <Button label="Ro'yhatdan o'tish" type='primary' border='half' width />
                        <Button label="Ro'yhatdan o'tish" type='secondary' border='full' disable />
                        <Button label="Ro'yhatdan o'tish" type='primary' border='full' disable />
                    </div>
                </Space>
            </Layout>
        </div>
    );
};

export default Components;
