import { Avatar, Flex } from "@chakra-ui/react"; 
const Comment = ({profilePic, text, }) => {
    return(
        <Flex gap={4}>
            <Avatar />
        </Flex>
    )
}

export default Comment;
