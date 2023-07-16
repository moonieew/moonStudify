import axiosClient from "../api/request"

interface createQuestionField {
    testId: string
    content: string
    type?: string
    maxPoints?: number
    answers: any
    image?: string
}

export const createQuestion = (params: createQuestionField) : Promise<any> => {
    return axiosClient.post('/question/', {
        type: "single",
        maxPoints: 1,
        image: "",
        ... params
    })
}