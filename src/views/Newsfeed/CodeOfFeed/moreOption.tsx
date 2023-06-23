import { AttachmentIcon, CopyIcon, LinkIcon } from '@chakra-ui/icons';
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
function MoreOption() {
    return (
        <Flex justifyContent="center">
            <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                    <IconButton
                        aria-label="More server options"
                        icon={<BsThreeDotsVertical />}
                        variant="solid"
                        bg={"none"}
                        w="fit-content"
                    />
                </PopoverTrigger>
                <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
                    <PopoverArrow />
                    <PopoverBody>
                        <Stack>
                            <Button
                                variant="ghost"
                                rightIcon={<LinkIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="sm">
                                Sao chép đường liên kết tham gia lớp học
                            </Button>
                            <Button
                                variant="ghost"
                                rightIcon={<CopyIcon />}
                                justifyContent="space-between"
                                fontWeight="normal"
                                fontSize="sm">
                                Sao chép mã lớp
                            </Button>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    );
}

export default MoreOption;