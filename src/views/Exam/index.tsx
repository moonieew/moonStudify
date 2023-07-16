import { ExamIcon } from "@/components/Icon";
import { Box, Button, Container, Img, Text } from "@chakra-ui/react";
import OneTest from "./OneTest";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getClassById } from "@/common/service/classService";
import { getTestByClassId } from "@/common/service/textService";

function Exam() {
    const router = useRouter();
    const [data, setData] = useState<any>()
    const [test, setTest] = useState<any>([])

    const getInfoClass = async () => {
        const dataClass = await getClassById(router.query.id as string)
        setData(dataClass)
    }

    const getTest = async () => {
        const dataTest = await getTestByClassId(router.query.id as string)
        setTest(dataTest.tests)
    }

    useEffect(() => {
        // getInfoClass()
        getTest()
    }, [router.query.id])

    const goToCreateExam = () => {
        console.log('router.query', router.query)
        router.push({
            pathname: "/createexam",
            query: {
                id: router.query.id
            }
        })
    }

    return (
        <Container maxW={"5xl"}>
            <Box h={"68px"} />
            <Box
                onClick={goToCreateExam}
                as={"button"}
                mt={"1rem"}
                display={"flex"}
                bg={"rgb(19, 104, 206)"}
                p={"0.5rem"}
                borderRadius={"4px"}
                boxShadow={"rgba(0, 0, 0, 0.25) 0px -2px inset"}
                minH={"30px"}
                _hover={{ minH: "29px", bg: "rgb(18, 96, 190)", boxShadow: "rgba(0, 0, 0, 0.25) 0px -1px inset" }}
            >
                <Img w={"50px"} h={"30px"} src="https://assets-cdn.kahoot.it/builder/v2/assets/quiz-illustration-e68cb765.svg" />
                <Text color={"#fff"}>Tạo bài kiểm tra</Text>
            </Box>
            {test && test.map((item: any) => (
                <OneTest key={item.id} nameTest={item.name} timeStart={item.startTime} timeEnd={item.endTime}
                    maxPoint={item.maxPoints} numberQuestion={item.questions.length} />
            ))}
            <Box w={"205px"} h={"115px"} mx="auto">
                <ExamIcon />
                <Text mx={"auto"} fontSize={"14px"} color={"#3c4043"} fontWeight={500}>Đây là nơi giao bài kiểm tra</Text>
            </Box>
        </Container>
    );
}

export default Exam;