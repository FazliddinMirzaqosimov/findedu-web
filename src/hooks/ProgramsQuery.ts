import {useQuery} from "react-query";
import ReqLib from "@/lib/api";
import {ProgramsI, ProgramsReq} from "@/interface";

export const useGetPrograms=()=>{
    return useQuery<ProgramsReq>('get-programs',()=>ReqLib.getRes<ProgramsReq>('programs'))
}

export const useGeByIdPrograms=(id:string)=>{
    return useQuery<ProgramsI>(['get-programs',id],()=>ReqLib.getByIdRes<ProgramsI>('programs',id))
}


