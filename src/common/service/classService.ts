import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "../api/request"

export const getClass = (): Promise<any> => {
    return axiosClient
    .get('/class/')
    .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        throw error;
      });
}