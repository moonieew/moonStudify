import { Box, Text } from "@chakra-ui/react";

function NotiTest() {
    return (
        <Box
            border={"0.0625rem solid #dadce0"}
            borderRadius={"0.5rem"}
            mr={"1.5rem"}
            p={"1rem"}
            w={"196px"}
        >
            <Box fontSize={"14px"} fontWeight={"500"} pb={"1rem"}>
                Sắp hết hạn
            </Box>
            <Box >
                <Text color={"rgba(0,0,0,.549)"} fontSize={"13px"}>Không có bài tập nào sắp đến hạn</Text>
                <Text textAlign={"right"} fontSize={"0.875rem"} color={"rgb(23,78,166)"}>Xem tất cả</Text>
            </Box>
        </Box>
    );
}

export default NotiTest;