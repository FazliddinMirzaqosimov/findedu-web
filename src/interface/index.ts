export interface SectionListI {
  title: string;
  tags: TagTextI[];
}

export interface TagTextI {
  text: string;
}

export interface TagI extends TagTextI {
  color: "black" | "blue";
}
export interface DynamicSectionI {
  section: SectionListI[];
}
export interface BranchI {
  branch: {
    name: string;
    mainAddress: string;
    onMap: string;
    phones: string[];
  };
}

export interface InputMainProps {
  dropdown?: {
    options: string[];
    name: string;
  }[];

  button?: string | boolean;

  placeholder?: string;
}

export interface DropdownProps {
  options: string[];
  dropName: string;
}

//education interfase

export interface EducationI{
  subjects: []
  programs: []
  others: []
  phones: []
  links: []
  branches: []
  _id: string,
  name_uz: string,
  name_ru: string,
  name_en: string,
  languages: []
}

export interface EducationRes{
  total:number
  data:EducationI[]
}

