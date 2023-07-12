import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image, Text } from "@chakra-ui/react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import MoreOptionCommentButton from "../MoreOptionCommentButton/MoreOptionCommentButton";

function Comment({ idComment }: {
    idComment: string[]
}) {
    console.log("cmt", idComment)
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
    );
}

export default Comment;