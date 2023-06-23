import { Box } from "@chakra-ui/react";
import { BsFolder } from "react-icons/bs";

function FooterClass() {
    return (
        <Box borderTop={"0.0625rem solid rgb(218,220,224)"} display="flex" justifyContent={"flex-end"} alignItems="center">
            <Box w={"48px"} h="48px" m={"1rem 0 0 1rem"}>
                <BsFolder size={"24px"} />
            </Box>
        </Box>
    );
}

export default FooterClass;