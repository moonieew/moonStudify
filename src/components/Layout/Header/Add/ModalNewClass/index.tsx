import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

function NewClass({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <Modal
            // initialFocusRef={initialRef}
            // finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size={"xl"}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Tạo lớp học</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Tên lớp học</FormLabel>
                        <Input placeholder='Tên lớp học' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Phần</FormLabel>
                        <Input placeholder='Phần' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Chủ đề</FormLabel>
                        <Input placeholder='Chủ đề' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Phòng</FormLabel>
                        <Input placeholder='Phòng' />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Tạo
                    </Button>
                    <Button onClick={onClose}>Huỷ</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default NewClass;