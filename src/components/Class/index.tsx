import { deleteClass, getClass, joinClass, leaveClass } from "@/common/service/classService";
import { Avatar, Box, Button, Center, Flex, Grid, GridItem, IconButton, Image, Modal, ModalContent, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Skeleton, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react";
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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isRefresh, setIsRefresh] = useState(false)
    const [loading, setLoading] = useState(false)

    const dataClass = async () => {
        setLoading(true)
        const res: any = await getClass()
        setData(res)
        setLoading(false)
    }
    useEffect(() => {
        // Gọi API khi component được mount
        dataClass();
    }, [isRefresh]);

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
            setIsRefresh(pre => !pre)
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
            setIsRefresh(pre => !pre)
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
            setIsRefresh(pre => !pre)
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

    const goClassDetail = (id: string, joined: boolean) => {
        if (joined) {
            router.push(`/class/${id}`)
        } else {
            setIdClass(id)
            onOpen()
        }
    }

    const joinClassFromModel = async () => {
        setIsLoading(true)
        const data = await joinClass({ classId: idClass })
        if (data) {
            toast({
                title: "Bạn đã tham gia lớp học thành công!",
                status: "success",
                duration: 5000,
                isClosable: true
            });
            router.push(`/class/${idClass}`)
        } else {
            toast({
                title: "Đã có lỗi xảy ra!",
                status: "error",
                duration: 5000,
                isClosable: true
            });
        }
        onClose()
        setIsLoading(false)
    }

    return (
        <>
            {loading && (
                <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem>
                        <Skeleton w={"302px"} h="296px" border="0.0625rem solid #dadce0" borderRadius={"0.5rem"} m="1rem" />
                    </GridItem>
                    <GridItem>
                        <Skeleton w={"302px"} h="296px" border="0.0625rem solid #dadce0" borderRadius={"0.5rem"} m="1rem" />
                    </GridItem>
                    <GridItem>
                        <Skeleton w={"302px"} h="296px" border="0.0625rem solid #dadce0" borderRadius={"0.5rem"} m="1rem" />
                    </GridItem>
                    <GridItem>
                        <Skeleton w={"302px"} h="296px" border="0.0625rem solid #dadce0" borderRadius={"0.5rem"} m="1rem" />
                    </GridItem>
                </Grid>
            )}
            <Grid templateColumns="repeat(4, 1fr)">
                {
                    data && data.map((item: any) => (
                        <GridItem colSpan={1} key={item.class._id}>
                            <Box cursor="pointer" w={"302px"} h={"296px"} border="0.0625rem solid #dadce0" borderRadius={"0.5rem"} m="1rem" _hover={{ boxShadow: "lg", transform: "scale(1.04)" }}>
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
                                    <Box h={"137px"} display="flex" justifyContent={"end"} onClick={() => goClassDetail(item.class._id, item.isJoined)}>
                                        <Box h="75px" w="75px" position="absolute" m={"-42px 16px 0"}>
                                            <Avatar size={"lg"} w="100%" h={"100%"} name={item.class.teacher.fullname} src='https://bit.ly/broken-link' />
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
            <Modal
                isOpen={isOpen} onClose={onClose}
                size="sm"
            >
                <ModalOverlay />
                <ModalContent>
                    <Box p={"24px"}>
                        <Center mb="12px">
                            <Text>
                                Bạn chưa tham gia lớp học. Bạn có muốn tham gia không?
                            </Text>
                        </Center>
                        <Flex w="full">
                            <Button flex="1" mr="10px" outline="1px solid #919191" bg={"#69b1ff"} isLoading={isLoading}
                                _hover={{ bg: "#0958d9" }} onClick={joinClassFromModel}>
                                <Text color={"black"}>
                                    Tham gia ngay
                                </Text>
                            </Button>
                            <Button flex="1" variant="outline" onClick={onClose}>
                                Không
                            </Button>
                        </Flex>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Class;