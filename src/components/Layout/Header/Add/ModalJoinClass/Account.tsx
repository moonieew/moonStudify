import { Box, Button, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";

function Account() {
    return (
        <Box border={"1px"} borderColor={useColorModeValue('gray.200', 'gray.700')}
            mt="1rem"
            maxW={"35rem"}
            p="1.5rem"
            borderRadius={"0.5rem"}
            w="100%"
        >
            <Text fontSize={"14px"} m="0 0 8px" color={"#7F7F7F"}>Bạn đang đăng nhập bằng tài khoản</Text>
            <Box display={"flex"} justifyContent={"space-between"} >
                <HStack>
                    <Image src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg" maxH={"40px"} maxW="40px" borderRadius={"50%"} mr="1rem" />
                    <Box flexDirection={"column"}>
                        <Text fontSize={"14px"}>Minh Nguyệt</Text>
                        <Text fontSize={"12px"} color="#5F6368">ltmnguyet.131@gmail.com</Text>
                    </Box>
                </HStack>
                <Button fontSize={"14px"} color="#1A73E8" borderRadius={"4px"} border="0.0625rem solid #dadce0" bg={"none"}>Chuyển đổi tài khoản</Button>
            </Box>
        </Box>
    );
}

export default Account;