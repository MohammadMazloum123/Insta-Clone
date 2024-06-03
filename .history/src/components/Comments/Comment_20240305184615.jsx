import { Avatar, Flex } from "@chakra-ui/react"; 
const Comment = ({profilePic, text, createdAt, username}) => {
    return(
        <Flex gap={4}>
            <Avatar src={profilePic} name={username} size={"sm"} />
            <Flex direction={"column"}>
                <flex>
                    
                </flex>
            </Flex>
        </Flex>
    )
}

export default Comment;
