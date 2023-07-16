import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "../api/request"

export const getTestByClassId = (id: string) : Promise<any> => {
    return axiosClient.get(`/test/by-class-id?id=${id}`)
    .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {});
}

interface createTestField {
    classId: string
    name: string
    creatorId: string
    description: string
    pin?: string
    startTime: string
    endTime: string
    numberofQuestions: number
    viewPoint?: string
    viewAnswer?: string
    attemptsAllowed?: number
    maxPoints: number
    typeofPoint?: string
    maxTimes?: number
    tracking?: boolean
    shuffle?: boolean
    status?: string
    toPass?: number
    questions: any
    slug?: number 
}

export const createTest = (params: createTestField) : Promise<any> => {
    return axiosClient.post('/test/', {
        pin: "",
        viewPoint: "done",
        viewAnswer: "done",
        attemptsAllowed: 4,
        typeofPoint: "max",
        maxTimes: "30",
        tracking: false,
        shuffle: false,
        status: "public",
        toPass: 5,
        slug: 0,
        ...params
    })
}

export const getAllTest = () : Promise<any> => {
    return axiosClient.get('/test/all')
    .then((response: AxiosResponse) => {
        return response;
      })
    .catch((error: AxiosError) => {});
}

interface updateTestField {
    classId: string
    name: string
    creatorId: string
    description: string
    pin?: string
    startTime: string
    endTime: string
    numberofQuestions: number
    viewPoint?: string
    viewAnswer?: string
    attemptsAllowed?: number
    maxPoints: number
    typeofPoint?: string
    maxTimes?: number
    tracking?: boolean
    shuffle?: boolean
    status?: string
    toPass?: number
    questions: any
    slug?: number 
    testId: string
}

export const updateTest = (params: updateTestField): Promise<any> =>{
    return axiosClient.put('/test/', {
        pin: "",
        viewPoint: "done",
        viewAnswer: "done",
        attemptsAllowed: 4,
        typeofPoint: "max",
        maxTimes: "30",
        tracking: false,
        shuffle: false,
        status: "public",
        toPass: 5,
        slug: 0,
        ...params,
    })
}