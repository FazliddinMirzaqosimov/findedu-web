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

export interface UserI {
  _id: string;
  name: string;
  email: string;
  passwordHash: string;
  isValidated: boolean;
  role: string;
}

export interface LanguageI {
  _id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  __v: number;
}

export interface LanguageRes {
  total: number;
  data: LanguageI[];
}
export interface SubjectsI {
  _id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  image: {
    _id: string;
    path: string;
  };
}

export interface SubjectsRes {
  total: number;
  data: SubjectsI[];
}
export interface ProgramsI {
  _id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  image: string;
}

export interface ProgramsRes {
  total: number;
  data: ProgramsI[];
}
export interface LinkI {
  name: string;
  link: string;
}

//education interfase
export interface EducationI {
  subjects: SubjectsI[];
  programs: ProgramsI[];
  others: [];
  phones: string[];
  links: LinkI[];
  branches: [];
  _id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  languages: LanguageI[];
}

export interface EducationRes {
  total: number;
  data: EducationI[];
}

// review interface

export interface ReviewI {
  _id: string;
  user: UserI;
  eduCentre: EducationI;
  rating: number;
  reviewText: string;
  createdAt: string;
}

export interface ReviewByEduCentreI {
  _id: string;
  user: UserI;
  eduCentre: {
    _id: string;
    name_uz: string;
    name_ru: string;
    name_en: string;
  };
  rating: number;
  reviewText: string;
  createdAt: string;
}

export interface ReviewByEduCentreRes {
  total: number;
  data: ReviewByEduCentreI[];
  avg: number;
}

export interface ReviewByIdRes {
  _id: string;
  user: string;
  eduCentre: string;
  rating: number;
  reviewText: string;
  createdAt: string;
}

export interface ReviewRes {
  total: number;
  data: ReviewI[];
}

export interface PostReviewI {
  user: string;
  rating: number;
  reviewText: string;
}

export interface LoginTypes {
  type: "login" | "register";
}
