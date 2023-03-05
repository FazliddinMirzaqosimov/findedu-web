export interface SectionListI {
    title: string
    tags: TagTextI[]

}

export interface TagTextI {
    text: string
}

export interface TagI extends TagTextI {
    color: 'black' | 'blue'
    tel?:boolean
}
export interface DynamicSectionI {
    section:SectionListI[]
}
export interface BranchI{
    branch:{
        name: string
        mainAddress: string
        onMap: string
        phones: string[]
    }
}