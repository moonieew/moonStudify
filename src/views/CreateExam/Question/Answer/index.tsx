import { useHandleAnwser } from "@/context/TextContext";
import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { BsFillSquareFill, BsTriangleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { MdPentagon } from "react-icons/md";
import { TbPentagon } from "react-icons/tb"


function Answer() {
    const { answerA,
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
    } = useHandleAnwser()



    return (
        <Box w={"100%"} h="100%" display={"flex"} flex="4 1 0%" flexWrap={"wrap"} >
            <Box mr={"0.5rem"} minH="4rem" p={"0 0.25rem"} alignItems="center" width={"calc(50% - 3rem)"}
                boxShadow="rgba(0, 0, 0, 0.15) 0px -0.25rem 0px 0px inset" display={"flex"} justifyContent="start" flex={"1 0 auto"}
                transition="box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s" borderRadius={"4px"} maxW="100%"
                bgColor={answerA ? "rgb(226, 27, 60)" : "rgb(255, 255, 255)"} color="rgb(204, 204, 204)" fill={"rgb(255, 255, 255)"} mt="2rem" mx={"0.5rem"}
            >
                <Box bgColor={"rgb(226, 27, 60)"} borderRadius="4px" h={"calc(100% - 1rem)"} margin="0 0.25rem 0.25rem"
                    transition={"box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s"}
                    display="flex" alignItems={"center"}>
                    <Box w={"40px"} h="40px" maxW={"100%"} maxH="100%" minW={"1rem"} minH="1rem" display={"flex"} alignItems="center" justifyContent={"center"}>
                        <BsTriangleFill color="white" />
                    </Box>
                </Box>
                <Box minH={"7rem"} display="flex" w={"100%"} h="100%" maxW={"calc(100% - 3rem)"} alignItems="center">
                    <Box w="100%" color={"#fff"}>
                        <Input placeholder='Đáp án 1' value={answerA ?? ""}
                            onChange={(e) => setAnswerA(e.target.value)} focusBorderColor={'transparent'} />
                    </Box>
                    <Box bg={correctA ? "#52c41a" : "transparent"} m="0 0.5rem" w={"2.875rem"} h="2.875rem" border={"0.25rem solid rgb(255, 255, 255)"}
                        boxShadow="transparent 0px 0px 0px 0.125rem, rgba(0, 0, 0, 0.35) 0px 0.125rem 0.125rem, rgba(0, 0, 0, 0.35) 0px 0px 0px 0.0625rem"
                        borderRadius={"50%"}
                        display="flex" justifyContent={"center"} alignItems="center" cursor={"pointer"}
                        onClick={() => setCorrectA(!correctA)}
                    >
                        <CheckIcon bgSize={"30px"} color="#fff" />
                    </Box>
                </Box>
            </Box>
            <Box mr={"0.5rem"} minH="4rem" p={"0 0.25rem"} alignItems="center" width={"calc(50% - 3rem)"}
                boxShadow="rgba(0, 0, 0, 0.15) 0px -0.25rem 0px 0px inset" display={"flex"} justifyContent="start" flex={"1 0 auto"}
                transition="box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s" borderRadius={"4px"} maxW="100%"
                bgColor={answerB ? "rgb(19, 104, 206)" : "rgb(255, 255, 255)"} color="rgb(204, 204, 204)" fill={"rgb(255, 255, 255)"} mt="2rem" mx={"0.5rem"}
            >
                <Box bgColor={"rgb(19, 104, 206)"} borderRadius="4px" h={"calc(100% - 1rem)"} margin="0 0.25rem 0.25rem"
                    transition={"box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s"}
                    display="flex" alignItems={"center"}>
                    <Box w={"40px"} h="40px" maxW={"100%"} maxH="100%" minW={"1rem"} minH="1rem" display={"flex"} alignItems="center" justifyContent={"center"}>
                        <MdPentagon color="white" />
                    </Box>
                </Box>
                <Box minH={"7rem"} display="flex" w={"100%"} h="100%" maxW={"calc(100% - 3rem)"} alignItems="center">
                    <Box w="100%" color={"#fff"}>
                        <Input placeholder='Đáp án 2' value={answerB ?? ""}
                            onChange={(e) => setAnswerB(e.target.value)} focusBorderColor={'transparent'} />
                    </Box>
                    <Box bg={correctB ? "#52c41a" : "transparent"} m="0 0.5rem" w={"2.875rem"} h="2.875rem" border={"0.25rem solid rgb(255, 255, 255)"}
                        boxShadow="transparent 0px 0px 0px 0.125rem, rgba(0, 0, 0, 0.35) 0px 0.125rem 0.125rem, rgba(0, 0, 0, 0.35) 0px 0px 0px 0.0625rem"
                        borderRadius={"50%"}
                        display="flex" justifyContent={"center"} alignItems="center" cursor={"pointer"}
                        onClick={() => setCorrectB(!correctB)}
                    >
                        <CheckIcon bgSize={"30px"} color="#fff" />
                    </Box>
                </Box>

            </Box>
            <Box mr={"0.5rem"} minH="4rem" p={"0 0.25rem"} alignItems="center" width={"calc(50% - 3rem)"}
                boxShadow="rgba(0, 0, 0, 0.15) 0px -0.25rem 0px 0px inset" display={"flex"} justifyContent="start" flex={"1 0 auto"}
                transition="box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s" borderRadius={"4px"} maxW="100%"
                bgColor={answerC ? "rgb(216, 158, 0)" : "rgb(255, 255, 255)"} color="rgb(204, 204, 204)" fill={"rgb(255, 255, 255)"} mt="2rem" mx={"0.5rem"}
            >
                <Box bgColor={"rgb(216, 158, 0)"} borderRadius="4px" h={"calc(100% - 1rem)"} margin="0 0.25rem 0.25rem"
                    transition={"box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s"}
                    display="flex" alignItems={"center"}>
                    <Box w={"40px"} h="40px" maxW={"100%"} maxH="100%" minW={"1rem"} minH="1rem" display={"flex"} alignItems="center" justifyContent={"center"}>
                        <FaCircle color="white" />
                    </Box>
                </Box>
                <Box minH={"7rem"} display="flex" w={"100%"} h="100%" maxW={"calc(100% - 3rem)"} alignItems="center">
                    <Box w="100%" color={"#fff"}>
                        <Input placeholder='Đáp án 3' value={answerC ?? ""}
                            onChange={(e) => setAnswerC(e.target.value)} focusBorderColor={'transparent'} />
                    </Box>
                    <Box bg={correctC ? "#52c41a" : "transparent"} m="0 0.5rem" w={"2.875rem"} h="2.875rem" border={"0.25rem solid rgb(255, 255, 255)"}
                        boxShadow="transparent 0px 0px 0px 0.125rem, rgba(0, 0, 0, 0.35) 0px 0.125rem 0.125rem, rgba(0, 0, 0, 0.35) 0px 0px 0px 0.0625rem"
                        borderRadius={"50%"}
                        display="flex" justifyContent={"center"} alignItems="center" cursor={"pointer"}
                        onClick={() => setCorrectC(!correctC)}
                    >
                        <CheckIcon bgSize={"30px"} color="#fff" />
                    </Box>
                </Box>

            </Box>
            <Box mr={"0.5rem"} minH="4rem" p={"0 0.25rem"} alignItems="center" width={"calc(50% - 3rem)"}
                boxShadow="rgba(0, 0, 0, 0.15) 0px -0.25rem 0px 0px inset" display={"flex"} justifyContent="start" flex={"1 0 auto"}
                transition="box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s" borderRadius={"4px"} maxW="100%"
                bgColor={answerD ? "rgb(38, 137, 12)" : "rgb(255, 255, 255)"} color="rgb(204, 204, 204)" fill={"rgb(255, 255, 255)"} mt="2rem" mx={"0.5rem"}
            >
                <Box bgColor={"rgb(38, 137, 12)"} borderRadius="4px" h={"calc(100% - 1rem)"} margin="0 0.25rem 0.25rem"
                    transition={"box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s"}
                    display="flex" alignItems={"center"}>
                    <Box w={"40px"} h="40px" maxW={"100%"} maxH="100%" minW={"1rem"} minH="1rem" display={"flex"} alignItems="center" justifyContent={"center"}>
                        <BsFillSquareFill color="white" />
                    </Box>
                </Box>
                <Box minH={"7rem"} display="flex" w={"100%"} h="100%" maxW={"calc(100% - 3rem)"} alignItems="center">
                    <Box w="100%" color={"#fff"}>
                        <Input placeholder='Đáp án 4' value={answerD ?? ""}
                            onChange={(e) => setAnswerD(e.target.value)} focusBorderColor={'transparent'} />
                    </Box>
                    <Box bg={correctD ? "#52c41a" : "transparent"} m="0 0.5rem" w={"2.875rem"} h="2.875rem" border={"0.25rem solid rgb(255, 255, 255)"}
                        boxShadow="transparent 0px 0px 0px 0.125rem, rgba(0, 0, 0, 0.35) 0px 0.125rem 0.125rem, rgba(0, 0, 0, 0.35) 0px 0px 0px 0.0625rem"
                        borderRadius={"50%"}
                        display="flex" justifyContent={"center"} alignItems="center" cursor={"pointer"}
                        onClick={() => setCorrectD(!correctD)}
                    >
                        <CheckIcon bgSize={"30px"} color="#fff" />
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}

export default Answer;