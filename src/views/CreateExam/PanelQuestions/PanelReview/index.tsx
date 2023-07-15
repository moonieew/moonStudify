import { QuestionItem } from "@/context/TextContext";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
// import { QuestionItem } from "..";

function PanelReview({ deleteQuestion, item, index, selectId, isSelect }: {
    deleteQuestion: (id: string) => void;
    selectId: (item: QuestionItem) => void;
    item: QuestionItem
    index: number,
    isSelect: boolean
}) {
    const handleDelete = (id: string) => {
        deleteQuestion(id)
    }

    return (
        <Box w={"100%"} onClick={() => selectId(item)}>
            <Box p="12px 16px 12px 0" animation={"300ms ease 0s 1 normal forwards running blQnlk"}
                bg={isSelect ? "rgb(234, 244, 252)" : "#fff"} >
                <Box color={"rgb(51, 51, 51)"} fontSize="0.75rem" fontWeight={"700"} textAlign="left" ml={"2rem"} >
                    Quiz {index + 1}
                </Box>
                <Box display={"flex"} flexDirection="row" h={"calc(100% - 2rem)"}>
                    <Box onClick={() => handleDelete(item.id)} display={"flex"} flexDirection="column" justifyContent={"flex-end"} pr="0.125rem" ml={"0.5rem"} pb="0.5rem" cursor={"pointer"}>
                        <DeleteIcon color={"rgb(110, 110, 110)"} />
                    </Box>
                    <Box border={isSelect ? "1px solid #0958d9" : "none"} cursor={"grab"} h="93px" w={"calc(100% - 26px)"}
                        bg={isSelect ? "rgb(255, 255, 255)" : "#f5f5f5"} borderRadius={"0.25rem"}
                        zIndex="1" boxShadow={"transparent 0px 0px 0px 3px"} maxW="calc(100% - 26px)" ml={"0"} p="0.25rem 0.5rem"
                        color={"rgb(110, 110, 110)"} textAlign="center" fontSize={"0.75rem"}
                    >
                        {item.data?.question}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default PanelReview;