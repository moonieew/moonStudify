import { Box, Image, Text } from "@chakra-ui/react";
import FooterClass from "./FooterClass";
import MenuButton from "./MenuButton";

function Class() {
    return (
        <>
            <Box w={"302px"} h={"296px"} border="0.0625rem solid #dadce0" borderRadius={"0.5rem"} m="1rem" _hover={{ boxShadow: "lg" }}>
                <Box w={"100%"} h="100px" backgroundImage={"url(https://gstatic.com/classroom/themes/img_reachout.jpg)"} display="flex" flexDirection={"column"} justifyContent="space-between" p={"1rem 1rem 0.75rem"}>
                    <Box display={"flex"} justifyContent="space-between" alignItems={"center"} >
                        <Text fontSize={"22px"} color="white" whiteSpace={"nowrap"} textOverflow="ellipsis" overflow={"hidden"}>
                            Cấu trúc dữ liệu và giải thuật
                        </Text>
                        <MenuButton />
                    </Box>
                    <Box>
                        <Text fontSize={"13px"} color="white">Minh Nguyệt</Text>
                    </Box>
                </Box>
                <Box h={"137px"} display="flex" justifyContent={"end"}>
                    <Box h="75px" w="75px" position="absolute" m={"-42px 16px 0"}>
                        <Image src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg" borderRadius={"50%"} />
                    </Box>
                </Box>
                <FooterClass />
            </Box>
        </>
    );
}

export default Class;