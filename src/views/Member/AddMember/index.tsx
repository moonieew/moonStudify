import { CloseIcon, CopyIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useColorModeValue, useDisclosure } from "@chakra-ui/react";

function AddMember({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Mời học viên</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box borderBottom={"0.0625rem solid #e0e0e0"} p={"0.5rem 0 1rem"}>
                        <Text fontSize={"14px"} color={"#3c4043"} fontWeight={500}>Đường liên kết mời</Text>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Text fontSize={"0.75rem"} color={"#5f6368"} overflow={"hidden"} whiteSpace="nowrap">
                                https://classroom.google.com/c/NjAyNDAxNTg3NjAw?cjc=lgqfrkh
                            </Text>
                            <CopyIcon color={"rgb(23,78,166)"} />
                        </Box>
                    </Box>
                    <Box borderBottom={"0.0625rem solid rgb(218,220,224)"} minH={"40px"}>
                        <Box ml={"4px"} mr={0} p={"4px 0 4px 4px"} >
                            <Input variant='unstyled' placeholder='Nhập tên hoặc email' />
                        </Box>
                    </Box>
                </ModalBody>

                <ModalFooter fontSize={"14px"} color={"#5f6368"}>
                    <Button variant='ghost' mr={3} onClick={onClose}>
                        Huỷ
                    </Button>
                    <Button variant='ghost'>Mời</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default AddMember;