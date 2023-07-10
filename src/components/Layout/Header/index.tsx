import Class from "@/components/Class";
import { Avatar, Box, Button, Center, Checkbox, Flex, FormControl, FormLabel, HStack, Img, Input, InputGroup, InputRightElement, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {
    FiChevronDown,
} from 'react-icons/fi';
import Add from "./Add";
import Logo from "./Logo";
import Profile from "./Profile";
import Slidebar from "./Slidebar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'
import { error } from "console";
import { config } from "process";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { getInfo, logOut, register } from "@/common/service/user";

function Header() {
    const router = useRouter();
    const [isOpenM, setIsOpenM] = useState(false);
    // const { user, isLoading } = useUser();
    const toggle = () => setIsOpenM(!isOpenM);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [isOpenSignUp, setIsOpenSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [nameCreate, setNameCreate] = useState<string>("");
    const [usernameCreate, setUsernameCreate] = useState<string>("");
    const [emailCreate, setEmailCreate] = useState<string>("");
    const [passCreate, setPassCreate] = useState<string>("");
    const [info, setInfo] = useState<any>();
    const toast = useToast();
    const [isOpenLogout, setIsOpenLogout] = useState(false)

    const infoUser = async () => {
        const res: any = await getInfo()
        setInfo(res)
    }
    useEffect(() => {
        infoUser();
    }, [])

    const goToNewsfeed = () => {
        router.push("/class/newsfeed")
    }

    const goToMember = () => {
        router.push("/class/member")
    }

    const goToExam = () => {
        router.push("/class/exam")
    }

    const goToProfile = () => {
        router.push("/profile")
    }

    const Login = async () => {
        setIsLoading(true);
        await axios.post('https://be-moon-studify.vercel.app/api/auth/login', {
            "username": username,
            "password": password
        }, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",

            }
        }).then((response) => {
            // Xử lý phản hồi thành công
            setCookie('token', response.data.accessToken)
            setMessage(false)
            onClose()
            router.push("/home")
            toast({
                title: "Bạn đã tạo đăng nhập thành công!",
                status: "success",
                duration: 5000,
                isClosable: true
            });
        })
            .catch((error) => {
                // Xử lý lỗi
                setMessage(true)
                console.error(error);
                toast({
                    title: "Đã có lỗi xảy ra!",
                    status: "error",
                    duration: 5000,
                    isClosable: true
                });
            });
        setIsLoading(false);
        // router.push("/api/auth/login")

        // call api acesstoken
        // axios.get('https://moonstudify-server.onrender.com/auth/login/accessToken', {
        //     headers: {
        //         'accept': 'application/json',
        //     }
        // }).then((res) => {
        //     console.log("res", res)
        //     const access_token = res.data.data.access_token
        //     setCookie('token', access_token)
        // })
    }
    const registerAccount = async () => {
        setIsLoading(true)
        const data = await register({
            fullname: nameCreate,
            username: usernameCreate,
            email: emailCreate,
            password: passCreate,
            role: "STUDENT"
        })
        closeModal()
        setIsLoading(false);
    }
    const closeModal = () => {
        setIsOpenSignUp(false);
    };
    const openModal = () => {
        setIsOpenSignUp(true);
    };
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
        toast({
            title: "Bạn đã đăng xuất thành công!",
            status: "success",
            duration: 5000,
            isClosable: true
        });
        setIsLoading(false)
        router.push("/")
    }
    const Logout = () => {
        router.push("/api/auth/logout")
    }

    return (
        <>
            <Box
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                boxShadow='lg'
                p="1rem"
            >
                <Flex justifyContent="space-between" alignItems={"center"}>
                    <HStack>
                        <Slidebar />
                        <Logo />
                    </HStack>
                    <HStack gap={6}>
                        <Box px={"24px"} onClick={goToNewsfeed} as={"button"}>Bảng tin</Box>
                        <Box px={"24px"} onClick={goToExam} as={"button"}>Bài kiểm tra</Box>
                        <Box px={"24px"} onClick={goToMember} as={"button"}>Mọi người</Box>
                    </HStack>
                    <HStack>
                        <Add />
                        {info ? (
                            <Box display={"flex"} alignItems="center" gap={"8px"}>
                                <Menu>
                                    <MenuButton
                                        py={2}
                                        transition="all 0.3s"
                                        _focus={{ boxShadow: 'none' }}>
                                        <HStack>
                                            <Avatar
                                                size={'sm'}
                                                src={`${info.avatar}`}
                                            />
                                            <VStack
                                                display={{ base: 'none', md: 'flex' }}
                                                alignItems="flex-start"
                                                spacing="1px"
                                                ml="2">
                                                <Text fontSize="sm">{info.username}</Text>
                                            </VStack>
                                            <Box display={{ base: 'none', md: 'flex' }}>
                                                <FiChevronDown />
                                            </Box>
                                        </HStack>
                                    </MenuButton>
                                    <MenuList
                                        bg={useColorModeValue('white', 'gray.900')}
                                        borderColor={useColorModeValue('gray.200', 'gray.700')}>
                                        <MenuItem>Trang cá nhân</MenuItem>
                                        <MenuDivider />
                                        <MenuItem onClick={openModalLogout}>Đăng xuất</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Box>
                        ) : (
                            <Box display={"flex"} >
                                <Box px={"24px"} as={"button"} onClick={onOpen}>Đăng nhập</Box>
                                <Box px={"24px"} as={"button"} onClick={openModal} >Đăng ký</Box>
                            </Box>
                        )}


                        {/* {!user && (
                            <Box px={"24px"} onClick={Login} as={"button"}>Login</Box>
                        )}

                        {user && (
                            <>
                                <Profile />
                                <Box px={"24px"} onClick={Logout} as={"button"}>Logout</Box>
                            </>
                        )} */}
                    </HStack>
                </Flex>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Đăng nhập</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box
                            rounded={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Tên tài khoản</FormLabel>
                                    <Input type="email" value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Mật khẩu</FormLabel>
                                    <Input type="password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </FormControl>
                                {message && (
                                    <Text size={"8px"} color="red">Sai tên đăng nhập hoặc mật khẩu</Text>
                                )}
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>
                                        <Checkbox>Remember me</Checkbox>
                                        <Link color={'blue.400'}>Quên mật khẩu?</Link>
                                    </Stack>
                                    <Button
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        onClick={Login}
                                        isLoading={isLoading}
                                    >
                                        Đăng nhập
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Modal isOpen={isOpenSignUp} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Đăng ký tài khoản</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box
                            rounded={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl id="name" isRequired>
                                    <FormLabel>Họ và tên</FormLabel>
                                    <Input type="text" value={nameCreate}
                                        onChange={(e) => setNameCreate(e.target.value)} />
                                </FormControl>
                                <FormControl id="username">
                                    <FormLabel>Tên thường dùng</FormLabel>
                                    <Input type="text" value={usernameCreate}
                                        onChange={(e) => setUsernameCreate(e.target.value)} />
                                </FormControl>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Địa chỉ Email</FormLabel>
                                    <Input type="email" value={emailCreate}
                                        onChange={(e) => setEmailCreate(e.target.value)} />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel>Mật khẩu</FormLabel>
                                    <InputGroup>
                                        <Input type={showPassword ? 'text' : 'password'} value={passCreate}
                                            onChange={(e) => setPassCreate(e.target.value)} />
                                        <InputRightElement h={'full'}>
                                            <Button
                                                variant={'ghost'}
                                                onClick={() =>
                                                    setShowPassword((showPassword) => !showPassword)
                                                }>
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        isLoading={isLoading}
                                        onClick={registerAccount}
                                    >
                                        Đăng ký
                                    </Button>
                                </Stack>
                                <Stack pt={6}>
                                    <Text align={'center'}>
                                        Bạn đã có tài khoản? <Link color={'blue.400'} onClick={() => {
                                            closeModal()
                                            onOpen()
                                        }}>Đăng nhập</Link>
                                    </Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
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
                            <Button flex="1" mr="10px" outline="1px solid #919191" bg={"#ED2B2A"} isLoading={isLoading} onClick={logout}>
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

export default Header;