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
} from '@chakra-ui/react';

import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs';
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from 'react-icons/ri';

export default function MoreOptionMember() {
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
                                fontSize="sm">
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