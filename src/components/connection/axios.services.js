import axios from "axios";
import { BASE_URL } from "./BASE_URL";


export const publicUrl=axios.create({
    baseURL:BASE_URL
})