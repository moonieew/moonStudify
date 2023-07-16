import { getInfo } from "@/common/service/user";
import Logo from "@/components/Layout/Header/Logo";
import Profile from "@/components/Layout/Header/Profile";
import Slidebar from "@/components/Layout/Header/Slidebar";
import Exam from "@/views/Exam";
import Member from "@/views/Member";
import Newsfeed from "@/views/Newsfeed";
import { Box, Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function NewsfeedPage() {
    const [step, setStep] = useState<number>(2)
    const [info, setInfo] = useState<any>();

    const infoUser = async () => {
        const res: any = await getInfo()
        setInfo(res)
    }
    useEffect(() => {
        infoUser();
    }, [])
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
                        {/* <Text>{data.name}</Text> */}
                        <Logo />
                    </HStack>
                    <Flex h={"100%"} alignItems="center">
                        <Box h="100%" cursor={"pointer"} px="24px" _hover={{ bg: "#91caff" }} display="flex"
                            justifyContent={"center"} alignItems="center" color={step == 1 ? "#002c8c" : "#141414"}
                            borderBottom={step == 1 ? "2px" : "none"}
                            onClick={() => setStep(1)}>
                            Bảng tin
                        </Box>
                        <Box h="100%" cursor={"pointer"} px="24px" _hover={{ bg: "#91caff" }} display="flex"
                            justifyContent={"center"} alignItems="center" color={step == 2 ? "#002c8c" : "#141414"}
                            borderBottom={step == 2 ? "2px" : "none"}
                            onClick={() => setStep(2)}>
                            Bài kiểm tra
                        </Box>
                        <Box h="100%" cursor={"pointer"} px="24px" _hover={{ bg: "#91caff" }} display="flex"
                            justifyContent={"center"} alignItems="center" color={step == 3 ? "#002c8c" : "#141414"}
                            borderBottom={step == 3 ? "2px" : "none"}
                            onClick={() => setStep(3)}>
                            Mọi người
                        </Box>
                    </Flex>
                    <HStack>
                        <Profile info={info} setInfoUser={() => setInfo(null)} />
                    </HStack>
                </Flex>
            </Box>
            {step == 1 && (
                <Newsfeed />
            )}
            {step == 2 && (
                <Exam />
            )}
            {step == 3 && (
                <Member />
            )}
        </>
    );
}

export default NewsfeedPage;