import {useMutation, useQuery} from "react-query";
import {ReviewByIdRes, ReviewRes} from "@/interface";
import ReqLib from "@/lib/api";


export const useGetReview=()=>{
    return useQuery<ReviewRes>('get-review',()=>ReqLib.getRes<ReviewRes>('review'))
}
export const useGetByIdReview=(id:string)=>{
    return useQuery<ReviewByIdRes>(['get-by-id-review',id],()=>ReqLib.getByIdRes<ReviewByIdRes>('review',id))
}

export const useGetByEduCentreReview=(id:string)=>{
    return useQuery<ReviewByIdRes>(['get-by-edu-review',id],()=>ReqLib.getByIdRes<ReviewByIdRes>('review/educentre',id))
}

// export const usePostReview=()=>{
//     return useMutation(ReqLib.postRes)
// }