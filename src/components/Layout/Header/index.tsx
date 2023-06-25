import Class from "@/components/Class";
import { Box, Button, Flex, HStack, Img, useColorModeValue } from "@chakra-ui/react";
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
import Add from "./Add";
import Logo from "./Logo";
import Profile from "./Profile";
import Slidebar from "./Slidebar";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { getCookie, setCookie } from 'typescript-cookie'

function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const { user, isLoading } = useUser();
    const toggle = () => setIsOpen(!isOpen);

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

    const Login = () => {
        router.push("/api/auth/login").then(() => {

        })

        // call api acesstoken
        axios.get('http://localhost:5005/auth/login/accessToken', {
            headers: {
                'accept': 'application/json'
            }
        }).then((res) => {
            const access_token = res.data.data.access_token
            setCookie('token', access_token)
        })
    }

    const Logout = () => {
        router.push("/api/auth/logout")
    }

    const callapi = async () => {
        const res = await fetch('@/pages/api/shows');
        const data = await res.json();
        console.log("data", data)
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
                        {!user && (
                            <Box px={"24px"} onClick={Login} as={"button"}>Login</Box>
                        )}

                        {user && (
                            <>
                                <Profile />
                                <Box px={"24px"} onClick={Logout} as={"button"}>Logout</Box>
                            </>
                        )}
                    </HStack>
                    <Button onClick={callapi}>Hello</Button>
                </Flex>
            </Box>
        </>
    );
}

export default Header;