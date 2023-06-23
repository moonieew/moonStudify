
import { EditTestIcon } from "@/components/Icon";
import { EditIcon } from "@chakra-ui/icons";
import { Box, IconButton, Img, Text } from "@chakra-ui/react";
import MoreOptionTest from "./MoreOptionTest";

function OneTest() {
    return (
        <Box _hover={{ animation: "250ms ease 0ms 1 normal none running iqEhOR" }}
            border={"2px solid rgb(255, 255, 255)"}
            borderRadius={"4px"} mt={"1rem"}
            boxShadow={"rgba(0, 0, 0, 0.15) 0px 2px 4px 0px"}
            display={"flex"}>
            <Img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
                objectFit={"cover"}
                h={"120px"}
                w={"176px"}
                px={"1rem"}
            />
            <Box w={"full"}>
                <Text fontWeight={"bold"} fontSize={"1rem"} textAlign={"center"}>Tên bài kiểm tra </Text>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mr={"1.5rem"}>
                    <Box>
                        <Text fontSize={"14px"} fontWeight={"500"}>Thời gian bắt đầu</Text>
                        <Text color={"rgba(0,0,0,.549)"} fontSize={"13px"}>10:20 ngày 12-02-2023</Text>
                        <Text fontSize={"14px"} fontWeight={"500"}>Thời gian kết thúc</Text>
                        <Text color={"rgba(0,0,0,.549)"} fontSize={"13px"}>10:20 ngày 12-02-2023</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text fontSize={"14px"} fontWeight={"500"}>Thời lượng làm bài</Text>
                        <Text color={"rgba(0,0,0,.549)"} fontSize={"13px"}>1giờ</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text fontSize={"14px"} fontWeight={"500"}>Số câu hỏi</Text>
                        <Text color={"rgba(0,0,0,.549)"} fontSize={"13px"}>10</Text>
                    </Box>
                </Box>
            </Box>
            <Box mt={"1rem"}>
                <IconButton
                    aria-label="More server options"
                    icon={<EditIcon boxSize={"24px"} />}
                    variant="solid"
                    w="fit-content"
                    bg={"none"}
                />
                <MoreOptionTest />
            </Box>

        </Box>
    );
}

export default OneTest;