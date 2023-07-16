import React, { useContext } from "react"
import { createCtx } from ".";
export interface QuestionData {
    question?: string;
    anwser?: {
        correctA?: boolean
        correctB?: boolean
        correctC?: boolean
        correctD?: boolean
        answerA?: string
        answerB?: string
        answerC?: string
        answerD?: string
        idA?: string
        idB?: string
        idC?: string
        idD?: string
    }
}

type QuestionItem = {
    id: string;
    content: string;
    data?: QuestionData;

}

const initQuiz = {
    id: new Date().getTime().toString(),
    content: "Câu hỏi 1"
}

const initData: {
    quiz: QuestionItem[],
    quizSelected: QuestionItem['id'],
    settings?: {
        nameTest?: string;
        desc?: string;
        maxPoint?: number;
        timeStart?: any;
        timeEnd?: any;
        info?: any;
    }
} = {
    quiz: [initQuiz],
    quizSelected: initQuiz.id,
};

//   export type AuthTabsType = keyof typeof initData;
const [ctx, Provider] = createCtx(initData);
export const TestContext = ctx;
export const TestContextProvider = Provider;


export type {
    QuestionItem
}


export const useHandleArrQuestion = () => {
    const { state: quiz, update: setQuiz } = useContext(TestContext)

    const quizSelect = React.useMemo(() => quiz.quizSelected, [quiz.quizSelected])
    const addQuestion = () => {
        const item = { id: new Date().getTime().toString(), content: "" }
        setQuiz(prev => ({
            quiz: [...prev.quiz, item],
            quizSelected: item.id
        }))
    }
    const deleteQuestion = (id: string) => {
        setQuiz(prev => ({
            quiz: prev.quiz.filter(item => item.id !== id),
            quizSelected: prev.quiz[0].id
        }))
    }

    const setQuizSelect = (id: QuestionItem['id']) => {
        setQuiz(pre => ({
            ...pre,
            quizSelected: id
        }))
    }



    return {
        arrQuestion: quiz.quiz,
        addQuestion,
        deleteQuestion,
        quizSelect,
        setQuizSelect,
    }
}

export const useHandleAnwser = () => {
    const { state: quiz, update: setQuiz } = useContext(TestContext)
    const answerA = React.useMemo(() => {
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        return quiz.quiz?.find(item => item.id === quiz.quizSelected)?.data?.anwser?.answerA
    }, [quiz.quiz, quiz.quizSelected])

    const answerB = React.useMemo(() => {
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        return quiz.quiz?.find(item => item.id === quiz.quizSelected)?.data?.anwser?.answerB
    }, [quiz.quiz, quiz.quizSelected])

    const answerC = React.useMemo(() => {
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        return quiz.quiz?.find(item => item.id === quiz.quizSelected)?.data?.anwser?.answerC
    }, [quiz.quiz, quiz.quizSelected])

    const answerD = React.useMemo(() => {
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        return quiz.quiz?.find(item => item.id === quiz.quizSelected)?.data?.anwser?.answerD
    }, [quiz.quiz, quiz.quizSelected])

    const correctA = React.useMemo(() => {
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        return quiz.quiz?.find(item => item.id === quiz.quizSelected)?.data?.anwser?.correctA
    }, [quiz.quiz, quiz.quizSelected])

    const correctB = React.useMemo(() => {
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        return quiz.quiz?.find(item => item.id === quiz.quizSelected)?.data?.anwser?.correctB
    }, [quiz.quiz, quiz.quizSelected])

    const correctC = React.useMemo(() => {
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        return quiz.quiz?.find(item => item.id === quiz.quizSelected)?.data?.anwser?.correctC
    }, [quiz.quiz, quiz.quizSelected])

    const correctD = React.useMemo(() => {
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        return quiz.quiz?.find(item => item.id === quiz.quizSelected)?.data?.anwser?.correctD
    }, [quiz.quiz, quiz.quizSelected])

    const setAnswerA = (answerA: string) => {
        const quizSelected = quiz.quizSelected
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        const quizTemp = [...quiz.quiz]

        const index = quizTemp.findIndex(item => item.id === quizSelected)

        if (index !== -1) {
            quizTemp[index] = {
                ...quizTemp[index],
                data: {
                    ...quizTemp[index].data,
                    anwser: {
                        ...quizTemp[index].data?.anwser,
                        answerA
                    }
                }
            }
        }
        setQuiz(pre => ({
            ...pre,
            quiz: quizTemp
        }))
    }
    const setAnswerB = (answerB: string) => {
        const quizSelected = quiz.quizSelected
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        const quizTemp = [...quiz.quiz]

        const index = quizTemp.findIndex(item => item.id === quizSelected)

        if (index !== -1) {
            quizTemp[index] = {
                ...quizTemp[index],
                data: {
                    ...quizTemp[index].data,
                    anwser: {
                        ...quizTemp[index].data?.anwser,
                        answerB
                    }
                }
            }
        }
        setQuiz(pre => ({
            ...pre,
            quiz: quizTemp
        }))
    }
    const setAnswerC = (answerC: string) => {
        const quizSelected = quiz.quizSelected
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        const quizTemp = [...quiz.quiz]

        const index = quizTemp.findIndex(item => item.id === quizSelected)

        if (index !== -1) {
            quizTemp[index] = {
                ...quizTemp[index],
                data: {
                    ...quizTemp[index].data,
                    anwser: {
                        ...quizTemp[index].data?.anwser,
                        answerC
                    }
                }
            }
        }
        setQuiz(pre => ({
            ...pre,
            quiz: quizTemp
        }))
    }
    const setAnswerD = (answerD: string) => {
        const quizSelected = quiz.quizSelected
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        const quizTemp = [...quiz.quiz]

        const index = quizTemp.findIndex(item => item.id === quizSelected)

        if (index !== -1) {
            quizTemp[index] = {
                ...quizTemp[index],
                data: {
                    ...quizTemp[index].data,
                    anwser: {
                        ...quizTemp[index].data?.anwser,
                        answerD
                    }
                }
            }
        }
        setQuiz(pre => ({
            ...pre,
            quiz: quizTemp
        }))
    }
    const setCorrectB = (correctB: boolean) => {
        const quizSelected = quiz.quizSelected
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        const quizTemp = [...quiz.quiz]

        const index = quizTemp.findIndex(item => item.id === quizSelected)

        if (index !== -1) {
            quizTemp[index] = {
                ...quizTemp[index],
                data: {
                    ...quizTemp[index].data,
                    anwser: {
                        ...quizTemp[index].data?.anwser,
                        correctB
                    }
                }
            }
        }
        setQuiz(pre => ({
            ...pre,
            quiz: quizTemp
        }))
    }
    const setCorrectC = (correctC: boolean) => {
        const quizSelected = quiz.quizSelected
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        const quizTemp = [...quiz.quiz]

        const index = quizTemp.findIndex(item => item.id === quizSelected)

        if (index !== -1) {
            quizTemp[index] = {
                ...quizTemp[index],
                data: {
                    ...quizTemp[index].data,
                    anwser: {
                        ...quizTemp[index].data?.anwser,
                        correctC
                    }
                }
            }
        }
        setQuiz(pre => ({
            ...pre,
            quiz: quizTemp
        }))
    }
    const setCorrectD = (correctD: boolean) => {
        const quizSelected = quiz.quizSelected
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        const quizTemp = [...quiz.quiz]

        const index = quizTemp.findIndex(item => item.id === quizSelected)

        if (index !== -1) {
            quizTemp[index] = {
                ...quizTemp[index],
                data: {
                    ...quizTemp[index].data,
                    anwser: {
                        ...quizTemp[index].data?.anwser,
                        correctD
                    }
                }
            }
        }
        setQuiz(pre => ({
            ...pre,
            quiz: quizTemp
        }))
    }
    const setCorrectA = (correctA: boolean) => {
        const quizSelected = quiz.quizSelected
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        const quizTemp = [...quiz.quiz]

        const index = quizTemp.findIndex(item => item.id === quizSelected)

        if (index !== -1) {
            quizTemp[index] = {
                ...quizTemp[index],
                data: {
                    ...quizTemp[index].data,
                    anwser: {
                        ...quizTemp[index].data?.anwser,
                        correctA
                    }
                }
            }
        }
        setQuiz(pre => ({
            ...pre,
            quiz: quizTemp
        }))
    }
    return {
        answerA,
        answerB,
        answerC,
        answerD,

        setAnswerA,
        setAnswerB,
        setAnswerC,
        setAnswerD,

        correctA,
        correctB,
        correctC,
        correctD,

        setCorrectA,
        setCorrectB,
        setCorrectC,
        setCorrectD
    }
}

