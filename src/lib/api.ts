import axios from './axios'
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
    }
}
export default ReqLib