import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useColorModeValue, useDisclosure, FormControl, Input, FormLabel, FormErrorMessage, useToast } from "@chakra-ui/react";
import ClassCode from "./ClassCode";
import Account from "./Account";
import { useEffect, useState } from "react";
import { joinClass } from "@/common/service/classService";

function JoinClass({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [code, setCode] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast();

    const handleJoinClas = async () => {
        setIsLoading(true)
        const data = await joinClass({ classId: code })
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
        onClose()
        setIsLoading(false)
    }
    return (
        <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Box
                        borderBottomWidth="1px"
                        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                        p="0.5rem"
                        display={"flex"}
                        justifyContent="space-between"
                        alignItems={"center"}
                    >
                        <Text fontSize={"22px"}>Tham gia lớp học</Text>
                        <Button onClick={onClose} bg="none">
                            <CloseIcon />
                        </Button>
                    </Box>
                    <Flex p={"0 1rem"} alignItems="center" justifyContent={"center"} flexDirection="column">
                        <Account />
                        <Box border={"1px"} borderColor={useColorModeValue('gray.200', 'gray.700')}
                            borderRadius={"0.5rem"}
                            w="560px"
                            mt={"1rem"}
                            p="1.5rem"
                        >
                            <Text fontSize={"18px"}>Mã lớp</Text>
                            <Text fontSize={"0.875rem"} color="#3c4043" mb={"1rem"}>Đề nghị giáo viên của bạn cung cấp mã lớp rồi nhập mã đó vào đây.</Text>
                            <FormControl variant="floating" id="first-name" isRequired isInvalid>
                                <Input placeholder=" " value={code} onChange={e => setCode(e.target.value)} />
                                <FormLabel>Mã lớp</FormLabel>
                                <FormErrorMessage fontSize={"12px"}>Mã lớp học có các ký tự gồm cả chữ cái và số, không có dấu cách hoặc ký hiệu</FormErrorMessage>
                            </FormControl>
                        </Box>
                        <Box alignItems={"flex-start"} m={"1rem"} p={"0 1.5rem"} maxW={"35rem"} w={"100%"}>
                            <Text fontSize={"1rem"} pb={"1rem"}>Cách đăng nhập bằng mã lớp học</Text>
                            <Text fontSize={"14px"} pb={"1rem"}>    - Sử dụng tài khoản được cấp phép</Text>
                            <Text fontSize={"14px"}>    - Sử dụng mã lớp học gồm các chữ cái hoặc số, không có dấu cách hoặc ký hiệu</Text>
                        </Box>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button bg={code && "#69b1ff"} onClick={handleJoinClas} isLoading={isLoading}>
                        Tham gia
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default JoinClass;