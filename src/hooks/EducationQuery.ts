import {useQuery} from "react-query";
import ReqLib from "@/lib/api";
import {EducationRes} from "@/interface";

export const useGetEducation=()=>{
    return useQuery<EducationRes>('get-education',()=>ReqLib.getRes<EducationRes>('edu'))
}

export const useGetByIdEducation=(id:string)=>{
    return useQuery(['get-education--by-id',id],()=>ReqLib.getByIdRes('edu',id))
}