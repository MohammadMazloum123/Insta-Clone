import { Avatar, Flex, Box, Text } from '@chakra-ui/react';


const PostHeader = () => {
    return(
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex gap={2} alignItems={"center"}>
                <Avatar src='/img1.png' alt="user profile pic" size={"sm"}/>
                <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                    asaprogrammer
                    <Box color={"gray.500"}>. 1w</Box>
                </Flex>
            </Flex>
            <Box>
                <Text>

                </Text>

            </Box>
        </Flex>
    )
}

export default PostHeader;
