import { Avatar, Flex, Text } from "@chakra-ui/react"; 
const Comment = ({profilePic, text, createdAt, username}) => {
    return(
        <Flex gap={4}>
            <Avatar src={profilePic} name={username} size={"sm"} />
            <Flex direction={"column"}>
                <Flex gap={2}>
                    <Text fontWeight={"bold"} >

                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Comment;
