import style from './tag.module.scss'
import {TagI} from "@/interface";


const Tag = ({text, color, tel}: TagI) => {
    return (
        <>
            {
                tel ?
                    <a href={`tel:${text}`} className={color === 'blue' ? style.tag_blue : style.tag_black}>
                        <p>{text}</p>
                    </a>
                    :
                    <button className={color === 'blue' ? style.tag_blue : style.tag_black}>
                        <p>{text}</p>
                    </button>
            }


        </>
    )
}
export default Tag