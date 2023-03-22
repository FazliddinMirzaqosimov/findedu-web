import {useQuery} from "react-query";
import ReqLib from "@/lib/api";
import {LanguageI, LanguageReq} from "@/interface";

export const useGetLanguage=()=>{
    return useQuery<LanguageReq>('get-language',()=>ReqLib.getRes<LanguageReq>('languages'))
}

export const useGetByIdLanguage=(id:string)=>{
    return useQuery<LanguageI>(['get-by-id-language',id],()=>ReqLib.getByIdRes<LanguageI>('languages',id))
}