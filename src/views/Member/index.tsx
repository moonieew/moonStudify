import { Box, Checkbox, Container, Image, Text, useDisclosure } from "@chakra-ui/react";
import { MdPersonAddAlt, MdSortByAlpha } from "react-icons/md";
import MoreOptionMember from "./MoreOptionMember";
import AddMember from "./AddMember";

function Member() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box maxW={"47.5rem"} margin={"0 auto"} p={"1.5rem 1.5rem"}>
                <Box mb={"2rem"}>
                    <Box borderBottom={"1px solid rgb(25,103,210)"} mb={"0.25rem"} pl={"1rem"} h={"4.5rem"}>
                        <Text fontSize={"2rem"} color={"rgb(23,78,166)"}>Giáo viên</Text>
                    </Box>
                    <Box display={"flex"} p={"0.5rem"} alignItems={"center"}>
                        <Image src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                            borderRadius={"50%"}
                            h={"32px"}
                            w={"32px"}
                            mr={"1rem"}
                        />
                        <Text fontSize={"0.875rem"} color={"#3c4043"} fontWeight={500}>
                            Le Thi Minh Nguyet
                        </Text>
                    </Box>
                </Box>

                <Box>
                    <Box borderBottom={"1px solid rgb(25,103,210)"}
                        mb={"1rem"} pl={"1rem"}
                        h={"4.5rem"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Text color={"rgb(23,78,166)"} fontSize={"2rem"}>
                            Sinh viên
                        </Text>
                        <Box display={"flex"} alignItems={"center"}>
                            <Text fontSize={"0.875rem"} fontWeight={500} color={"rgb(23,78,166)"} pr={"1.5rem"}>
                                1 sinh viên
                            </Text>
                            <MdPersonAddAlt color="rgb(23,78,166)" size={"24"} onClick={onOpen} />
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"end"}>
                        <MdSortByAlpha size={"25"} />
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Checkbox defaultChecked>
                            <Box display={"flex"} p={"0.5rem"} alignItems={"center"}>
                                <Image src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                                    borderRadius={"50%"}
                                    h={"32px"}
                                    w={"32px"}
                                    mr={"1rem"}
                                />
                                <Text fontSize={"0.875rem"} color={"#3c4043"} fontWeight={500}>
                                    Minh Nguyet
                                </Text>
                            </Box>
                        </Checkbox>
                        <MoreOptionMember />
                    </Box>
                </Box>
            </Box>
            <AddMember isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default Member;