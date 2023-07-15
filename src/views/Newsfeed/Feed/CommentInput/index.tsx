import { createComment } from "@/common/service/comment";
import { PostCommentIcon } from "@/components/Icon";
import { Box, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

function CommentInput({ newsfeedId, refresh }: {
    newsfeedId: string,
    refresh: () => void
}) {
    const [cmt, setCmt] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false)

    const handleComment = async () => {
        try {
            setIsLoading(true)
            const res = await createComment({
                content: cmt,
                newFeedId: newsfeedId
            })
            setCmt('')
            refresh && refresh()
        } catch (error) {

        } finally {
            setIsLoading(false)

        }

    }

    return (
        <Box borderRadius={"xl"} display="flex" alignItems={"center"} w="full">
            <Input
                borderRadius={"36px"}
                pr='4.5rem'
                fontSize={"0.8125rem"}
                placeholder='Thêm nhận xét trong lớp học nè ...'
                value={cmt}
                onChange={(e) => setCmt(e.target.value)}
                w="95%"
            />
            <Button display="flex" justifyContent={"center"} ml="0.5rem" cursor={"pointer"} isLoading={isLoading}
                borderRadius="50%" _hover={{ bg: "#e6f4ff" }} p="0.5rem" onClick={handleComment} bg="none"  >
                <PostCommentIcon />
            </Button>
        </Box>
    );
}

export default CommentInput;