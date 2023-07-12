import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, background, useDisclosure } from "@chakra-ui/react";
import Logo from "../Logo";
import { GoHome } from "react-icons/go";
import { SiTestcafe } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getClassCreate, getClassJoined } from "@/common/service/classService";
import { useRouter } from "next/router";

function Slidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dataTeacher, setDataTeacher] = useState([]);
    const [dataStudent, setDataStudent] = useState([]);
    const router = useRouter();

    const dataClassUser = async () => {
        const res1 = await getClassCreate()
        setDataTeacher(res1)
        const res2 = await getClassJoined()
        setDataStudent(res2.joinedClass)
    }
    useEffect(() => {
        dataClassUser();
    }, [])
    return (
        <>
            <Box onClick={onOpen} borderRadius="50%" _hover={{ bg: "#f0f5ff" }} width="40px" h={"40px"} display="flex"
                alignItems={"center"} justifyContent="center" cursor={"pointer"} >
                <HamburgerIcon bgSize={"26px"} />
            </Box>
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'><Logo /></DrawerHeader>
                    <DrawerBody>
                        <Box cursor="pointer" h={"3.5rem"} display={"flex"} borderBottomWidth="1px" alignItems={"center"} _hover={{ background: "rgb(232,240,254)" }}
                            onClick={() => router.push('/home')}>
                            <Box mr={"1rem"}>
                                <GoHome size={"20"} />
                            </Box>
                            <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}
                            >
                                Lớp học
                            </Text>
                        </Box>
                        <Box borderBottomWidth="1px">
                            <Text color={"#5f6368"} py={"1rem"}>Giảng dạy</Text>
                            <Box display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                <Box mr={"1rem"}>
                                    <SiTestcafe size={"20"} />
                                </Box>
                                <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>Cần đánh giá</Text>
                            </Box>
                            {dataTeacher ? (
                                dataTeacher.map((item: any) => (
                                    <Box key={item._id} cursor={"pointer"} display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                        <Box mr={"1rem"}>
                                            <Avatar name={item.name} size='sm' src='https://bit.ly/broken-link' />
                                        </Box>
                                        <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>{item.name}</Text>
                                    </Box>
                                ))) : (
                                <Box cursor={"pointer"} display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                    <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>Tạo lớp học mới ngay</Text>
                                </Box>
                            )}

                        </Box>
                        <Box borderBottomWidth="1px">
                            <Text color={"#5f6368"} py={"1rem"}>Đã đăng ký</Text>
                            <Box display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                <Box mr={"1rem"}>
                                    <FaTasks size={"20"} />
                                </Box>
                                <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>Việc cần làm</Text>
                            </Box>
                            {dataStudent ? (
                                dataStudent.map((item: any) => (
                                    <Box key={item.className} cursor={"pointer"} display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                        <Box mr={"1rem"}>
                                            <Avatar name={item.className} size='sm' src='https://bit.ly/broken-link' />
                                        </Box>
                                        <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>{item.className}</Text>
                                    </Box>
                                ))
                            ) : (
                                <Box cursor={"pointer"} display={"flex"} h={"3.5rem"} alignItems={"center"} borderRadius={"0 2rem 2rem 0"} _hover={{ background: "rgb(232,240,254)" }}>
                                    <Text fontSize={"14px"} color={"#5f6368"} fontWeight={500}>Tham gia lớp học ngay</Text>
                                </Box>
                            )}
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Slidebar;