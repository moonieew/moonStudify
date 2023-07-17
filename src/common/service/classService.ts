import axios, { AxiosError, AxiosResponse } from "axios";
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

export const getClassJoined = (): Promise<any> => {
  return axiosClient
  .get('/class/by-user-id')
  .then((response: AxiosResponse) => {
      return response;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export const getClassCreate = (): Promise<any> => {
  return axiosClient
  .get('/class/teacher')
  .then((response: AxiosResponse) => {
      return response;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

interface createClassField {
  classCode: string;
  description: string;
  name: string;
}

export const createClas = (params: createClassField): Promise<any> => {
  return axiosClient.post('/class/', {
    ...params
  })
}

interface idClass {
  classId: string
}

export const joinClass = (params: idClass) : Promise<any> => {
  return axiosClient.post('/class/join', {
    ...params
  })
}

export const leaveClass = (params: idClass) : Promise<any> => {
  return axiosClient.post('/class/leave', {
    ...params
  })
}

export const deleteClass = (classId: string) : Promise<any> => {
  return axiosClient.delete(`/class/?classId=${classId}`)
  .then((response: AxiosResponse) => {
    return response;
  })
  .catch((error: AxiosError) => {
    return;
  });
}

export const getClassById = (classId: string) : Promise<any> => {
  return axiosClient.get(`class/by-id?id=${classId}`)
  .then((response: AxiosResponse) => {
    return response;
  })
  .catch((error: AxiosError) => {});
}

interface removeStudentField {
  studentId: string
  classId: string
}

export const removeStudent = (params: removeStudentField):Promise<any> => {
  return axios({
    method: 'post',
    url: 'https://be-moon-studify.vercel.app/api/class/remove-student',
    headers: {
      'X-HTTP-Method-Override': 'DELETE',
      'Content-Type': 'application/json',
    },
    data: {
      ...params
    },
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      // Xử lý lỗi
    });
}


