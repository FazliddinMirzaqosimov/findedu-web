import DynamicList from "./dynamic-list";
import {Space} from "antd";
import {DynamicSectionI} from "@/interface";


const DynamicSection = ({section}:DynamicSectionI) => {
    return (
        <>
            <Space direction={"vertical"} align={"start"} size={[0,20]}>
                {
                    section.map((section,ind)=>(
                        <DynamicList sectionList={section} key={ind}/>

                    ))
                }
            </Space>
        </>
    )
}
export default DynamicSection