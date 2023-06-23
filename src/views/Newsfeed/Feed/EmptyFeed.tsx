import { FeedIcon } from "@/components/Icon";
import { Box, Button, Text } from "@chakra-ui/react";
import { MdSettings } from 'react-icons/md'

function EmptyFeed() {
    return (
        <Box
            alignItems={"center"}
            display={"flex"}
            p={"2rem 1rem 2rem 2rem"}
            border={"0.0625rem solid #dadce0"}
            borderRadius={"0.5rem"}
        >
            <Box mr={"2.5rem"} h={"5.625rem"}>
                <FeedIcon width="100%" height="100%" />
            </Box>
            <Box>
                <Text mb={"0.5rem"} fontSize={"1.375rem"} color="rgb(23,78,166)">Đây là nơi đăng thông báo cho lớp học của bạn</Text>
                <Text fontSize={"14px"}>Sử dụng bảng tin để thông báo, đăng bài tập và trả lời câu hỏi của học viên</Text>
                <Box display={"flex"} justifyContent={"end"} mt={"0.5rem"}>
                    <Button leftIcon={<MdSettings />}
                        bg={"none"} display={"inline"}
                        border={"0.0625rem solid #dadce0"}
                        height={"36px"}
                        fontSize={"14px"}
                        fontWeight={500}
                        color={"rgb(23,78,166)"}
                        alignItems={"center"}>
                        Cài đặt luồng
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default EmptyFeed;