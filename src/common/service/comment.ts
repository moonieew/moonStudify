import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "../api/request"

export const getCommentById = (id: string): Promise<any> => {
    return axiosClient.get(`/comment/?id=${id}`)
    .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {});
}