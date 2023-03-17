import {useQuery} from "react-query";
import ReqLib from "@/lib/api";
import {ProgramsI, ProgramsRes} from "@/interface";

export const useGetPrograms=()=>{
    return useQuery<ProgramsRes>('get-programs',()=>ReqLib.getRes<ProgramsRes>('programs'))
}

export const useGeByIdPrograms=(id:string)=>{
    return useQuery<ProgramsI>(['get-programs',id],()=>ReqLib.getByIdRes<ProgramsI>('programs',id))
}


