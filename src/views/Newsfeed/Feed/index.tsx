import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import EmptyFeed from "./EmptyFeed";
import MoreOptionFeedButton from "./MoreOptionFeedButton";
import { PostCommentIcon } from "@/components/Icon";
import CommentInput from "./CommentInput";
import { MdOutlinePeopleAlt } from "react-icons/md";
import MoreOptionCommentButton from "./MoreOptionCommentButton/MoreOptionCommentButton";
import { useState } from "react";

function Feed() {
    const [content, setContent] = useState('');

    const handleEditorChange = (value: string) => {
        setContent(value);
    };
    return (
        <>
            <Box border={"0.0625rem solid #dadce0"} borderRadius={"0.5rem"} my={"1.5rem"}>
                <Box p={"0.5rem 0"}>
                    <Box h={"3.5rem"} pr={"0.5rem"} whiteSpace={"nowrap"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Box display={"flex"}>
                            <Image src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                                borderRadius={"50%"}
                                ml={"1rem"}
                                h={"2.5rem"}
                                w={"2.5rem"}
                                alignSelf={"center"}
                                m={"0 1rem"}
                            />
                            <Box>
                                <Text fontSize={"14px"} color={"#3c4043"} fontWeight={500}>Le Thi Minh Nguyet</Text>
                                <Text fontSize={"12px"} color={"#5f6368"}>2 th 4</Text>
                            </Box>
                        </Box>
                        <MoreOptionFeedButton />
                    </Box>
                    <Box p={"0 1.5rem"}>
                        <Text fontSize={"13px"} mb={"1rem"}> Đây là chỗ hiện thông báo nè</Text>
                    </Box>
                </Box>
                <Box borderTop={"0.0625rem solid #e0e0e0"} >
                    <Box p={"1rem 1.5rem"} display={"flex"} alignItems={"center"}>
                        <Image src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                            borderRadius={"50%"}
                            mr={"1rem"}
                            h={"2rem"}
                            w={"2rem"}
                            alignSelf={"auto"}
                        />
                        <CommentInput />
                    </Box>
                </Box>
            </Box>

            <Box border={"0.0625rem solid #dadce0"} borderRadius={"0.5rem"} mb={"1.5rem"}>
                <Box p={"0.5rem 0"}>
                    <Box h={"3.5rem"} pr={"0.5rem"} whiteSpace={"nowrap"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Box display={"flex"}>
                            <Image src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                                borderRadius={"50%"}
                                ml={"1rem"}
                                h={"2.5rem"}
                                w={"2.5rem"}
                                alignSelf={"center"}
                                m={"0 1rem"}
                            />
                            <Box>
                                <Text fontSize={"14px"} color={"#3c4043"} fontWeight={500}>Le Thi Minh Nguyet</Text>
                                <Text fontSize={"12px"} color={"#5f6368"}>2 th 4</Text>
                            </Box>
                        </Box>
                        <MoreOptionFeedButton />
                    </Box>
                    <Box p={"0 1.5rem"}>
                        <Text fontSize={"13px"} mb={"1rem"}> Đây là chỗ hiện thông báo có comment nè</Text>
                    </Box>
                </Box>
                <Box borderTop={"0.0625rem solid #e0e0e0"}>
                    <Accordion allowToggle>
                        <AccordionItem borderBottomWidth="0 !important" borderTopWidth="0 !important">
                            <h2>
                                <AccordionButton>
                                    <MdOutlinePeopleAlt size={"20px"} color="#5f6368" />
                                    <Box as="span" flex='1' textAlign='left' fontSize={"14px"} color={"#5f6368"} ml={"0.8rem"}>
                                        2 nhận xét về lớp học
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box p={"0 1.5rem"}>
                                    <Box mb={"1rem"} display={"flex"} justifyContent={"space-between"}>
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
                                    </Box>

                                    <Box mb={"1rem"} display={"flex"} justifyContent={"space-between"}>
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
                                    </Box>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                <Box borderTop={"0.0625rem solid #e0e0e0"} >
                    <Box p={"1rem 1.5rem"} display={"flex"} alignItems={"center"}>
                        <Image src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                            borderRadius={"50%"}
                            mr={"1rem"}
                            h={"2rem"}
                            w={"2rem"}
                            alignSelf={"auto"}
                        />
                        <CommentInput />
                    </Box>
                </Box>
            </Box>
            <EmptyFeed />
        </>
    );
}

export default Feed;