import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

function gg() {
    const router = useRouter()

    const query = router.query
    console.log("query", query)

    return (
        <Box>
            google
        </Box>
    );
}

export default gg;