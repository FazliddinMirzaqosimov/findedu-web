import {useQuery} from "react-query";
import ReqLib from "@/lib/api";
import {EducationI, EducationReq} from "@/interface";

export const useGetEducation=()=>{
    return useQuery<EducationReq>('get-education',()=>ReqLib.getRes<EducationReq>('edu'))
}

export const useGetByIdEducation=(id:string)=>{
    return useQuery<EducationI>(['get-education--by-id',id],()=>ReqLib.getByIdRes<EducationI>('edu',id),{
        // enabled:false
    })
}