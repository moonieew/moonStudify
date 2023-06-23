import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Stack, useDisclosure } from "@chakra-ui/react";
import JoinClass from "./ModalJoinClass";
import { useState } from "react";
import NewClass from "./ModalNewClass";

function Add() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    return (
        <>
            <Popover placement="bottom-end" isLazy>
                <PopoverTrigger>
                    <AddIcon />
                </PopoverTrigger>
                <PopoverContent w="fit-content" h={"112px"} boxShadow='xl' _focus={{ boxShadow: 'none' }}>
                    <PopoverArrow />
                    <PopoverBody>
                        <Stack>
                            <Button
                                w="180px"
                                variant="ghost"
                                fontWeight="normal"
                                onClick={onOpen}
                            >
                                Tham gia lớp học
                            </Button>
                            <Button
                                w="180px"
                                variant="ghost"
                                fontWeight="normal"
                                onClick={() => {
                                    setIsOpenModal(true)
                                }}
                            >
                                Tạo lớp học
                            </Button>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <JoinClass isOpen={isOpen} onClose={onClose} />
            <NewClass isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
        </>
    );
}

export default Add;