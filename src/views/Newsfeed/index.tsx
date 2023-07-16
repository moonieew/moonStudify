import { Alert, AlertIcon, Avatar, Box, Button, Container, Grid, GridItem, Input, Skeleton, Text, useToast } from "@chakra-ui/react";
import CoverImage from "./CoverImage";
import CodeOfFeed from "./CodeOfFeed";
import NotiTest from "./NotiTest";
import Feed from "./Feed";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getClassById } from "@/common/service/classService";
import dynamic from "next/dynamic";
import { createPost } from "@/common/service/newsfeed";

// const modules = {
//     toolbar: [
//         [{ header: '1' }, { header: '2' }, { font: [] }],
//         [{ size: [] }],
//         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//         [
//             { list: 'ordered' },
//             { list: 'bullet' },
//             { indent: '-1' },
//             { indent: '+1' },
//         ],
//         ['link', 'image', 'video'],
//         ['clean'],
//     ],
//     clipboard: {
//         // toggle to add extra line breaks when pasting HTML:
//         matchVisual: false,
//     },
// }

// const formats = [
//     'header',
//     'font',
//     'size',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'indent',
//     'link',
//     'image',
//     'video',
// ]

function Newsfeed() {
    const router = useRouter()
    const [data, setData] = useState<any>()
    const [showPost, setShowPost] = useState(false)
    const [value, setValue] = useState('');
    const [post, setPost] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast();
    const [loading, setLoading] = useState(false)
    const [isRefresh, setIsRefresh] = useState(false)

    const idClass = router.query.id as string
    const getInfoClass = async () => {
        setLoading(true)
        const dataClass = await getClassById(idClass)
        setData(dataClass)
        setLoading(false)
    }

    useEffect(() => {
        getInfoClass()
    }, [idClass, isRefresh])
    // const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    //     ssr: false,
    //     loading: () => <p>Loading ...</p>,
    // })
    const handlePost = async () => {
        setIsLoading(true)
        const res = await createPost({
            content: post,
            attachmentLink: "",
            newFeedUrl: "",
            classId: data._id
        })
        if (res) {
            toast({
                title: "Bài viết đã được đăng",
                status: "success",
                duration: 1000,
                isClosable: true
            });
        } else {
            toast({
                title: "Đã có lỗi xảy ra!",
                status: "error",
                duration: 1000,
                isClosable: true
            });
        }
        setIsRefresh(pre => !pre)
        setShowPost(false)
        setIsLoading(true)
    }
    return (
        <>
            {loading && (
                <Container maxW={"5xl"}>
                    <Box h={"68px"} />
                    <Skeleton h={"15rem"} w={"100%"} borderRadius={"0.5rem"} my={"1.5rem"} />
                    <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(6, 1fr)">
                        <GridItem colSpan={1}>
                            <Skeleton pb={"0.5rem"}
                                borderRadius={"0.5rem"}
                                mr="1.5rem"
                                mb={"1.5rem"}
                                p={"1rem"}
                                w={"196px"}
                                h={"98px"} />
                            <Skeleton pb={"0.5rem"}
                                borderRadius={"0.5rem"}
                                mr="1.5rem"
                                mb={"1.5rem"}
                                p={"1rem"}
                                w={"196px"}
                                h={"98px"} />
                        </GridItem>
                        <GridItem colSpan={5}>
                            <Skeleton borderRadius={"0.5rem"}
                                h={"2.5rem"}
                                w="100%"
                                mb={"1.5rem"} />
                            <Skeleton w={"100%"} h="5rem" borderRadius={"0.5rem"} mb={"1.5rem"} />
                            <Skeleton w={"100%"} h="5rem" borderRadius={"0.5rem"} mb={"1.5rem"} />
                        </GridItem>
                    </Grid>
                </Container>
            )}
            <Container maxW={"5xl"} >
                <Box h={"68px"} />
                <CoverImage name={data?.name} desc={data?.description} />
                <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(6, 1fr)">
                    <GridItem colSpan={1}>
                        <CodeOfFeed classCode={data?._id} />
                        <NotiTest />
                    </GridItem>
                    <GridItem colSpan={5}>
                        {showPost ? (
                            <Box border={"0.0625rem solid #dadce0"} borderRadius={"0.5rem"} p={"0.5rem"} mb={"1.5rem"} boxShadow="0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)">
                                <Text fontSize={"13px"} color="rgb(25,103,210)" mb={"0.5rem"}>Thông báo nội dung nào đó cho lớp học của bạn</Text>
                                <Input type="text" value={post}
                                    onChange={(e) => setPost(e.target.value)} />
                                {/* <QuillNoSSRWrapper theme="snow" modules={modules} value={value} formats={formats} onChange={setValue} /> */}
                                <Box display={"flex"} justifyContent="end" gap="8px" mt="1rem">
                                    <Button onClick={() => setShowPost(false)} bg="none">Huỷ</Button>
                                    <Button _hover={{ bg: "#91caff" }} onClick={handlePost} isLoading={isLoading}>
                                        Đăng
                                    </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box onClick={() => setShowPost(true)} cursor={"pointer"} border={"0.0625rem solid #dadce0"} borderRadius={"0.5rem"} p={"0.5rem"} display="flex" alignItems={"center"} mb={"1.5rem"}>
                                <Box borderRadius={"50%"}
                                    ml={"1rem"}
                                    h={"2.5rem"}
                                    w={"2.5rem"}
                                    alignSelf={"center"}
                                    m={"0 1rem"}>
                                    <Avatar w={"100%"} h="100%" src='https://bit.ly/broken-link' />
                                </Box>
                                <Text fontSize={"13px"} color="rgba(0,0,0,.549) " _hover={{ color: "rgb(25,103,210)" }}>Thông báo nội dung nào đó cho lớp học của bạn</Text>
                            </Box>
                        )}
                        <Feed idNewsfeed={data?.newFeeds} />
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default Newsfeed;