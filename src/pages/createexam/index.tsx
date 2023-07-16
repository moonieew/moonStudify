import { TestContextProvider } from "@/context/TextContext";
import CreateExamPage from "@/views/CreateExam";
import { Box } from "@chakra-ui/react";

function ExamPage() {
    return (
        <TestContextProvider>
            <CreateExamPage />
        </TestContextProvider>
    );
}

export default ExamPage;