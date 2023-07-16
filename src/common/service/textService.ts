import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "../api/request"

export const getTestByClassId = (id: string) : Promise<any> => {
    return axiosClient.get(`/test/by-class-id?id=${id}`)
    .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {});
}