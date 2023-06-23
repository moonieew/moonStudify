import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, background, useDisclosure } from "@chakra-ui/react";
import Logo from "../Logo";
import { GoHome } from "react-icons/go";
import { SiTestcafe } from "react-icons/si";
import { FaTasks } from "react-icons/fa";

function Slidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box onClick={onOpen}>
                <HamburgerIcon />
            </Box>
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'><Logo /></DrawerHeader>
                    <DrawerBody>
                        <Box h={"3.5rem"} display={"flex"} borderBottomWidth="1px" alignItems={"center"}>
                            <Box mr={"1rem"}>
                                <GoHome size={"20"} />
                            </Box>
                            <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>Lớp học</Text>
                        </Box>
                        <Box borderBottomWidth="1px">
                            <Text color={"#5f6368"} py={"1rem"}>Giảng dạy</Text>
                            <Box display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                <Box mr={"1rem"}>
                                    <SiTestcafe size={"20"} />
                                </Box>
                                <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>Cần đánh giá</Text>
                            </Box>
                            <Box display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                <Box mr={"1rem"}>
                                    <Avatar name='Ten lop hoc' size='sm' src='https://bit.ly/broken-link' />
                                </Box>
                                <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>Tên lớp học</Text>
                            </Box>
                        </Box>
                        <Box borderBottomWidth="1px">
                            <Text color={"#5f6368"} py={"1rem"}>Đã đăng ký</Text>
                            <Box display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                <Box mr={"1rem"}>
                                    <FaTasks size={"20"} />
                                </Box>
                                <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>Việc cần làm</Text>
                            </Box>
                            <Box display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                <Box mr={"1rem"}>
                                    <Avatar name='Ten lop hoc' size='sm' src='https://bit.ly/broken-link' />
                                </Box>
                                <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>Tên lớp học đã đkí</Text>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Slidebar;