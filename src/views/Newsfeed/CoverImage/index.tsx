import { EditIcon } from "@chakra-ui/icons";
import { Box, Image, Text } from "@chakra-ui/react";

const imageArray = [
    "https://gstatic.com/classroom/themes/img_breakfast.jpg",
    "https://gstatic.com/classroom/themes/Honors.jpg",
    "https://gstatic.com/classroom/themes/img_graduation.jpg",
    "https://gstatic.com/classroom/themes/img_bookclub.jpg",
    "https://gstatic.com/classroom/themes/img_code.jpg",
    "https://gstatic.com/classroom/themes/img_reachout.jpg",
    "https://gstatic.com/classroom/themes/img_learnlanguage.jpg",
    "https://gstatic.com/classroom/themes/img_backtoschool.jpg",
    "https://gstatic.com/classroom/themes/img_read.jpg"
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