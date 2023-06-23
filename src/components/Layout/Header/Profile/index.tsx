import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, HStack, Text, useColorMode, VStack, Img } from "@chakra-ui/react";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { Row, Col } from 'reactstrap';
import Loading from "@/components/Loading";

function Profile() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { user, isLoading } = useUser();

    return (
        <>
            {/* {isLoading && <Loading />} */}

            {user && (
                <HStack>
                    <Button onClick={toggleColorMode} bg="none">
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Avatar
                        size={'sm'}
                        src={`${user.picture}`}
                        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                    />
                    <VStack
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2">
                        <Text fontSize="sm">{user.name}</Text>
                    </VStack>
                </HStack>
            )}
        </>
    );
}

export default Profile;