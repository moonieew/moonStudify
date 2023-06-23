import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, HStack, Text, useColorMode, VStack } from "@chakra-ui/react";

function Profile() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack>
            <Button onClick={toggleColorMode} bg="none">
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Avatar
                size={'sm'}
                src={""}
            />
            <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2">
                <Text fontSize="sm">Minh Nguyệt</Text>
            </VStack>
        </HStack>
    );
}

export default Profile;