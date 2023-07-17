import { deleteTest } from '@/common/service/textService';
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

export default function MoreOptionTest({ idTest, refresh }: {
    idTest: string
    refresh: () => void
}) {
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast();

    const handleDeleteTest = async () => {
        try {
            setIsLoading(true)
            const res = await deleteTest(idTest)
            refresh && refresh()
            toast({
                title: "Bạn đã xoá bài test thành công!",
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
                        icon={<BsThreeDotsVertical size={"24px"} />}
                        variant="solid"
                        w="fit-content"
                        bg={"none"}
                    />
                </PopoverTrigger>
                <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
                    <PopoverArrow />
                    <PopoverBody>
                        <Stack>
                            {/* <Button
                                w="194px"
                                variant="ghost"
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="sm">
                                Chia sẻ
                            </Button> */}
                            <Button
                                w="194px"
                                variant="ghost"
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="sm"
                                onClick={handleDeleteTest}
                                isLoading={isLoading}>
                                Xoá
                            </Button>
                            <Button
                                w="194px"
                                variant="ghost"
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="sm">
                                Thống kê
                            </Button>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    );
}