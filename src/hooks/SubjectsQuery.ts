import {useQuery} from "react-query";
import ReqLib from "@/lib/api";
import {ProgramsI, SubjectsRes} from "@/interface";

export const useGetSubjects=()=>{
    return useQuery<SubjectsRes>('get-subjects',()=>ReqLib.getRes<SubjectsRes>('subjects'))
}

export const useGetByIdSubjects=(id:string)=>{
    return useQuery<ProgramsI>(['get-by-id-subjects',id],()=>ReqLib.getByIdRes<ProgramsI>('subjects',id))
}