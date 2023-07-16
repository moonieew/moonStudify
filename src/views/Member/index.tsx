import { Avatar, Box, Checkbox, Container, Image, Skeleton, Text, useDisclosure } from "@chakra-ui/react";
import { MdPersonAddAlt, MdSortByAlpha } from "react-icons/md";
import MoreOptionMember from "./MoreOptionMember";
import AddMember from "./AddMember";
import { useEffect, useState } from "react";
import { getClassById } from "@/common/service/classService";
import { useRouter } from "next/router";
import { getUserById } from "@/common/service/user";

function Member() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState<any>()
    const router = useRouter();
    const [infoTeacher, setInforTeacher] = useState<any>()
    const [loading, setLoading] = useState(false)
    const [dataStudent, setDataStudent] = useState<any>()

    const getInfoClass = async () => {
        setLoading(true)
        const dataClass = await getClassById(router.query.id as string)
        setData(dataClass)
        const res = await getUserById(data?.teacher)
        setInforTeacher(res)
        getInfoStudent(dataClass.students).then((res) => {
            setDataStudent(res)
        })
        setLoading(false)
    }
    const getInfoStudent = async (Arr: any) => {
        const createArr: any[] = [];
        for (let i = 0; i < Arr?.length; i++) {
            const creator = await getUserById(Arr[i]);
            createArr.push(creator);
        }
        return createArr;
    }

    useEffect(() => {
        getInfoClass()
    }, [router.query.id])

    return (
        <>
            <Box h={"68px"} />
            <Box maxW={"47.5rem"} margin={"0 auto"} p={"1.5rem 1.5rem"}>
                {loading && (
                    <Box>
                        <Skeleton w="100%" h="80px" my={"1rem"} />
                        <Skeleton w="100%" h="80px" my={"1rem"} />
                        <Skeleton w="100%" h="80px" my={"1rem"} />
                        <Skeleton w="100%" h="80px" my={"1rem"} />
                        <Skeleton w="100%" h="80px" my={"1rem"} />
                    </Box>
                )}
                <Box mb={"2rem"}>
                    <Box borderBottom={"1px solid rgb(25,103,210)"} mb={"0.25rem"} pl={"1rem"} h={"4.5rem"}>
                        <Text fontSize={"2rem"} color={"rgb(23,78,166)"}>Giáo viên</Text>
                    </Box>
                    <Box display={"flex"} p={"0.5rem"} alignItems={"center"}>
                        <Avatar w={"32px"} h="32px" mr={"1rem"} name={infoTeacher?.fullname} src='https://bit.ly/broken-link' />
                        <Text fontSize={"0.875rem"} color={"#3c4043"} fontWeight={500}>
                            {infoTeacher?.fullname}
                        </Text>
                    </Box>
                </Box>

                <Box>
                    <Box borderBottom={"1px solid rgb(25,103,210)"}
                        mb={"1rem"} pl={"1rem"}
                        h={"4.5rem"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Text color={"rgb(23,78,166)"} fontSize={"2rem"}>
                            Sinh viên
                        </Text>
                        <Box display={"flex"} alignItems={"center"}>
                            <Text fontSize={"0.875rem"} fontWeight={500} color={"rgb(23,78,166)"} pr={"1.5rem"}>
                                {data?.students.length}
                            </Text>
                            <MdPersonAddAlt color="rgb(23,78,166)" size={"24"} onClick={onOpen} />
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"end"}>
                        <MdSortByAlpha size={"25"} />
                    </Box>
                    {dataStudent && dataStudent.map((item: any) => (
                        <Box key={item.id} display={"flex"} justifyContent={"space-between"}>
                            <Checkbox defaultChecked>
                                <Box display={"flex"} p={"0.5rem"} alignItems={"center"}>
                                    <Avatar w={"32px"} h="32px" mr={"1rem"} name={item.fullname} src='https://bit.ly/broken-link' />
                                    <Text fontSize={"0.875rem"} color={"#3c4043"} fontWeight={500}>
                                        {item.fullname}
                                    </Text>
                                </Box>
                            </Checkbox>
                            <MoreOptionMember idClass={data._id} idStudent={item._id} />
                        </Box>
                    ))}

                </Box>
            </Box>
            <AddMember isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default Member;