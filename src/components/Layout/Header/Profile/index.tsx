import { Avatar, Box, Button, HStack, Text, useColorMode, VStack, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Modal, ModalOverlay, ModalContent, Center, Flex, useToast } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { logOut } from "@/common/service/user";
import { removeCookie } from "typescript-cookie";
import { useRouter } from "next/router";

function Profile({ info, setInfoUser }: {
    info?: any
    setInfoUser?: () => void
}) {
    const [isOpenLogout, setIsOpenLogout] = useState(false)
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const closeModalLogout = () => {
        setIsOpenLogout(false)
    }
    const openModalLogout = () => {
        setIsOpenLogout(true)
    }

    const logout = async () => {
        setIsLoading(true)
        const data = await logOut()
        setIsOpenLogout(false)
        removeCookie('token')
        setInfoUser && setInfoUser()
        toast({
            title: "Bạn đã đăng xuất thành công!",
            status: "success",
            duration: 5000,
            isClosable: true
        });
        setIsLoading(false)
        router.push("/")
    }

    return (
        <>
            {/* {isLoading && <Loading />} */}

            <Box display={"flex"} alignItems="center" gap={"8px"}>
                <Menu>
                    <MenuButton
                        py={2}
                        transition="all 0.3s"
                        _focus={{ boxShadow: 'none' }} ml="24px">
                        <HStack>
                            <Avatar size={"sm"} name={info?.fullname} src='https://bit.ly/broken-link' />
                            <VStack
                                display={{ base: 'none', md: 'flex' }}
                                alignItems="flex-start"
                                spacing="1px"
                                ml="2">
                                <Text fontSize="sm">{info?.username}</Text>
                            </VStack>
                            <Box display={{ base: 'none', md: 'flex' }}>
                                <FiChevronDown />
                            </Box>
                        </HStack>
                    </MenuButton>
                    <MenuList
                    >
                        <MenuItem>Trang cá nhân</MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={openModalLogout}>Đăng xuất</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            <Modal
                isOpen={isOpenLogout} onClose={closeModalLogout}
                size="sm"
            >
                <ModalOverlay />
                <ModalContent>
                    <Box p={"24px"}>
                        <Center mb="12px">
                            <Text>
                                Bạn có muốn đăng xuất không?
                            </Text>
                        </Center>
                        <Flex w="full">
                            <Button flex="1" mr="10px" outline="1px solid #919191" bg={"#ff4d4f"} isLoading={isLoading} onClick={logout}>
                                <Text color={"black"}>
                                    Có
                                </Text>
                            </Button>
                            <Button flex="1" variant="outline" onClick={closeModalLogout}>
                                Không
                            </Button>
                        </Flex>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Profile;