import {useMutation, useQuery} from "react-query";
import {PostReviewI, ReviewByEduCentreRes, ReviewByIdRes, ReviewRes} from "@/interface";
import ReqLib from "@/lib/api";
import data from "@react-google-maps/api/src/components/drawing/Data";


export const useGetReview=()=>{
    return useQuery<ReviewRes>('get-review',()=>ReqLib.getRes<ReviewRes>('review'))
}
export const useGetByIdReview=(id:string)=>{
    return useQuery<ReviewByIdRes>(['get-by-id-review',id],()=>ReqLib.getByIdRes<ReviewByIdRes>('review',id))
}

export const useGetByEduCentreReview=(id:string)=>{
    return useQuery<ReviewByEduCentreRes>(['get-by-edu-review',id],()=>ReqLib.getByIdRes<ReviewByEduCentreRes>('review/educentre',id))
}

export const usePostReview=()=>{
    return useMutation(ReqLib.postRes)
}