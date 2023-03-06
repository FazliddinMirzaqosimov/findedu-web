import {Collapse, Space} from "antd";
import style from './branch.module.scss'
import DynamicList from "@/components/Dynamic section/dynamic-list";
import {BranchI, SectionListI} from "@/interface";
import {useEffect, useState} from "react";
import BranchMap from "@/components/Map";

const {Panel} = Collapse;


const tel = {
    title: 'Telefon raqam',
    tags: [
        {
            text: ''
        },
    ]
}
const Branch = ({branch}: BranchI) => {
    const [telBranch, setTelBranch] = useState<SectionListI>(tel)
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    useEffect(() => {
        const tel: SectionListI = {
            title: 'Telefon raqam',
            tags: []
        }

        branch.phones.map((item) => {
            tel.tags.push(
                {
                    text: item
                }
            )
        })

        setTelBranch(tel)
    }, [branch])


    return (
        <>
            <div>
                <Collapse
                    onChange={onChange}

                >
                    <Panel header={branch.name} key="1" showArrow={false} extra={<img className={'image'}
                     src={"https://marketing.uz/uploads/works/covers/8bd79c07ebc2619902f950153e9d40d6.jpg"}/>}
                    >
                        <Space align={"start"} direction={"vertical"} size={[0, 20]}>
                            <p className={style.content_adress}><span>Joylashgan joyi:</span> {branch.mainAddress}</p>
                            <DynamicList sectionList={telBranch}/>

                            <BranchMap map={branch.onMap}/>
                        </Space>
                    </Panel>
                    <span className={'ant-collapse-right-span'}>
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 6.24998C0.585786 6.24998 0.25 6.58576 0.25 6.99998C0.25 7.41419 0.585786 7.74998 1 7.74998L10.25 7.74998L10.25 13C10.25 13.3033 10.4327 13.5768 10.713 13.6929C10.9932 13.809 11.3158 13.7448 11.5303 13.5303L17.5303 7.53031C17.671 7.38965 17.75 7.19889 17.75 6.99998C17.75 6.80106 17.671 6.6103 17.5303 6.46965L11.5303 0.469648C11.3158 0.255149 10.9932 0.190982 10.713 0.307068C10.4327 0.423153 10.25 0.696631 10.25 0.999978L10.25 6.24998L1 6.24998Z"
                            fill="#461773"/>
                    </svg>
                    </span>
                </Collapse>
            </div>


        </>
    )
}
export default Branch