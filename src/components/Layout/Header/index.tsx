import Class from "@/components/Class";
import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import Add from "./Add";
import Logo from "./Logo";
import Profile from "./Profile";
import Slidebar from "./Slidebar";
import { useRouter } from "next/router";

function Header() {
    const router = useRouter();

    const goToNewsfeed = () => {
        router.push("/class/newsfeed")
    }

    const goToMember = () => {
        router.push("/class/member")
    }

    const goToExam = () => {
        router.push("/class/exam")
    }

    return (
        <>
            <Box
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                boxShadow='lg'
                p="1rem"
            >
                <Flex justifyContent="space-between" alignItems={"center"}>
                    <HStack>
                        <Slidebar />
                        <Logo />
                    </HStack>
                    <HStack gap={6}>
                        <Box px={"24px"} onClick={goToNewsfeed} as={"button"}>Bảng tin</Box>
                        <Box px={"24px"} onClick={goToExam} as={"button"}>Bài kiểm tra</Box>
                        <Box px={"24px"} onClick={goToMember} as={"button"}>Mọi người</Box>
                    </HStack>
                    <HStack>
                        <Add />
                        <Profile />
                    </HStack>
                </Flex>
            </Box>
        </>
    );
}

export default Header;