import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Input } from "@chakra-ui/react";
import Answer from "./Answer";

function Question() {
    return (
        <Box position={"relative"} display="flex" flexDirection="column" flex={"1 1 calc(100% - (2 * clamp(16px, 2vmin, 48px)))"}
            p="48px clamp(16px, 2vmin, 48px)" maxH={"calc(100% - (2 * clamp(16px, 2vmin, 48px)))"} ml="12rem"
        >
            <Box w={"100%"} >
                <Box w={"100%"} pb="4px" borderRadius={"0.25rem"} boxShadow="rgba(0, 0, 0, 0.15) 0px -4px 0px 0px inset">
                    <Input placeholder='Câu hỏi ...' />
                </Box>
            </Box>
            <Box p={"1.375rem 0"}>
                <Box w={"100%"} h="unset" display={"flex"} justifyContent="center" alignItems={"center"}>
                    <Box bg={"rgba(250,250,250,0.7)"} p="0 1rem" w={"100%"} h="100%" minH={"3rem"} display="flex"
                        flexDirection="column" flex={"1 1 0%"} alignItems="center" justifyContent={"center"}>
                        <Box maxW={"18.1875rem"} maxH="12.125rem" w={"100%"} h="100%" backdropFilter={"blur(12px)"}
                            borderRadius="0.25rem" boxShadow={"rgba(0, 0, 0, 0.15) 0px 2px 4px 0px"} p="0 1rem" cursor={"pointer"}
                            minH="9.875rem" minW={"14.8125rem"} display="flex" justifyContent={"center"} alignItems="center">
                            <Button w={"3rem"} h="3rem" boxShadow={"rgba(0, 0, 0, 0.15) 0px 2px 4px 0px"} >
                                <AddIcon />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} alignItems="stretch" flex={"4 1 0%"} w="100%" justifyContent={"center"} flexWrap="wrap">
                <Answer />
            </Box>
        </Box>
    );
}

export default Question;