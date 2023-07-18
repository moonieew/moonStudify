import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Flex, IconButton, Image, Input, InputGroup, InputRightElement, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, SkeletonCircle, SkeletonText, Stack, Text, useToast } from "@chakra-ui/react";
import EmptyFeed from "./EmptyFeed";
import MoreOptionFeedButton from "./MoreOptionFeedButton";
import { PostCommentIcon } from "@/components/Icon";
import CommentInput from "./CommentInput";
import { MdOutlinePeopleAlt } from "react-icons/md";
import MoreOptionCommentButton from "./MoreOptionCommentButton/MoreOptionCommentButton";
import { useEffect, useState } from "react";
import { deleteNWByTeacher, deletePost, getNewsfeedById } from "@/common/service/newsfeed";
import Comment from "./Comment";
import { getUserById } from "@/common/service/user";
import { BsThreeDotsVertical } from "react-icons/bs";

const getInfoNew = async (idArr: any) => {
    const newsfeedArr: any[] = [];
    for (let i = 0; i < idArr?.length; i++) {
        const newsfeed = await getNewsfeedById(idArr[i]);
        newsfeedArr.push(newsfeed);
    }
    return newsfeedArr;
}

const getInfoCreator = async (Arr: any) => {
    const createArr: any[] = [];
    for (let i = 0; i < Arr?.length; i++) {
        const creator = await getUserById(Arr[i].creator);
        createArr.push(creator);
    }
    return createArr;
}

const formatDate = (dateTime: string) => {
    const date = new Date(dateTime)
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
}

function Feed({ idNewsfeed }: {
    idNewsfeed: string[]
}) {
    const [news, setNews] = useState<any>([])
    const [creator, setCreator] = useState<any>([])
    const [isRefresh, setIsRefresh] = useState(false)
    const [loading, setLoading] = useState(false)
    const toast = useToast();

    const getNews = async () => {
        setLoading(true)
        const newsfeedArr = await getInfoNew(idNewsfeed)
        setNews(newsfeedArr.reverse())
        setLoading(false)
    }

    useEffect(() => {
        getNews()
    }, [idNewsfeed, isRefresh])

    useEffect(() => {
        getInfoCreator(news).then((res) => {
            setCreator(res)
        })
    }, [news])
    const onRefresh = () => {
        setIsRefresh(pre => !pre)
    }
    const nameUser = localStorage.getItem("nameUser") || "";
    const userId = localStorage.getItem("idUser") || ""
    const teacherId = localStorage.getItem("idTeacher") || ""
    const handleDeletePost = async (id: string) => {
        try {
            await deletePost(id)
            toast({
                title: "Bạn đã xoá bài đăng thành công!",
                status: "success",
                duration: 5000,
                isClosable: true
            });
            setIsRefresh(pre => !pre)
        } catch (error) {
            toast({
                title: "Đã có lỗi xảy ra!",
                status: "error",
                duration: 5000,
                isClosable: true
            });
        }
    }
    const handleDeletePostByTeacher = async (id: string) => {
        const res = await deleteNWByTeacher(id)
        if (res) {
            toast({
                title: "Bạn đã xoá bài đăng thành công!",
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
    }
    return (
        <>
            {loading && (
                <Box w={"100%"} p={"0.5rem 0"} >
                    <Box padding='6' boxShadow='lg' bg='white' mb="1.5rem">
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2' />
                    </Box>
                    <Box padding='6' boxShadow='lg' bg='white' mb="1.5rem">
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2' />
                    </Box>
                    <Box padding='6' boxShadow='lg' bg='white' mb="1.5rem">
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2' />
                    </Box>
                </Box>
            )}
            {news && news.map((item: any, index: number) => (
                <Box key={item._id} border={"0.0625rem solid #dadce0"} borderRadius={"0.5rem"} mb={"1.5rem"}>
                    <Box p={"0.5rem 0"}>
                        <Box h={"3.5rem"} pr={"0.5rem"} whiteSpace={"nowrap"}
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Box display={"flex"}>
                                <Box borderRadius={"50%"}
                                    ml={"1rem"}
                                    h={"2.5rem"}
                                    w={"2.5rem"}
                                    alignSelf={"center"}
                                    m={"0 1rem"}>
                                    <Avatar w={"100%"} h="100%" name={creator[index]?.fullname} src='https://bit.ly/broken-link' />
                                </Box>
                                <Box>
                                    <Text fontSize={"14px"} color={"#3c4043"} fontWeight={500}>
                                        {creator[index]?.fullname}
                                    </Text>
                                    <Text fontSize={"12px"} color={"#5f6368"}>
                                        {formatDate(item.updatedAt)}
                                    </Text>
                                </Box>
                            </Box>
                            <Flex justifyContent="center">
                                <Popover placement="bottom" isLazy>
                                    <PopoverTrigger>
                                        <IconButton
                                            aria-label="More server options"
                                            icon={<BsThreeDotsVertical />}
                                            variant="solid"
                                            w="fit-content"
                                            bg={"none"}
                                        />
                                    </PopoverTrigger>
                                    <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
                                        <PopoverArrow />
                                        <PopoverBody>
                                            <Stack>
                                                {userId == creator[index]?._id && (
                                                    <Button
                                                        w="194px"
                                                        variant="ghost"
                                                        justifyContent="space-between"
                                                        fontWeight="normal"
                                                        fontSize="sm"
                                                        onClick={() => handleDeletePost(item._id)}>
                                                        Xoá
                                                    </Button>
                                                )}
                                                {teacherId == userId && (
                                                    <Button
                                                        w="194px"
                                                        variant="ghost"
                                                        justifyContent="space-between"
                                                        fontWeight="normal"
                                                        fontSize="sm"
                                                        onClick={() => handleDeletePostByTeacher(item._id)}>
                                                        Xoá vì vi phạm
                                                    </Button>
                                                )}


                                                <Button
                                                    w="194px"
                                                    variant="ghost"
                                                    justifyContent="space-between"
                                                    fontWeight="normal"
                                                    fontSize="sm">
                                                    Sao chép đường liên kết
                                                </Button>
                                            </Stack>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Flex>
                        </Box>
                        <Box p={"0 1.5rem"}>
                            <Text fontSize={"13px"} mb={"1rem"}>{item.content}</Text>
                        </Box>
                    </Box>
                    {item.comments && item.comments.length > 0 && (
                        <Comment idComment={item.comments} />
                    )}
                    <Box borderTop={"0.0625rem solid #e0e0e0"} >
                        <Box p={"1rem 1.5rem"} display={"flex"} alignItems={"center"}>
                            <Avatar w={"2rem"} h="2rem" name={nameUser} mr={"1rem"} src='https://bit.ly/broken-link' />
                            <CommentInput newsfeedId={item._id} refresh={onRefresh} />
                        </Box>
                    </Box>
                </Box>
            ))}

            <EmptyFeed />
        </>
    );
}

export default Feed;