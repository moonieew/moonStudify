import axiosClient from "@/common/api/request";
import { createQuestion, updateQuestion } from "@/common/service/questions";
import { submitTest, takeTest } from "@/common/service/taketest";
import { getAllTest } from "@/common/service/textService";
import { QuestionItem, TestContext, TestContextProvider, useSettingsQuestion } from "@/context/TextContext";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import TitleExam from "./ModalTitleExam";
import PanelQuestions from "./PanelQuestions";
import Question from "./Question";

function CreateExamPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [idSelect, setIdSelect] = useState<QuestionItem>()
    const { state: quiz, update: setQuiz } = useContext(TestContext)
    const { setNameTest, setDesc, setTimeStart, setTimeEnd, setMaxPoint, setQuizFn } = useSettingsQuestion()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [idTest, setIdTest] = useState<string>("")
    const [takeTestId, setTakeTestId] = useState<string>("")

    const formatDate = (originalDate: string) => {
        const originalDateTime = new Date(originalDate);
        return originalDateTime.toISOString().slice(0, 10) + "T16:34"
    }
    const TestAll = async () => {
        const res = await getAllTest()
        const test = res.find((item: any) => item.id === router.query.id)
        setNameTest(test?.name ?? "")
        setDesc(test?.description ?? "")
        setTimeStart(test?.startTime ? formatDate(test?.startTime) : "")
        setTimeEnd(test?.endTime ? formatDate(test?.endTime) : "")
        setMaxPoint(test?.maxPoints ?? 10)
        const quizData = test?.questions.map((item: any) => {
            return {
                id: item.question._id,
                content: item.question.content,
                data: {
                    question: item.question.content,
                    anwser: {
                        answerA: item.question.answers[0].content,
                        answerB: item.question.answers[1].content,
                        answerC: item.question.answers[2].content,
                        answerD: item.question.answers[3].content,
                        correctA: item.question.answers[0].isCorrect,
                        correctB: item.question.answers[1].isCorrect,
                        correctC: item.question.answers[2].isCorrect,
                        correctD: item.question.answers[3].isCorrect,
                    }
                }
            } as QuestionItem
        })
        setQuizFn(quizData)
    }
    const doTestById = async () => {
        const res = await takeTest(router.query.id as string)
        setTakeTestId(res.takeTestId)
        setNameTest(res.test.name)
        setTimeEnd(formatDate(res.test.endTime))
        const quizData = res?.test.questions.map((item: any) => {
            return {
                id: item.id,
                content: item.content,
                data: {
                    question: item.content,
                    anwser: {
                        answerA: item.answers[0].content,
                        answerB: item.answers[1].content,
                        answerC: item.answers[2].content,
                        answerD: item.answers[3].content,
                        idA: item.answers[0].id,
                        idB: item.answers[1].id,
                        idC: item.answers[2].id,
                        idD: item.answers[3].id,
                    }
                }
            } as QuestionItem
        })
        setQuizFn(quizData)
    }
    useEffect(() => {
        if (router.query.edit) {
            TestAll()
        }
        if (router.query.doTest) {
            doTestById()
        }
    }, [router.query])

    const handleCreateQuestion = async () => {
        setIsLoading(true)
        if (router.query.edit) {
            for (const item of quiz.quiz) {
                const data = {
                    questionId: item.id,
                    content: item.content,
                    answers: [
                        {
                            id: '0',
                            content: item.data?.anwser?.answerA ? item.data?.anwser?.answerA : "",
                            isCorrect: item.data?.anwser?.correctA ? item.data.anwser.correctA : false
                        },
                        {
                            id: '1',
                            content: item.data?.anwser?.answerB ? item.data?.anwser?.answerB : "",
                            isCorrect: item.data?.anwser?.correctB ? item.data.anwser.correctB : false
                        },
                        {
                            id: '2',
                            content: item.data?.anwser?.answerC ? item.data?.anwser?.answerC : "",
                            isCorrect: item.data?.anwser?.correctC ? item.data.anwser.correctC : false
                        },
                        {
                            id: '3',
                            content: item.data?.anwser?.answerD ? item.data?.anwser?.answerD : "",
                            isCorrect: item.data?.anwser?.correctD ? item.data.anwser.correctD : false
                        }
                    ]
                }
                try {
                    await updateQuestion(data)
                } catch (err) {
                    console.error('Error editing question:', err)
                }
            }
            router.push({
                pathname: `/class/${router.query.idClass}`,
            })
        } else if (router.query.doTest) {
            const answerSheet = []
            for (const item of quiz.quiz) {
                let arrAnswer = []
                if (item.data?.anwser?.correctA === true) {
                    if (item.data.anwser.idA) {
                        arrAnswer.push(item.data.anwser.idA)
                    }
                }
                if (item.data?.anwser?.correctB === true) {
                    if (item.data.anwser.idB) {
                        arrAnswer.push(item.data.anwser.idB)
                    }
                }
                if (item.data?.anwser?.correctC === true) {
                    if (item.data.anwser.idC) {
                        arrAnswer.push(item.data.anwser.idC)
                    }
                }
                if (item.data?.anwser?.correctD === true) {
                    if (item.data.anwser.idD) {
                        arrAnswer.push(item.data.anwser.idD)
                    }
                }
                const data = {
                    question: item.id,
                    type: "single",
                    isDone: "true",
                    isFlag: "false",
                    answers: arrAnswer
                }
                answerSheet.push(data)
            }
            try {
                await submitTest({
                    answerSheet: answerSheet,
                    takeTestId: takeTestId
                })
            } catch (err) {
                console.error('Error doing question:', err)
            }
        }
        else {
            for (const item of quiz.quiz) {
                const data = {
                    testId: idTest ? idTest : "",
                    content: item.data?.question ?? "",
                    answers: [
                        {
                            id: 0,
                            content: item.data?.anwser?.answerA ? item.data?.anwser?.answerA : "",
                            isCorrect: item.data?.anwser?.correctA ? item.data.anwser.correctA : false
                        },
                        {
                            id: 1,
                            content: item.data?.anwser?.answerB ? item.data?.anwser?.answerB : "",
                            isCorrect: item.data?.anwser?.correctB ? item.data.anwser.correctB : false
                        },
                        {
                            id: 2,
                            content: item.data?.anwser?.answerC ? item.data?.anwser?.answerC : "",
                            isCorrect: item.data?.anwser?.correctC ? item.data.anwser.correctC : false
                        },
                        {
                            id: 3,
                            content: item.data?.anwser?.answerD ? item.data?.anwser?.answerD : "",
                            isCorrect: item.data?.anwser?.correctD ? item.data.anwser.correctD : false
                        }
                    ]
                }
                try {
                    await createQuestion(data)
                } catch (err) {
                    console.error('Error creating question:', err)
                }
            }
            router.push({
                pathname: `/class/${router.query.idClass}`,
            })
        }
        setIsLoading(false)

    }

    return (

        <>
            <Box h={"3.5rem"} zIndex={"10"}
                boxShadow={"rgba(0, 0, 0, 0.1) 0px 2px 4px 0px"}
                p={"0.5rem 1rem"}
                display={"flex"}
                position={"relative"}
                justifyContent={"space-between"}
            >
                <Button
                    h={"42px"}
                    borderRadius={"4px"}
                    border={"1px solid rgb(204, 204, 204)"}
                    maxW={"320px"}
                    display={"flex"}
                    bg={"rgb(255, 255, 255)"}
                    onClick={onOpen}
                >
                    <Text fontSize={"1rem"} fontWeight={700} color={"rgb(110, 110, 110)"} overflow={"hidden"} ml={"1rem"}>
                        Tên bài kiểm tra
                    </Text>
                    <Box p={"7px 13px"} ml={"12px"} mr={"0.25rem"}
                        borderRadius={"4px"}
                        bg={"rgb(242, 242, 242)"}
                        fontSize={"0.875rem"}
                        fontWeight={700}
                        color={"rgb(51, 51, 51)"}
                    >
                        Cài đặt
                    </Box>
                </Button>
                <Box>
                    <Button mr={"0.5rem"} boxShadow={"rgba(0, 0, 0, 0.15) 0px 2px 4px 0px"}
                        bg={"rgb(242, 242, 242)"}
                        color={"rgb(51, 51, 51)"}
                        borderRadius={"4px"}
                        fontSize={"0.875rem"}
                        fontWeight={"bold"}
                        minW={"42px"}
                        minH={"42px"}
                        p={"0 16px 4px"}
                    >
                        Huỷ
                    </Button>
                    <Button
                        bg={"rgb(204, 204, 204)"}
                        boxShadow={"rgba(0, 0, 0, 0.15) 0px 2px 4px 0px"}
                        color={"rgb(255, 255, 255)"}
                        borderRadius={"4px"}
                        fontSize={"0.875rem"}
                        fontWeight={"bold"}
                        minW={"42px"}
                        minH={"42px"}
                        p={"0 16px 4px"}
                        onClick={handleCreateQuestion}
                        isLoading={isLoading}
                    >
                        Lưu
                    </Button>
                </Box>
            </Box>
            <PanelQuestions />
            <Question />
            <TitleExam isOpen={isOpen} onClose={onClose} setIdTest={setIdTest} />
        </>
    );
}

export default CreateExamPage;