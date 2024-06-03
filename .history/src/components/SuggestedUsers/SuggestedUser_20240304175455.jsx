import { useState } from "react";
import { Avatar, Flex, Button, VStack, Box } from "@chakra-ui/react";
const SuggestedUser = ({followers, name, avatar}) => {
    const [isFollowed, setIsFollowed] = useState(false)
    return (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Flex gap={2} alignItems={"center"}>
                <Avatar name={name} avatar={avatar} size={"md"}/>
                <VStack spacing={2}>
                    <Box fontWeight={"bold"} fontSize={12}>
                        {name}
                    </Box>
                    <Box color={"gray.500"} fontSize={11}>
                        {followers} followers
                    </Box>
                </VStack>
            </Flex>
            <Button fontSize={13}
            >

            </Button>
        </Flex>
    )
}

export default SuggestedUser;
