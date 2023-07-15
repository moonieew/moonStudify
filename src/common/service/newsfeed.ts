import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "../api/request"

export const getNewsfeedById = (id: string): Promise<any> => {
    return axiosClient.get(`/new-feed/?id=${id}`)
    .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {});
}

interface createPostField {
  content: string;
  attachmentLink: string;
  newFeedUrl: string;
  classId: string
}

export const createPost = (params : createPostField) : Promise<any> => {
  return axiosClient.post('/new-feed/', {
    ...params
  })
}