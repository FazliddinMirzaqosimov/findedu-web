import style from './tag.module.scss'

interface TagI{
    text:string
    color: 'black' | 'blue'
}

const Tag = ({text,color}:TagI) => {
    return(
        <>
            <button className={color==='blue' ? style.tag_blue : style.tag_black}>
               <p >{text}</p>
            </button>
        </>
    )
}
export default Tag