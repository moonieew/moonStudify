import { Box, Button, Input } from "@chakra-ui/react";
import { BsTriangleFill } from "react-icons/bs";


function Answer() {
    return (
        <Box w={"100%"} h="100%" display={"flex"} flex="4 1 0%" flexWrap={"wrap"} >
            <Box mr={"0.5rem"} minH="4rem" p={"0 0.25rem"} alignItems="center" width={"calc(50% - 3rem)"}
                boxShadow="rgba(0, 0, 0, 0.15) 0px -0.25rem 0px 0px inset" display={"flex"} justifyContent="start" flex={"1 0 auto"}
                transition="box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s" borderRadius={"4px"} maxW="100%"
                bgColor={"rgb(255, 255, 255)"} color="rgb(204, 204, 204)" fill={"rgb(255, 255, 255)"}
            >
                <Box bgColor={"rgb(226, 27, 60)"} borderRadius="4px" h={"calc(100% - 1rem)"} margin="0 0.25rem 0.25rem"
                    transition={"box-shadow 0.2s ease 0s, background 0.2s ease 0s, opacity 0.2s ease 0s"}>
                    <Box w={"40px"} h="40px" maxW={"100%"} maxH="100%" minW={"1rem"} minH="1rem" display={"flex"} alignItems="center" justifyContent={"center"}>
                        <BsTriangleFill color="white" />
                    </Box>
                </Box>
                <Box minH={"7rem"} display="flex" w={"100%"} h="100%" maxW={"calc(100% - 3rem)"} alignItems="center">
                    <Box height={"calc(100% - 4px)"} w="100%">
                        <Input placeholder='Đáp án 1' />
                    </Box>
                    <Box bg={"transparent"} m="0 0.5rem" w={"2.875rem"} h="2.875rem" border={"0.25rem solid rgb(255, 255, 255)"}
                        boxShadow="transparent 0px 0px 0px 0.125rem, rgba(0, 0, 0, 0.35) 0px 0.125rem 0.125rem, rgba(0, 0, 0, 0.35) 0px 0px 0px 0.0625rem"
                        animation={"4.6s linear 2s infinite normal none running cXGEUf"}
                    >

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Answer;