import { Box, Flex, Text } from "@chakra-ui/react";
import MoreOption from "./moreOption";

function CodeOfFeed({ classCode }: {
    classCode?: string
}) {
    return (
        <Box display={"flex"}
            flexDirection="column"
            pb={"0.5rem"}
            border={"0.0625rem solid #dadce0"}
            borderRadius={"0.5rem"}
            mr="1.5rem"
            mb={"1.5rem"}
            p={"1rem"}
            w={"196px"}
            h={"98px"}
        >
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={"14px"}>
                    Mã lớp
                </Text>
                <MoreOption />
            </Box>
            <Box>
                <Text fontSize={"18px"} color={"rgb(23,78,166)"} overflow="hidden" textOverflow={"ellipsis"} whiteSpace="nowrap">{classCode}</Text>
            </Box>
        </Box>
    );
}

export default CodeOfFeed;