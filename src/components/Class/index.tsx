import { deleteClass, getClass, joinClass, leaveClass } from "@/common/service/classService";
import { Box, Button, Flex, Grid, GridItem, IconButton, Image, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Stack, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import FooterClass from "./FooterClass";

const imageArray = [
    "https://www.gstatic.com/classroom/themes/img_breakfast_thumb.jpg",
    "https://gstatic.com/classroom/themes/Honors_thumb.jpg",
    "https://gstatic.com/classroom/themes/img_graduation_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_bookclub_thumb.jpg",
    "https://gstatic.com/classroom/themes/img_code_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_reachout_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_learnlanguage_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_backtoschool_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_read_thumb.jpg"
]

const Class = () => {
    const [data, setData] = useState([]);
    const router = useRouter();
    const [idClass, setIdClass] = useState("")
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false)

    const dataClass = async () => {
        const res: any = await getClass()
        setData(res)
    }
    useEffect(() => {
        // Gọi API khi component được mount
        dataClass();
    }, []);

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        return imageArray[randomIndex];
    };

    const JoinClass = async (val: string) => {
        setIsLoading(true)
        const data = await joinClass({ classId: val })
        if (data) {
            toast({
                title: "Bạn đã tham gia lớp học thành công!",
                status: "success",
                duration: 5000,
                isClosable: true
            });
        } else {
            toast({
                title: "Đã có lỗi xảy ra!",
                status: "error",
                duration: 5000,
                isClosable: true
            });
        }
        setIsLoading(false)
    }

    const LeaveClass = async (val: string) => {
        setIsLoading(true)
        const data = await leaveClass({ classId: val })
        if (data) {
            toast({
                title: "Bạn đã huỷ đăng ký lớp học thành công!",
                status: "success",
                duration: 5000,
                isClosable: true
            });
        } else {
            toast({
                title: "Đã có lỗi xảy ra!",
                status: "error",
                duration: 5000,
                isClosable: true
            });
        }
        setIsLoading(false)
    }

    const DeleteClass = async (val: string) => {
        setIsLoading(true)
        const data = await deleteClass(val)
        if (data) {
            toast({
                title: "Bạn đã xoá lớp học thành công!",
                status: "success",
                duration: 5000,
                isClosable: true
            });
        } else {
            toast({
                title: "Đã có lỗi xảy ra!",
                status: "error",
                duration: 5000,
                isClosable: true
            });
        }
        setIsLoading(false)
    }

    return (
        <>
            <Grid templateColumns="repeat(4, 1fr)">
                {
                    data && data.map((item: any) => (
                        <GridItem colSpan={1} key={item.class._id}>
                            <Box cursor="pointer" w={"302px"} h={"296px"} border="0.0625rem solid #dadce0" borderRadius={"0.5rem"} m="1rem" _hover={{ boxShadow: "lg" }}>
                                <Box w={"100%"} h="100px" backgroundImage={getRandomImage()} display="flex" flexDirection={"column"} justifyContent="space-between" p={"1rem 1rem 0.75rem"}>
                                    <Box
                                        display={"flex"} justifyContent="space-between" alignItems={"center"} >
                                        <Text fontSize={"22px"} color="white" whiteSpace={"nowrap"} textOverflow="ellipsis" overflow={"hidden"}>
                                            {item.class.name}
                                        </Text>
                                        <Flex justifyContent="center">
                                            <Popover placement="bottom" isLazy>
                                                <PopoverTrigger>
                                                    <IconButton
                                                        aria-label="More server options"
                                                        icon={<BsThreeDotsVertical />}
                                                        bg={"none"}
                                                        color="white"
                                                    />
                                                </PopoverTrigger>
                                                <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
                                                    <PopoverArrow />
                                                    <PopoverBody>
                                                        {item.isTeacher ? (
                                                            <Stack>
                                                                <Button
                                                                    w="194px"
                                                                    variant="ghost"
                                                                    fontWeight="normal"
                                                                    fontSize="sm"
                                                                >
                                                                    Chỉnh sửa
                                                                </Button>
                                                                <Button
                                                                    w="194px"
                                                                    variant="ghost"
                                                                    fontWeight="normal"
                                                                    colorScheme="red"
                                                                    fontSize="sm"
                                                                    isLoading={isLoading}
                                                                    onClick={() => DeleteClass(item.class._id)}
                                                                >
                                                                    Xoá lớp
                                                                </Button>
                                                            </Stack>
                                                        ) : (
                                                            <Stack>
                                                                {item.isJoined ? (
                                                                    <Button
                                                                        w="194px"
                                                                        variant="ghost"
                                                                        fontWeight="normal"
                                                                        colorScheme="red"
                                                                        fontSize="sm"
                                                                        isLoading={isLoading}
                                                                        onClick={() => LeaveClass(item.class._id)}
                                                                    >
                                                                        Huỷ đăng ký
                                                                    </Button>
                                                                ) : (
                                                                    <Button
                                                                        w="194px"
                                                                        variant="ghost"
                                                                        fontWeight="normal"
                                                                        fontSize="sm"
                                                                        isLoading={isLoading}
                                                                        onClick={() => JoinClass(item.class._id)}
                                                                    >
                                                                        Tham gia lớp học
                                                                    </Button>

                                                                )}

                                                            </Stack>
                                                        )}
                                                    </PopoverBody>
                                                </PopoverContent>
                                            </Popover>
                                        </Flex>
                                    </Box>
                                    <Text fontSize={"12px"} color="#fff">{item.class.description}</Text>
                                    {item.isTeacher == false && (
                                        <Box>
                                            <Text fontSize={"13px"} color="white">{item.class.teacher.fullname}</Text>
                                        </Box>
                                    )}
                                </Box>
                                {item.isTeacher == false ? (
                                    <Box h={"137px"} display="flex" justifyContent={"end"} onClick={() => router.push(`/class/${item.class._id}`)}>
                                        <Box h="75px" w="75px" position="absolute" m={"-42px 16px 0"}>
                                            <Image src={`${item.class.teacher.avatar}`} borderRadius={"50%"} />
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box h={"137px"} onClick={() => router.push(`/class/${item.class._id}`)}></Box>
                                )}

                                <FooterClass />
                            </Box>
                        </GridItem>
                    ))
                }


            </Grid>

        </>
    );
}

export default Class;