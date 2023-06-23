import { PostCommentIcon } from "@/components/Icon";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function CommentInput() {
    return (
        <InputGroup size='md' borderRadius={"lg"}>
            <Input
                pr='4.5rem'
                fontSize={"0.8125rem"}
                placeholder='Thêm nhận xét trong lớp học nè ...'
            />
            <InputRightElement>
                <PostCommentIcon />
            </InputRightElement>
        </InputGroup>
    );
}

export default CommentInput;