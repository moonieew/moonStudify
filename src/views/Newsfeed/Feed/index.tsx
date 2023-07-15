import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Button, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import EmptyFeed from "./EmptyFeed";
import MoreOptionFeedButton from "./MoreOptionFeedButton";
import { PostCommentIcon } from "@/components/Icon";
import CommentInput from "./CommentInput";
import { MdOutlinePeopleAlt } from "react-icons/md";
import MoreOptionCommentButton from "./MoreOptionCommentButton/MoreOptionCommentButton";
import { useEffect, useState } from "react";
import { getNewsfeedById } from "@/common/service/newsfeed";
import Comment from "./Comment";
import { getUserById } from "@/common/service/user";

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

    useEffect(() => {
        getInfoNew(idNewsfeed).then((newsfeedArr) => {
            console.log("first", newsfeedArr)
            setNews(newsfeedArr.reverse());
        });
    }, [idNewsfeed, isRefresh])

    useEffect(() => {
        getInfoCreator(news).then((res) => {
            setCreator(res)
        })
    }, [news])
    const onRefresh = () => {
        setIsRefresh(pre => !pre)
    }
    return (
        <>
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
                            <MoreOptionFeedButton />
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
                            <Image src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                                borderRadius={"50%"}
                                mr={"1rem"}
                                h={"2rem"}
                                w={"2rem"}
                                alignSelf={"auto"}
                            />
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