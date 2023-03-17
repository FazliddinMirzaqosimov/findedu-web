import {useQuery} from "react-query";
import ReqLib from "@/lib/api";
import {EducationI, EducationRes} from "@/interface";

export const useGetEducation=()=>{
    return useQuery<EducationRes>('get-education',()=>ReqLib.getRes<EducationRes>('edu'))
}

export const useGetByIdEducation=(id:string)=>{
    return useQuery<EducationI>(['get-education--by-id',id],()=>ReqLib.getByIdRes<EducationI>('edu',id),{
        enabled:false
    })
}