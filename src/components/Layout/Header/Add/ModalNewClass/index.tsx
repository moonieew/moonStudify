import { createClas } from "@/common/service/classService";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from "@chakra-ui/react";
import { useState } from "react";

function NewClass({ isOpen, onClose }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [name, setName] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [code, setCode] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const create = async () => {
        setIsLoading(true)
        const data = await createClas({
            classCode: code,
            description: desc,
            name: name
        })
        if (data) {
            toast({
                title: "Bạn đã tạo lớp học thành công!",
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
        setIsLoading(false)
        onClose()
    }
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
                    <FormControl isRequired>
                        <FormLabel>Tên lớp học</FormLabel>
                        <Input placeholder='Tên lớp học' value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </FormControl>

                    <FormControl mt={4} isRequired>
                        <FormLabel>Mô tả</FormLabel>
                        <Input placeholder='Mô tả' value={desc}
                            onChange={(e) => setDesc(e.target.value)} />
                    </FormControl>

                    <FormControl mt={4} isRequired >
                        <FormLabel>Mã lớp học</FormLabel>
                        <Input placeholder='Mã lớp học' value={code}
                            onChange={(e) => setCode(e.target.value)} />
                    </FormControl>

                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={create} isLoading={isLoading}>
                        Tạo
                    </Button>
                    <Button onClick={onClose}>Huỷ</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default NewClass;