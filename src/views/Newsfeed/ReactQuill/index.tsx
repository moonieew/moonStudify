import { Box } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
    const handleChange = (content: string) => {
        onChange(content);
    };
    return (
        <Box borderWidth="1px" borderRadius="md">
            <ReactQuill value={value} onChange={handleChange} />
        </Box>
    );
};