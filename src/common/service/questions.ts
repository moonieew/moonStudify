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
        maxPoints: 2,
        image: "",
        ... params
    })
}

interface updateQuestionField {
    questionId: string
    type?: string
    content: string
    maxPoints?: number
    answers: any
}

export const updateQuestion = (params: updateQuestionField): Promise<any> => {
    return axiosClient.put('/question/', {
        type: "single",
        maxPoints: 2,
        ...params
    })
}