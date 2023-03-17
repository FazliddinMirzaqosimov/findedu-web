import axios from './axios'
import {PostReviewI} from "@/interface";


const ReqLib={
   async getRes<T>(url:string):Promise<T>{
       console.log(url)
        const response = await axios.get<T>(`/${url}`)
       return response.data
    },
    async getByIdRes<T>(url:string,id:string):Promise<T>{
       const response=await axios.get<T>(`/${url}/${id}`)
        return response.data
    },
    async postRes(url:string,id:string,data:PostReviewI):Promise<void>{
           const response=await axios.post(`/${url}/${id}`,data)
        console.log(response)
    }
}
export default ReqLib