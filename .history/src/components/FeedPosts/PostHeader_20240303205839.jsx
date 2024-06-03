import { Avatar, Flex } from '@chakra-ui/react'
import React from 'react'

const PostHeader = () => {
    return(
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex gap={2} alignItems={"center"}>
                <Avatar src='/img1.png' alt="user profile pic"/>
            </Flex>
        </Flex>
    )
}

export default PostHeader
