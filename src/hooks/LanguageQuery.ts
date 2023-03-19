import {useQuery} from "react-query";
import ReqLib from "@/lib/api";

export const useGetLanguage=()=>{
    return useQuery('get-language',()=>ReqLib.getRes('languages'))
}

export const useGetByIdLanguage=(id:string)=>{
    return useQuery(['get-by-id-language',id],()=>ReqLib.getByIdRes('languages',id))
}