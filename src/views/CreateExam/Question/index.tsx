import { QuestionItem, useHandleArrQuestion, useHandleQuestion } from "@/context/TextContext";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Answer from "./Answer";



function Question() {
    // const [question, setQuestion] = useState("")
    const { questionData: question, setQuestionData: setQuestion } = useHandleQuestion()
    console.log('question123', question);

    // useEffect(() => {
    //     if (question !== questionData) {
    //         setQuestion(questionData ?? "")
    //     }
    // }, [questionData])
    return (
        <Box position={"relative"} display="flex" flexDirection="column" flex={"1 1 calc(100% - (2 * clamp(16px, 2vmin, 48px)))"}
            p="48px clamp(16px, 2vmin, 48px)" maxH={"calc(100% - (2 * clamp(16px, 2vmin, 48px)))"} ml="12rem"
        >
            <Box w={"100%"} >
                <Box w={"100%"} pb="4px" borderRadius={"0.25rem"} boxShadow="rgba(0, 0, 0, 0.15) 0px -4px 0px 0px inset">
                    <Input placeholder='Câu hỏi ...' value={question ?? ''} onChange={e => setQuestion(e.target.value)} />
                </Box>
            </Box>
            {/* <Box p={"1.375rem 0"}>
                <Box w={"100%"} h="unset" display={"flex"} justifyContent="center" alignItems={"center"}>
                    <Box bg={"rgba(250,250,250,0.7)"} p="0 1rem" w={"100%"} h="100%" minH={"3rem"} display="flex"
                        flexDirection="column" flex={"1 1 0%"} alignItems="center" justifyContent={"center"}>
                        
                    </Box>
                </Box>
            </Box> */}
            <Box display={"flex"} alignItems="stretch" flex={"4 1 0%"} w="100%" justifyContent={"center"} flexWrap="wrap">
                <Answer />
            </Box>
        </Box>
    );
}

export default Question;