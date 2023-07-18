import { getCommentById } from "@/common/service/comment";
import { getUserById } from "@/common/service/user";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import MoreOptionCommentButton from "../MoreOptionCommentButton/MoreOptionCommentButton";

const getInfoCmt = async (idArr: any) => {
    const cmtArr: any[] = [];
    for (let i = 0; i < idArr?.length; i++) {
        const cmt = await getCommentById(idArr[i]);
        cmtArr.push(cmt);
    }
    return cmtArr;
}

const getInfoCreator = async (Arr: any) => {
    const createArr: any[] = [];
    for (let i = 0; i < Arr?.length; i++) {
        const creator = await getUserById(Arr[i]?.creator);
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

function Comment({ idComment }: {
    idComment: string[]
}) {
    const [comment, setComment] = useState<any>([])
    const [creator, setCreator] = useState<any>([])

    useEffect(() => {
        getInfoCmt(idComment).then((newsfeedArr) => {
            setComment(newsfeedArr);
        });
    }, [idComment])

    useEffect(() => {
        getInfoCreator(comment).then((res) => {
            setCreator(res)
        })
    }, [comment])

    return (
        <Box borderTop={"0.0625rem solid #e0e0e0"}>
            <Accordion allowToggle>
                <AccordionItem borderBottomWidth="0 !important" borderTopWidth="0 !important">
                    <h2>
                        <AccordionButton>
                            <MdOutlinePeopleAlt size={"20px"} color="#5f6368" />
                            <Box as="span" flex='1' textAlign='left' fontSize={"14px"} color={"#5f6368"} ml={"0.8rem"}>
                                {`${idComment.length} nhận xét về lớp học`}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box p={"0 1.5rem"}>
                            {comment && comment.map((item: any, index: number) => (
                                <Box mb={"1rem"} display={"flex"} justifyContent={"space-between"} key={item?._id}>
                                    <Box display={"flex"}>
                                        <Box h={"2rem"}
                                            m={"0.4rem 1rem 0 0"}
                                            w={"2rem"} borderRadius={"50%"}>
                                            <Avatar w={"100%"} h="100%" name={creator[index]?.fullname} src='https://bit.ly/broken-link' />
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Box display={"flex"} alignItems={"center"}>
                                                    <Text mr={"0.5rem"} fontSize={"0.875rem"} color={"#3c4043"} fontWeight={500}>
                                                        {creator[index]?.fullname}
                                                    </Text>
                                                    <Text fontSize={"0.75rem"} color={"#5f6368"}>
                                                        {formatDate(item?.updatedAt)}
                                                    </Text>
                                                </Box>
                                            </Box>
                                            <Text fontSize={"0.875rem"} color={"#3c4043"}>
                                                {item?.content}
                                            </Text>
                                        </Box>
                                    </Box>
                                    <MoreOptionCommentButton />
                                </Box>
                            ))}


                            {/* <Box mb={"1rem"} display={"flex"} justifyContent={"space-between"}>
                                <Box display={"flex"}>
                                    <Image
                                        h={"2rem"}
                                        m={"0.4rem 1rem 0 0"}
                                        w={"2rem"}
                                        src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                                        borderRadius={"50%"}
                                    />
                                    <Box>
                                        <Box>
                                            <Box display={"flex"} alignItems={"center"}>
                                                <Text mr={"0.5rem"} fontSize={"0.875rem"} color={"#3c4043"} fontWeight={500}>
                                                    Le Thi Minh Nguyet
                                                </Text>
                                                <Text fontSize={"0.75rem"} color={"#5f6368"}>2 th 4</Text>
                                            </Box>
                                        </Box>
                                        <Text fontSize={"0.875rem"} color={"#3c4043"}>Đây là comment nè</Text>
                                    </Box>
                                </Box>
                                <MoreOptionCommentButton />
                            </Box> */}
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}

export default Comment;