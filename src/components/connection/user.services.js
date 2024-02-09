import { publicUrl } from "./axios.services"


export const userLogin=(userData)=>{
    return publicUrl.post(`/student/login`,userData).then((response)=>response.data)
}

export const userRegister=(userData)=>{
    return publicUrl.post(`/student/create`,userData).then((response)=>response.data)
}