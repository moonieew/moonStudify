import { DeleteIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

function PanelReview() {
    return (
        <Box w={"100%"} >
            <Box p="12px 16px 12px 0" animation={"300ms ease 0s 1 normal forwards running blQnlk"} bg="rgb(234, 244, 252)">
                <Box color={"rgb(51, 51, 51)"} fontSize="0.75rem" fontWeight={"700"} textAlign="left" ml={"2rem"} >
                    1 Quiz
                </Box>
                <Box display={"flex"} flexDirection="row" h={"calc(100% - 2rem)"}>
                    <Box display={"flex"} flexDirection="column" justifyContent={"flex-end"} pr="0.125rem" ml={"0.5rem"} pb="0.5rem">
                        <DeleteIcon color={"rgb(110, 110, 110)"} />
                    </Box>
                    <Box cursor={"grab"} h="93px" w={"calc(100% - 26px)"} bg="rgb(255, 255, 255)" borderRadius={"0.25rem"}
                        zIndex="1" boxShadow={"transparent 0px 0px 0px 3px"} maxW="calc(100% - 26px)" ml={"0"} p="0.25rem 0.5rem"
                        color={"rgb(110, 110, 110)"} textAlign="center" fontSize={"0.75rem"}
                    >
                        Câu hỏi
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default PanelReview;