import {useMutation} from "react-query";
import ReqLib from "@/lib/api";
import {AuthRes, LoginErrorRes, LoginI, LoginSuccessRes, otpValidationI, RegisterI} from "@/interface";

export const useRegister=()=>{
    return useMutation<AuthRes,Error,RegisterI>((data)=>{
        return ReqLib.authPost<AuthRes,RegisterI>('register',data)
    })
}

export const useOtpValidation=()=>{
    return useMutation<AuthRes,Error,otpValidationI>((data)=>{
        return ReqLib.authPost<AuthRes,otpValidationI>('otpValidation',data)
    })
}
export const useLogin=()=>{
    return useMutation<LoginSuccessRes,Error,LoginI>((data)=>{
        return ReqLib.authPost<LoginSuccessRes ,LoginI>('login',data)
    })
}