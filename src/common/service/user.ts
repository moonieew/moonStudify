import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "../api/request";

interface registerField {
    username: string;
    password: string;
    fullname: string;
    email: string;
    role: string
}

export const register = (params: registerField) : Promise<any> => {
    return axiosClient.post('/auth/register', {
        ...params
    })
}

export const getInfo = () : Promise<any> => {
    return axiosClient
    .get('/user/info')
    .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
}