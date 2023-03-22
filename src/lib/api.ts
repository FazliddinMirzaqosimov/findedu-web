import axios from './axios'
import {PostReviewI} from "@/interface";
import {AxiosResponse} from "axios";


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
    async postRes<T>(url:string,id:string,data:PostReviewI):Promise<T>{
        console.log({url, id, data})
       const dataJson=JSON.stringify(data)
           const response=await axios.post(`/${url}/${id}`,dataJson)
            return response.data
    }
}
export default ReqLib