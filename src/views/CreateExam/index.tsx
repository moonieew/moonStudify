import axiosClient from "@/common/api/request";
import { createQuestion } from "@/common/service/questions";
import { QuestionItem, TestContext, TestContextProvider } from "@/context/TextContext";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import TitleExam from "./ModalTitleExam";
import PanelQuestions from "./PanelQuestions";
import Question from "./Question";

function CreateExamPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [idSelect, setIdSelect] = useState<QuestionItem>()
    const { state: quiz, update: setQuiz } = useContext(TestContext)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [idTest, setIdTest] = useState<string>("")

    const handleCreateQuestion = async () => {
        setIsLoading(true)
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
        setIsLoading(false)
        router.push({
            pathname: "/class",
            query: {
                id: router.query.id
            }
        })
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