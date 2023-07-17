import { resultTakeTest, reviewTest } from "@/common/service/taketest";
import { getInfo } from "@/common/service/user";
import Logo from "@/components/Layout/Header/Logo";
import Profile from "@/components/Layout/Header/Profile";
import Slidebar from "@/components/Layout/Header/Slidebar";
import { Box, Button, Center, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ResultTest() {
    const [info, setInfo] = useState<any>();
    const [seeDetail, setSeeDetail] = useState(false)
    const router = useRouter()
    const [takeTestId, setTakeTestId] = useState<string>("")
    const [result, setResult] = useState<any>()
    const [review, setReview] = useState<any>()

    const infoUser = async () => {
        const res: any = await getInfo()
        setInfo(res)
    }
    useEffect(() => {
        if (router.query.id) {
            setTakeTestId(router.query.id as string)
        }
    }, [router.query])

    const getResultTest = async () => {
        const res = await resultTakeTest(takeTestId)
        setResult(res)
    }

    const getReviewTest = async () => {
        const res = await reviewTest(takeTestId)
        setReview(res)
    }

    useEffect(() => {
        getResultTest()
        getReviewTest()
    }, [takeTestId])

    useEffect(() => {
        infoUser();
    }, [])

    const answerCorrect = (arr: any) => {
        let result = ""
        arr.map((item: any) => {
            if (item.isCorrect) {
                result = result.concat(item.content, "; ")
            }
        })
        return result
    }

    const answerChoose = (arrCorrect: any, arrChoose: any) => {
        const arrResult = arrCorrect.filter((item: any) => arrChoose.includes(item._id))
        let result = ""
        arrResult.map((item: any) => {
            result = result.concat(item.content, "; ")
        })
        return result
    }

    return (
        <>
            <Box
                // borderBottomWidth="1px"
                boxShadow='lg'
                px="1rem"
                h={"64px"}
                position="fixed"
                w={"100%"}
                zIndex="100"
                bg={"#fff"}
            >
                <Flex justifyContent="space-between" alignItems={"center"} w="100%" h={"100%"}>
                    <HStack>
                        {info && <Slidebar />}
                        <Logo />
                    </HStack>
                    <Button bg={"none"} _hover={{ bg: "#bae0ff" }}>Trở về lớp học</Button>
                    <HStack>
                        <Profile info={info} setInfoUser={() => setInfo(null)} />
                    </HStack>
                </Flex>
            </Box>
            <Container maxW={"4xl"}>
                <Box h={"68px"} />
                <Center fontSize={"30px"} my="1rem">
                    Kết quả bài kiểm tra
                </Center>
                <Box display={"flex"} justifyContent="space-between" mx={"5rem"} my="1rem">
                    <Text fontSize={"20px"} fontWeight="bold">Tên bài kiểm tra:</Text>
                    <Text fontSize={"20px"}>{result?.name}</Text>
                </Box>
                {/* <Box display={"flex"} justifyContent="space-between" mx={"5rem"} my="1rem">
                    <Text fontSize={"20px"} fontWeight="bold">Số lần làm bài:</Text>
                    <Text fontSize={"20px"}>2</Text>
                </Box> */}
                <Box display={"flex"} justifyContent="space-between" mx={"5rem"} my="1rem">
                    <Text fontSize={"20px"} fontWeight="bold">Điểm số</Text>
                    <Text fontSize={"20px"}>{result?.points}</Text>
                </Box>
                <Button bg={"#69b1ff"} _hover={{ bg: "#0958d9" }} color="#fff"
                    onClick={() => setSeeDetail(!seeDetail)}>
                    Xem kết quả chi tiết
                </Button>
                {seeDetail && (
                    <Box mt={"1rem"}>
                        <Box display={"flex"} border="1px solid #bae0ff" p={"0.5rem"} borderRadius="4px" textAlign={"center"}>
                            <Box w={"10%"} fontSize="18px" fontWeight={"bold"}>Câu</Box>
                            <Box w={"40%"} fontSize="18px" fontWeight={"bold"}>Đáp án đã chọn</Box>
                            <Box w={"40%"} fontSize="18px" fontWeight={"bold"}>Đáp án đúng</Box>
                            <Box w={"10%"} fontSize="18px" fontWeight={"bold"}>Điểm</Box>
                        </Box>
                        {review && review.questions && review.questions.map((item: any, index: number) => (
                            <Box key={item._id} display={"flex"} p={"0.5rem"} textAlign={"center"} border="1px solid #bae0ff">
                                <Box w={"10%"} fontSize="18px" >
                                    {index + 1}
                                </Box>
                                <Box w={"40%"} fontSize="18px" >{answerChoose(item.answers, item.choose)}</Box>
                                <Box w={"40%"} fontSize="18px" >{answerCorrect(item.answers)}</Box>
                                <Box w={"10%"} fontSize="18px" >{item?.point}</Box>
                            </Box>
                        ))}
                    </Box>
                )}
            </Container>
        </>
    );
}

export default ResultTest;