import { Avatar, Flex } from "@chakra-ui/react"; 
const Comment = ({profilePic, text, createdAt, username}) => {
    return(
        <Flex gap={4}>
            <Avatar src={profilePic} name={username} alignItems={} />
        </Flex>
    )
}

export default Comment;
