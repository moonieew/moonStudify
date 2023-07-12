import Exam from "@/views/Exam";
import Member from "@/views/Member";
import Newsfeed from "@/views/Newsfeed";
import { Box, Button, Container } from "@chakra-ui/react";
import { useState } from "react";

function NewsfeedPage() {
    const [step, setStep] = useState<number>(1)
    return (
        <>
            <Box w={"full"} display="flex" justifyContent="center" alignItems={"center"} position="fixed" zIndex={"100"}>
                <Box w={"30%"} borderRadius="25px" boxShadow={"0 1px 3px 1px rgba(54,64,67,0.15)"}
                    h="48px" display={"flex"} justifyContent="space-between" alignItems={"center"} px="0.8rem"
                    bg={"#f0f5ff"}
                >
                    <Button borderRadius="32px" onClick={() => setStep(1)}
                        bg={step == 1 ? "#85a5ff" : "#fff"} h="100%" _hover={{ bg: "#d6e4ff" }}>
                        Bảng tin
                    </Button>
                    <Button borderRadius="32px" onClick={() => setStep(2)}
                        h="100%" bg={step == 2 ? "#85a5ff" : "#fff"} _hover={{ bg: "#d6e4ff" }}>
                        Bài kiểm tra
                    </Button>
                    <Button borderRadius="32px" onClick={() => setStep(3)}
                        bg={step == 3 ? "#85a5ff" : "#fff"} h="100%" _hover={{ bg: "#d6e4ff" }}>
                        Mọi người
                    </Button>
                </Box>
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