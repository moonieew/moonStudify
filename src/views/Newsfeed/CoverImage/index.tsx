import { EditIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";

const imageArray = [
    "https://www.gstatic.com/classroom/themes/img_breakfast_thumb.jpg",
    "https://gstatic.com/classroom/themes/Honors_thumb.jpg",
    "https://gstatic.com/classroom/themes/img_graduation_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_bookclub_thumb.jpg",
    "https://gstatic.com/classroom/themes/img_code_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_reachout_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_learnlanguage_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_backtoschool_thumb.jpg",
    "https://www.gstatic.com/classroom/themes/img_read_thumb.jpg"
]

function CoverImage({ name, desc }: {
    name?: string;
    desc?: string
}) {
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        return imageArray[randomIndex];
    };
    return (
        <Box borderRadius={"0.5rem"} my={"1.5rem"} overflow={"hidden"}>
            <Box h={"15rem"} position={"relative"} w={"100%"}>
                <Box objectFit={"cover"} backgroundImage={getRandomImage()}
                    w={"100%"} h={"100%"} position={"absolute"} borderRadius={"0.5rem"} />
                <Box bottom={"0"} p={"1rem 1.5rem"} position={"absolute"} color={"#fff"} left={0} right={0}>
                    <Text fontSize={"36px"}>{name}</Text>
                    <Text fontSize={"18px"}>{desc}</Text>
                </Box>
                <Box justifyContent={"center"} bottom={0} display={"flex"} position={"absolute"} right={0} w={"auto"} p={"1rem"}>
                    <EditIcon color={"white"} boxSize={"25px"} />
                </Box>
            </Box>
        </Box>
    );
}

export default CoverImage;