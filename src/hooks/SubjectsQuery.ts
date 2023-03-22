import {useQuery} from "react-query";
import ReqLib from "@/lib/api";
import {ProgramsI, SubjectsReq} from "@/interface";

export const useGetSubjects=()=>{
    return useQuery<SubjectsReq>('get-subjects',()=>ReqLib.getRes<SubjectsReq>('subjects'))
}

export const useGetByIdSubjects=(id:string)=>{
    return useQuery<ProgramsI>(['get-by-id-subjects',id],()=>ReqLib.getByIdRes<ProgramsI>('subjects',id))
}