import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useColorModeValue, useDisclosure, Input, Textarea } from "@chakra-ui/react";


function TitleExam({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <Modal onClose={onClose} size="3xl" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Box margin={"16px 0 0"} display="flex">
                        <Box pr={"32px"} w="60%">
                            <Box m={"0 0 16px"}>
                                <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Tên bài kiểm tra</Text>
                                <Input focusBorderColor='rgb(19, 104, 206)' placeholder='Tên bài kiểm tra ...' />
                            </Box>
                            <Box m={"0 0 16px"}>
                                <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Mô tả</Text>
                                <Textarea focusBorderColor='rgb(19, 104, 206)' placeholder='Mô tả...' />
                            </Box>
                        </Box>
                        <Box w={"40%"} >
                            <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Ảnh bìa</Text>
                            <Box bg={"rgb(242, 242, 242)"} h="150px" borderRadius="4px">hello</Box>
                            <Button boxShadow={"rgba(0, 0, 0, 0.25) 0px -2px inset"}
                                bg="rgb(19, 104, 206)"
                                color={"rgb(255, 255, 255)"}
                                borderRadius="4px"
                                fontWeight={"bold"}
                                p="0 16px 4px"
                                minH={"32px"}
                                ml="5.5rem"
                                _hover={{ minH: "31px", mt: "1px", pb: "1px", bg: "rgb(18, 96, 190)", boxShadow: "rgba(0, 0, 0, 0.25) 0px -1px inset" }}
                            >
                                Thêm ảnh
                            </Button>
                        </Box>
                    </Box>
                    <Box display={"flex"} gap="6%">
                        <Box w={"47%"}>
                            <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Thời gian bắt đầu</Text>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                            />
                        </Box>
                        <Box w={"47%"}>
                            <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Thời gian kết thúc</Text>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                            />
                        </Box>
                    </Box>
                </ModalBody>
                <ModalFooter display={"flex"} justifyContent={"center"}>
                    {/* <Box display={"flex"} justifyContent={"center"}> */}
                    <Button minW={"7.5rem"} m={"0 4px"}
                        boxShadow={"rgba(0, 0, 0, 0.25) 0px -4px inset"}
                        bg={"rgb(242, 242, 242)"}
                        textColor={"rgb(0, 0, 0)"}
                        borderRadius={"4px"}
                        fontSize={"0.875rem"}
                        fontWeight={"bold"}
                        minH={"42px"}
                        p={"0 16px 4px"}
                        _hover={{ minH: "40px", marginTop: "2px", paddingBottom: "2px", bg: "rgb(223, 223, 223)", boxShadow: "rgba(0, 0, 0, 0.25) 0px -2px inset" }}
                    >
                        Huỷ
                    </Button>
                    <Button minW={"7.5rem"} m={"0 4px"}
                        boxShadow={"rgba(0, 0, 0, 0.25) 0px -4px inset"}
                        bg={"rgb(38, 137, 12)"}
                        textColor={"rgb(255, 255, 255)"}
                        borderRadius={"4px"}
                        fontSize={"0.875rem"}
                        fontWeight={"bold"}
                        minH={"42px"}
                        p={"0 16px 4px"}
                        _hover={{ minH: "40px", marginTop: "2px", paddingBottom: "2px", bg: "rgb(35, 126, 11)", boxShadow: "rgba(0, 0, 0, 0.25) 0px -2px inset" }}
                    >
                        Lưu
                    </Button>
                    {/* </Box> */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default TitleExam;