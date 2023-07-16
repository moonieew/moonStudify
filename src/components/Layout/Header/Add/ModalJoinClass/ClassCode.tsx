import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

function ClassCode() {
    return (
        <FormControl variant="floating" id="first-name" isRequired isInvalid>
            <Input placeholder=" " />
            <FormLabel>Mã lớp</FormLabel>
            <FormErrorMessage fontSize={"12px"}>Mã lớp học có các ký tự gồm cả chữ cái và số, không có dấu cách hoặc ký hiệu</FormErrorMessage>
        </FormControl>
    );
}

export default ClassCode;