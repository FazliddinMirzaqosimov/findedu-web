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
            <div className={style.section_list}>
                <p className={style.title}>{sectionList.title} :</p>
                <Space align={"center"} size={[20,10]} className={style.tag_list}>
                    {
                            sectionList.tags.map((tag, ind) => (
                                <Tag color={'blue'} text={tag.text}  key={ind}/>
                            ))
                    }
                </Space>

            </div>
        </>
    )
}
export default DynamicList