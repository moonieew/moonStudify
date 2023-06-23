import { Box, Button, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";

function LandingPage() {
    return (
        <>
            <Container maxW={"5xl"} mt={"70px"} textAlign={"center"}>
                <Text fontSize={"48px"} fontWeight={700} lineHeight={"56px"} letterSpacing={"-0.5px"} mb={"1rem"}>
                    Where teaching and learning come together
                </Text>
                <Text fontSize={"20px"} lineHeight={"28px"} mb={"2rem"}>
                    Google Classroom is your all-in-one place for teaching and learning. Our easy-to-use and secure tool helps educators manage, measure, and enrich learning experiences.
                </Text>
                <Box border={"1px solid #dadce0"}
                    borderRadius={"4px"}
                    fontSize={"16px"} color={"#1a73e8"}
                    h={"48px"} w={"220px"}
                    p={"2px 24px 0"} fontWeight={500}
                    display="flex" justifyContent="center" alignItems="center"
                    m={"0 auto"}
                >
                    <Text>
                        Sign in to Classroom
                    </Text>
                </Box>
            </Container>
            <Container maxW={"7xl"} mt={"6rem"}>
                <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(4, 1fr)">
                    <GridItem colSpan={1} textAlign={"center"}
                        px={"22px"}
                        display={"flex"} flexDirection={"column"}
                        justifyContent={"center"}>
                        <Image h={"80px"} w={"160px"} m={"0 auto"}
                            src="https://edu.google.com/assets/icons/pages/main/classroom/all-in-one-place.svg" />
                        <Box mt={"16px"} fontSize={"20px"} fontWeight={400} lineHeight={"28px"}>
                            All-in-one place
                        </Box>
                        <Box mt={"16px"} fontSize={"16px"} fontWeight={400} lineHeight={"24px"} color={"#5f6368"}>
                            Bring all your learning tools together and manage multiple classes in one central destination.
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} textAlign={"center"}
                        px={"22px"}
                        display={"flex"} flexDirection={"column"}
                        justifyContent={"center"}>
                        <Image h={"80px"} w={"160px"} m={"0 auto"}
                            src="	https://edu.google.com/assets/icons/pages/main/classroom/easy-to-use.svg" />
                        <Box mt={"16px"} fontSize={"20px"} fontWeight={400} lineHeight={"28px"}>
                            Easy to use
                        </Box>
                        <Box mt={"16px"} fontSize={"16px"} fontWeight={400} lineHeight={"24px"} color={"#5f6368"}>
                            Anyone in your school community can get up and running with Classroom in minutes.
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} textAlign={"center"}
                        px={"22px"}
                        display={"flex"} flexDirection={"column"}
                        justifyContent={"center"}>
                        <Image h={"80px"} w={"160px"} m={"0 auto"}
                            src="https://edu.google.com/assets/icons/pages/main/classroom/built-for-collaboration.svg" />
                        <Box mt={"16px"} fontSize={"20px"} fontWeight={400} lineHeight={"28px"}>
                            Built for collaboration
                        </Box>
                        <Box mt={"16px"} fontSize={"16px"} fontWeight={400} lineHeight={"24px"} color={"#5f6368"}>
                            Work simultaneously in the same document with the whole class or connect face-to-face with Google Meet.
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} textAlign={"center"}
                        px={"22px"}
                        display={"flex"} flexDirection={"column"}
                        justifyContent={"center"}>
                        <Image h={"80px"} w={"160px"} m={"0 auto"}
                            src="https://edu.google.com/assets/icons/pages/main/classroom/access-from-anywhere.svg" />
                        <Box mt={"16px"} fontSize={"20px"} fontWeight={400} lineHeight={"28px"}>
                            Access from anywhere
                        </Box>
                        <Box mt={"16px"} fontSize={"16px"} fontWeight={400} lineHeight={"24px"} color={"#5f6368"}>
                            Empower teaching and learning from anywhere, on any device, and give your class more flexibility and mobility.
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default LandingPage;