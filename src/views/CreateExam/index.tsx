import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import TitleExam from "./ModalTitleExam";
import PanelQuestions from "./PanelQuestions";
import Question from "./Question";

function CreateExamPage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                        Exit
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
                    >
                        Save
                    </Button>
                </Box>
            </Box>
            <PanelQuestions />
            <Question />
            <TitleExam isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default CreateExamPage;