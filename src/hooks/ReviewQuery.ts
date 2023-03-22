import {useMutation, useQuery} from "react-query";
import {PostReviewI, PostReviewReq, ReviewByEduCentreReq, ReviewByIdReq, ReviewI, ReviewReq} from "@/interface";
import ReqLib from "@/lib/api";
import data from "@react-google-maps/api/src/components/drawing/Data";

interface PostReviewId{
    id:string,
    data:PostReviewI
}

export const useGetReview=()=>{
    return useQuery<ReviewReq>('get-review',()=>ReqLib.getRes<ReviewReq>('review'))
}
export const useGetByIdReview=(id:string)=>{
    return useQuery<ReviewByIdReq>(['get-by-id-review',id],()=>ReqLib.getByIdRes<ReviewByIdReq>('review',id))
}

export const useGetByEduCentreReview=(id:string)=>{
    return useQuery<ReviewByEduCentreReq>(['get-by-edu-review',id],()=>ReqLib.getByIdRes<ReviewByEduCentreReq>('review/educentre',id))
}

export const usePostReview=()=>{
    return useMutation<ReviewI,Error,PostReviewReq>(({id, data})=>{
       return  ReqLib.postRes<ReviewI,PostReviewI>('review',id,data)
    })
}