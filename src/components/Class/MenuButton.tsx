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

interface menuClassProps {
    isTeacher: boolean;
    idClass: string;
}

export const MenuButton = (props: menuClassProps) => {
    const { isTeacher, idClass } = props;
    console.log("isteacher", isTeacher)
    return (
        <Flex justifyContent="center">
            <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                    <IconButton
                        aria-label="More server options"
                        icon={<BsThreeDotsVertical />}
                        bg={"none"}
                        color="white"
                    />
                </PopoverTrigger>
                <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
                    <PopoverArrow />
                    <PopoverBody>
                        <Stack>
                            <Button
                                w="194px"
                                variant="ghost"
                                fontWeight="normal"
                                fontSize="sm">
                                Di chuyển
                            </Button>
                            <Button
                                w="194px"
                                variant="ghost"
                                fontWeight="normal"
                                colorScheme="red"
                                fontSize="sm">
                                Huỷ đăng ký
                            </Button>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    );
}