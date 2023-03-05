import style from './dynamicList.module.scss'
import Tag from "@/components/Tag/tag";
import {Space} from "antd";
import {SectionListI} from "@/interface";

interface List {
    sectionList: SectionListI
}

const DynamicList = ({sectionList}: List) => {
    return (
        <>
            <Space size={20}>
                <p className={style.title}>{sectionList.title} :</p>
                <Space align={"center"} size={20} wrap={true}>
                    {
                        sectionList.title === 'Telefon raqam' ?
                            sectionList.tags.map((tag, ind) => (
                                <Tag color={'blue'} text={tag.text} tel={true} key={ind}/>
                            )) :
                            sectionList.tags.map((tag, ind) => (
                                <Tag color={'blue'} text={tag.text}  key={ind}/>
                            ))
                    }
                </Space>

            </Space>
        </>
    )
}
export default DynamicList