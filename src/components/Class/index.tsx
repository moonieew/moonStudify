import { getClass } from "@/common/service/classService";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FooterClass from "./FooterClass";
import MenuButton from "./MenuButton";

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

function Class() {
    const [data, setData] = useState(null);
    const router = useRouter();

    const dataClass = async () => {
        const res: any = await getClass()
        setData(res)
    }
    useEffect(() => {
        // Gọi API khi component được mount
        dataClass();
    }, []);

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        return imageArray[randomIndex];
    };

    return (
        <>
            <Grid templateColumns="repeat(4, 1fr)">
                {
                    data && data.map((item: any) => (
                        <GridItem colSpan={1} key={item._id} onClick={() => router.push(`/class/${item._id}`)}>
                            <Box cursor="pointer" w={"302px"} h={"296px"} border="0.0625rem solid #dadce0" borderRadius={"0.5rem"} m="1rem" _hover={{ boxShadow: "lg" }}>
                                <Box w={"100%"} h="100px" backgroundImage={getRandomImage()} display="flex" flexDirection={"column"} justifyContent="space-between" p={"1rem 1rem 0.75rem"}>
                                    <Box display={"flex"} justifyContent="space-between" alignItems={"center"} >
                                        <Text fontSize={"22px"} color="white" whiteSpace={"nowrap"} textOverflow="ellipsis" overflow={"hidden"}>
                                            {item.name}
                                        </Text>
                                        <MenuButton />
                                    </Box>
                                    <Box>
                                        <Text fontSize={"13px"} color="white">{item.teacher.fullname}</Text>
                                    </Box>
                                </Box>
                                <Box h={"137px"} display="flex" justifyContent={"end"}>
                                    <Box h="75px" w="75px" position="absolute" m={"-42px 16px 0"}>
                                        <Image src={`${item.teacher.avatar}`} borderRadius={"50%"} />
                                    </Box>
                                </Box>
                                <FooterClass />
                            </Box>
                        </GridItem>
                    ))
                }


            </Grid>

        </>
    );
}

export default Class;