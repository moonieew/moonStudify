import { EditIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";

function CoverImage() {
    return (
        <Box borderRadius={"0.5rem"} my={"1.5rem"} overflow={"hidden"}>
            <Box h={"15rem"} position={"relative"} w={"100%"}>
                <Box backgroundImage={"https://www.gstatic.com/classroom/themes/img_reachout.jpg"}
                    w={"100%"} h={"100%"} position={"absolute"} borderRadius={"0.5rem"} />
                <Box bottom={"0"} p={"1rem 1.5rem"} position={"absolute"} color={"#fff"} left={0} right={0}>
                    <Text fontSize={"36px"}>Tên lớp học nè</Text>
                    <Text fontSize={"22px"}>Phần nào nè</Text>
                </Box>
                <Box justifyContent={"center"} bottom={0} display={"flex"} position={"absolute"} right={0} w={"auto"} p={"1rem"}>
                    <EditIcon color={"white"} boxSize={"25px"} />
                </Box>
            </Box>
        </Box>
    );
}

export default CoverImage;