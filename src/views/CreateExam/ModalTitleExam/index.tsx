import { createTest, updateTest } from "@/common/service/textService";
import { getInfo } from "@/common/service/user";
import { useSettingsQuestion } from "@/context/TextContext";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useColorModeValue, useDisclosure, Input, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


function TitleExam({ isOpen, onClose, idClass, setIdTest }: {
    isOpen: boolean;
    onClose: () => void;
    idClass?: string
    setIdTest: Dispatch<SetStateAction<string>>
}) {
    const { desc, info, maxPoint, nameTest, timeEnd, timeStart,
        setNameTest,
        setDesc,
        setTimeStart,
        setTimeEnd,
        setMaxPoint,
        setInfo
    } = useSettingsQuestion()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)


    const infoUser = async () => {
        const res: any = await getInfo()
        setInfo(res)
    }
    useEffect(() => {
        infoUser();
    }, [])

    const handleCreateTest = async () => {
        setIsLoading(true)
        if (router.query.edit) {
            const res = await updateTest({
                classId: router.query.idClass ? router.query.idClass.toString() : "",
                creatorId: info._id,
                description: desc ?? "",
                endTime: timeEnd,
                maxPoints: maxPoint ?? 0,
                name: nameTest ?? "",
                numberofQuestions: 100,
                questions: [],
                startTime: timeStart,
                testId: router.query.id ? router.query.id.toString() : ""
            })
            setIdTest(res.id)
        } else {
            const res = await createTest({
                classId: router.query.id ? router.query.id?.toString() : "",
                name: nameTest ?? "",
                creatorId: info._id,
                startTime: timeStart,
                endTime: timeEnd,
                maxPoints: maxPoint ?? 0,
                questions: [],
                description: desc ?? "",
                numberofQuestions: 10
            })
            setIdTest(res.id)
        }
        setIsLoading(false)
        onClose()
    }

    return (
        <Modal onClose={onClose} size="3xl" isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Box margin={"16px 0 0"} display="flex">
                        <Box pr={"32px"} w="100%">
                            <Box m={"0 0 16px"}>
                                <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Tên bài kiểm tra</Text>
                                <Input focusBorderColor='rgb(19, 104, 206)' placeholder='Tên bài kiểm tra ...'
                                    value={nameTest} onChange={e => setNameTest(e.target.value)} />
                            </Box>
                            <Box m={"0 0 16px"}>
                                <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Mô tả</Text>
                                <Textarea focusBorderColor='rgb(19, 104, 206)' placeholder='Mô tả...'
                                    value={desc} onChange={e => setDesc(e.target.value)} />
                            </Box>
                            <Box m={"0 0 16px"}>
                                <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Điểm tối đa</Text>
                                <Input focusBorderColor='rgb(19, 104, 206)' type={"number"}
                                    value={maxPoint} onChange={e => {
                                        const inputValue = e.target.value
                                        setMaxPoint(parseInt(inputValue))
                                    }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} gap="6%">
                        <Box w={"47%"}>
                            <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Thời gian bắt đầu</Text>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                                value={timeStart}
                                onChange={e => setTimeStart(e.target.value)}
                            />
                        </Box>
                        <Box w={"47%"}>
                            <Text fontSize={"0.875rem"} fontWeight="700" m={"0 0 0.25rem"}>Thời gian kết thúc</Text>
                            <Input
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                                value={timeEnd}
                                onChange={e => setTimeEnd(e.target.value)}
                            />
                        </Box>
                    </Box>
                </ModalBody>
                <ModalFooter display={"flex"} justifyContent={"center"}>
                    {/* <Box display={"flex"} justifyContent={"center"}> */}
                    <Button minW={"7.5rem"} m={"0 4px"}
                        boxShadow={"rgba(0, 0, 0, 0.25) 0px -4px inset"}
                        bg={"rgb(242, 242, 242)"}
                        textColor={"rgb(0, 0, 0)"}
                        borderRadius={"4px"}
                        fontSize={"0.875rem"}
                        fontWeight={"bold"}
                        minH={"42px"}
                        p={"0 16px 4px"}
                        onClick={onClose}
                        _hover={{ minH: "40px", marginTop: "2px", paddingBottom: "2px", bg: "rgb(223, 223, 223)", boxShadow: "rgba(0, 0, 0, 0.25) 0px -2px inset" }}
                    >
                        Huỷ
                    </Button>
                    <Button minW={"7.5rem"} m={"0 4px"}
                        boxShadow={"rgba(0, 0, 0, 0.25) 0px -4px inset"}
                        bg={"rgb(38, 137, 12)"}
                        textColor={"rgb(255, 255, 255)"}
                        borderRadius={"4px"}
                        fontSize={"0.875rem"}
                        fontWeight={"bold"}
                        minH={"42px"}
                        p={"0 16px 4px"}
                        _hover={{ minH: "40px", marginTop: "2px", paddingBottom: "2px", bg: "rgb(35, 126, 11)", boxShadow: "rgba(0, 0, 0, 0.25) 0px -2px inset" }}
                        onClick={handleCreateTest}
                        isLoading={isLoading}
                    >
                        Lưu
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default TitleExam;