export const useHandleQuestion = () => {
    const { state: quiz, update: setQuiz } = useContext(TestContext)

    const questionData = React.useMemo(() => {
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }

        return quiz.quiz?.find(item => item.id === quiz.quizSelected)?.data?.question


    }, [quiz.quiz, quiz.quizSelected])

    const setQuestionData = (question: string) => {
        const quizSelected = quiz.quizSelected
        if (quiz.quizSelected === undefined || quiz.quizSelected === "") {
            console.error('quizSelected undefined')
        }
        const quizTemp = [...quiz.quiz]

        const index = quizTemp.findIndex(item => item.id === quizSelected)

        if (index !== -1) {
            quizTemp[index] = {
                ...quizTemp[index],
                data: {
                    question
                }
            }
        }
        setQuiz(pre => ({
            ...pre,
            quiz: quizTemp
        }))
    }

    return {
        questionData,
        setQuestionData
    }
}

export const useSettingsQuestion = () => {
    const { state: quiz, update: setQuiz } = useContext(TestContext)
    const setNameTest = (nameTest: string) => {
        setQuiz(pre => ({
            ...pre,
            settings: {
                ...pre.settings,
                nameTest
            }
        }))
    }
    const setDesc = (desc: string) => {
        setQuiz(pre => ({
            ...pre,
            settings: {
                ...pre.settings,
                desc
            }
        }))
    }
    const setTimeStart = (timeStart: string) => {
        setQuiz(pre => ({
            ...pre,
            settings: {
                ...pre.settings,
                timeStart
            }
        }))
    }
    const setTimeEnd = (timeEnd: string) => {
        setQuiz(pre => ({
            ...pre,
            settings: {
                ...pre.settings,
                timeEnd
            }
        }))
    }
    const setMaxPoint = (maxPoint: number) => {
        setQuiz(pre => ({
            ...pre,
            settings: {
                ...pre.settings,
                maxPoint
            }
        }))
    }
    const setInfo = (info: any) => {
        setQuiz(pre => ({
            ...pre,
            settings: {
                ...pre.settings,
                info
            }
        }))
    }
    const setQuizFn = (quiz: QuestionItem[]) => {
        setQuiz(pre => ({
            ...pre,
            quiz
        }))
    }


    return {
        ...quiz.settings,
        setNameTest,
        setDesc,
        setTimeStart,
        setTimeEnd,
        setMaxPoint,
        setInfo,
        setQuizFn

    }
}


