import { Avatar, Flex, Box } from '@chakra-ui/react';


const PostHeader = () => {
    return(
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex gap={2} alignItems={"center"}>
                <Avatar src='/img1.png' alt="user profile pic" size={"sm"}/>
                <Flex fontSize={12} fontWeight={"bold"}>

                </Flex>
            </Flex>
            <Box>

            </Box>
        </Flex>
    )
}

export default PostHeader;
