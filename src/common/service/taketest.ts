import { AxiosError, AxiosResponse } from "axios"
import axiosClient from "../api/request"

// interface checkTestField {
//     testId: string
//     pin?: string("")
// }

// export const checkTest = (params: checkTestField) : Promise<any> => {
//     return axiosClient.post('/take-test/check-test', {
//         ...params
//     })
// }

export const takeTest = (testId: string) : Promise<any> => {
    return axiosClient.post('/take-test', {
        testId
    })
}

interface answerQuestionField {
    question: string
    type: string
    answers: string[]
    isDone: string
    isFlag: string
}

interface submitTestField {
    answerSheet: answerQuestionField[]
    takeTestId: string
}

export const submitTest = (params: submitTestField): Promise<any> => {
    return axiosClient.post('/take-test/submit-test', {
        ...params
    })
}

export const resultTakeTest = (testId: string) : Promise<any> => {
    return axiosClient.get(`/take-test/result-take-test?id=${testId}`)
    .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        return;
      });
}

export const reviewTest = (testId: string): Promise<any> => {
    return axiosClient.get(`/take-test/preview-test?id=${testId}`)
    .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        return;
      });
}