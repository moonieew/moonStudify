import { removeStudent } from '@/common/service/classService';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    IconButton,
    Button,
    Stack,
    Flex,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs';
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from 'react-icons/ri';

export default function MoreOptionMember({ idClass, idStudent, refresh }: {
    idClass: string
    idStudent: string
    refresh: () => void
}) {
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast();

    const handleRemove = async () => {
        setIsLoading(true)
        try {
            await removeStudent({
                classId: idClass,
                studentId: idStudent
            })
            refresh && refresh()
            toast({
                title: "Bạn đã xoá học viên thành công!",
                status: "success",
                duration: 5000,
                isClosable: true
            });
        } catch (error) {
            toast({
                title: "Đã có lỗi xảy ra!",
                status: "error",
                duration: 5000,
                isClosable: true
            });
        } finally {
            setIsLoading(false)
        }
    }
    return (
        /**
         * You may move the Popover outside Flex.
         */
        <Flex justifyContent="center">
            <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                    <IconButton
                        aria-label="More server options"
                        icon={<BsThreeDotsVertical />}
                        variant="solid"
                        w="fit-content"
                        bg={"none"}
                    />
                </PopoverTrigger>
                <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
                    <PopoverArrow />
                    <PopoverBody>
                        <Stack>
                            <Button
                                w="194px"
                                variant="ghost"
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="sm">
                                Gửi email cho học sinh
                            </Button>
                            <Button
                                w="194px"
                                variant="ghost"
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="sm"
                                onClick={handleRemove}
                                isLoading={isLoading}
                            >
                                Xoá
                            </Button>
                            <Button
                                w="194px"
                                variant="ghost"
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="sm">
                                Ẩn Minh Nguyệt
                            </Button>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    );
}