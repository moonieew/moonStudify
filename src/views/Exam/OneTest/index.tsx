
import { takeTest } from "@/common/service/taketest";
import { EditIcon } from "@chakra-ui/icons";
import { Box, IconButton, Img, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MoreOptionTest from "./MoreOptionTest";

function OneTest({ timeStart, timeEnd, nameTest, numberQuestion, maxPoint, idTest, isTeacher }: {
    timeStart: string;
    timeEnd: string;
    nameTest: string;
    numberQuestion: number;
    maxPoint: number;
    idTest: string;
    isTeacher?: boolean
}) {
    const router = useRouter();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);

        return `${date.getHours()}:${date.getMinutes()}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    const editTest = () => {
        router.push({
            pathname: "/createexam",
            query: {
                id: idTest,
                edit: true,
                idClass: router.query.id
            }
        })
    }
    const handleTakeTest = async () => {
        router.push({
            pathname: "/createexam",
            query: {
                id: idTest,
                doTest: true
            }
        })
    }
    return (
        <Box _hover={{ transform: "scale(1.04)", boxShadow: "lg" }}
            border={"2px solid rgb(255, 255, 255)"}
            borderRadius={"4px"} mt={"1.5rem"}
            boxShadow={"rgba(0, 0, 0, 0.15) 0px 2px 4px 0px"}
            display={"flex"}>
            <Img src="https://assets-cdn.kahoot.it/builder/v2/assets/teach_stud_default-ef51b1e5.jpg"
                objectFit={"cover"}
                h={"120px"}
                w={"176px"}
                px={"1rem"}
            />
            <Box w={"full"} onClick={handleTakeTest} cursor="pointer">
                <Text fontWeight={"bold"} fontSize={"1rem"} textAlign={"center"}>{nameTest}</Text>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mr={"1.5rem"}>
                    <Box>
                        <Text fontSize={"14px"} fontWeight={"500"}>Thời gian bắt đầu</Text>
                        <Text color={"rgba(0,0,0,.549)"} fontSize={"13px"}>{formatDate(timeStart)}</Text>
                        <Text fontSize={"14px"} fontWeight={"500"}>Thời gian kết thúc</Text>
                        <Text color={"rgba(0,0,0,.549)"} fontSize={"13px"}>{formatDate(timeEnd)}</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text fontSize={"14px"} fontWeight={"500"}>Điểm tối đa</Text>
                        <Text color={"rgba(0,0,0,.549)"} fontSize={"13px"}>{maxPoint}</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text fontSize={"14px"} fontWeight={"500"}>Số câu hỏi</Text>
                        <Text color={"rgba(0,0,0,.549)"} fontSize={"13px"}>{numberQuestion}</Text>
                    </Box>
                </Box>
            </Box>
            {isTeacher && (
                <Box mt={"1rem"}>
                    <IconButton
                        aria-label="More server options"
                        icon={<EditIcon boxSize={"24px"} />}
                        variant="solid"
                        w="fit-content"
                        bg={"none"}
                        onClick={editTest}
                    />
                    <MoreOptionTest />
                </Box>
            )}

        </Box>
    );
}

export default OneTest;